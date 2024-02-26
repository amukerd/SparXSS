// so it executes once
if (typeof executed === 'undefined') {
    executed = true; 

    // eruda bc useful for debugging
    (function(){var script=document.createElement("script");script.src="https://cdn.jsdelivr.net/npm/eruda";document.body.append(script);script.onload=function(){eruda.init();console.log("Script Loaded: Thank you for using SparXSS!")}})();
    
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = '#222';
    container.style.zIndex = '9999';

    var invis = document.createElement('div');
    invis.style.position = 'fixed';
    invis.style.top = '0';
    invis.style.left = '0';
    invis.style.width = '5px'; 
    invis.style.height = '5px'; 
    invis.style.backgroundColor = 'transparent';
    invis.style.zIndex = '10000';

    var toggler = document.createElement('button');
    toggler.innerText = 'Close';
    toggler.style.position = 'fixed';
    toggler.style.top = '10px';
    toggler.style.left = '10px';
    toggler.style.width = '100px';
    toggler.style.backgroundColor = '#333';
    toggler.style.border = 'none';
    toggler.style.padding = '10px 10px';
    toggler.style.fontSize = '20px';
    toggler.style.borderRadius = '10px';
    toggler.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    toggler.style.transition = 'background-color 0.3s ease';
    toggler.style.color = '#aaa';
    toggler.style.cursor = 'pointer';
    toggler.style.outline = 'none';

    // yes you can drag the toggler
    var isOpen = true;
    var isDragging = false;
    var offsetX, offsetY;
    var clickStartX, clickStartY;
    
    toggler.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - toggler.getBoundingClientRect().left;
        offsetY = e.clientY - toggler.getBoundingClientRect().top;
        clickStartX = e.clientX;
        clickStartY = e.clientY;
    });
    
    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            var newLeft = e.clientX - offsetX;
            var newTop = e.clientY - offsetY;
    
            var maxX = window.innerWidth - toggler.clientWidth;
            var maxY = window.innerHeight - toggler.clientHeight;
    
            newLeft = Math.max(0, Math.min(newLeft, maxX));
            newTop = Math.max(0, Math.min(newTop, maxY));
    
            toggler.style.left = newLeft + 'px';
            toggler.style.top = newTop + 'px';
        }
    });
    
    document.addEventListener('mouseup', function (e) {
        if (isDragging) {
            isDragging = false;
            var distanceMoved = Math.sqrt(Math.pow(e.clientX - clickStartX, 2) + Math.pow(e.clientY - clickStartY, 2));
            if (distanceMoved === 0) {
                if (isOpen) {
                    container.style.display = 'none';
                    toggler.innerText = 'Open';
                } else {
                    container.style.display = '';
                    toggler.innerText = 'Close';
                }
                isOpen = !isOpen;
            }
        }
    });
    
    toggler.addEventListener('mouseover', function() {
        toggler.style.backgroundColor = '#444';
    });
    
    toggler.addEventListener('mouseout', function() {
        toggler.style.backgroundColor = '#333';
    });
    
    var sparxsstext = document.createElement("div");
    sparxsstext.style.position = "fixed";
    sparxsstext.style.top = "30%";
    sparxsstext.style.left = "50%";
    sparxsstext.style.transform = "translate(-50%, -50%)";
    sparxsstext.style.fontSize = "100px";
    sparxsstext.style.textAlign = "center";
    sparxsstext.style.color = "#aaa"; 
    sparxsstext.style.fontWeight = "bold"; 
    sparxsstext.innerText = "SparXSS";

    var invis2 = document.createElement("div");
    invis2.style.position = "fixed";
    invis2.style.top = "50%";
    invis2.style.left = "50%";
    invis2.style.transform = "translate(-50%, -50%)";
    invis2.style.backgroundColor = "transparent";
    invis2.style.textAlign = "center";

    var textBox1 = document.createElement("input");
    textBox1.type = "text";
    textBox1.placeholder = "Temporary Redirect";
    textBox1.style.display = "block";
    textBox1.style.margin = "10px auto";
    textBox1.style.width = "80vw";
    textBox1.style.color = '#aaa';
    textBox1.style.placeholderColor = '#aaa';
    textBox1.style.background = '#333';
    textBox1.style.border = 'none';
    textBox1.style.padding = '10px 10px';
    textBox1.style.fontSize = '20px';
    textBox1.style.borderRadius = '10px';
    textBox1.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    textBox1.style.transition = 'background-color 0.3s ease';
    textBox1.style.textAlign = 'center';
    textBox1.style.outline = 'none';

    textBox1.addEventListener('mouseover', function() {
        textBox1.style.backgroundColor = '#444';
    });

    textBox1.addEventListener('mouseout', function() {
        textBox1.style.backgroundColor = '#333';
    });

    textBox1.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (redirectSwitcher) {
                permRedirector();
            } else {
                tempRedirector();
            }
        }
    });

    textBox1.addEventListener('click', function() {
        if (textBox1.placeholder === "Temporary Redirect" || textBox1.placeholder === "Permanent Redirect") {
            textBox1.placeholder = "";
        }
    });

    textBox1.addEventListener('blur', function() {
        if (textBox1.value.trim() === "") {
            if (redirectSwitcher) {
                textBox1.placeholder = "Permanent Redirect";
            } else {
                textBox1.placeholder = "Temporary Redirect";
            }
        }
    });

    var button1 = document.createElement("button");
    button1.innerText = "Redirect";
    button1.style.cursor = 'pointer';
    button1.style.width = '30vw';
    button1.style.backgroundColor = '#333';
    button1.style.border = 'none';
    button1.style.padding = '10px 10px';
    button1.style.fontSize = '20px';
    button1.style.borderRadius = '10px';
    button1.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    button1.style.transition = 'background-color 0.3s ease';
    button1.style.color = '#aaa';
    button1.style.display = 'block';
    button1.style.margin = '10px auto'; 
    button1.style.display = 'block'; 
    button1.style.textAlign = 'center';
    button1.style.outline = 'none';

    button1.addEventListener('mouseover', function() {
        button1.style.backgroundColor = '#444';
    });

    button1.addEventListener('mouseout', function() {
        button1.style.backgroundColor = '#333';
    });

    button1.addEventListener('click', function() {
        if (redirectSwitcher) {
            permRedirector();
        } else {
            tempRedirector();
        }
    });

    var button2 = document.createElement("button");
    button2.innerText = "Custom Links";
    button2.style.cursor = 'pointer';
    button2.style.width = '30vw';
    button2.style.backgroundColor = '#333';
    button2.style.border = 'none';
    button2.style.padding = '10px 10px';
    button2.style.fontSize = '20px';
    button2.style.borderRadius = '10px';
    button2.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    button2.style.transition = 'background-color 0.3s ease';
    button2.style.color = '#aaa';
    button2.style.margin = '10px auto'; 
    button2.style.display = 'block'; 
    button2.style.textAlign = 'center'; 
    button2.style.outline = 'none';

    button2.addEventListener('mouseover', function() {
        button2.style.backgroundColor = '#444';
    });

    button2.addEventListener('mouseout', function() {
        button2.style.backgroundColor = '#333';
    });

    button2.addEventListener('click', function() {
        backgroundDiv2.style.display = '';
    });

    var button3 = document.createElement("button");
    button3.innerText = "Javascript";
    button3.style.cursor = 'pointer';
    button3.style.width = '10vw';
    button3.style.backgroundColor = '#333';
    button3.style.border = 'none';
    button3.style.padding = '10px 10px';
    button3.style.fontSize = '20px';
    button3.style.borderRadius = '10px';
    button3.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    button3.style.transition = 'background-color 0.3s ease';
    button3.style.color = '#aaa';
    button3.style.position = "fixed";
    button3.style.bottom = "10px";
    button3.style.left = "10px";
    button3.style.display = 'block'; 
    button3.style.textAlign = 'center'; 
    button3.style.outline = 'none';

    button3.addEventListener('mouseover', function() {
        button3.style.backgroundColor = '#444';
    });

    button3.addEventListener('mouseout', function() {
        button3.style.backgroundColor = '#333';
    });

    button3.addEventListener('click', function() {
        backgroundDiv.style.display = 'block';
    });

    // start of javascript execution elements
    var backgroundDiv = document.createElement('div');
    backgroundDiv.style.position = 'fixed';
    backgroundDiv.style.top = '0';
    backgroundDiv.style.left = '0';
    backgroundDiv.style.width = '100%';
    backgroundDiv.style.height = '100%';
    backgroundDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    backgroundDiv.style.zIndex = '10001';
    backgroundDiv.style.display = 'none';

    var contentContainer = document.createElement('div');
    contentContainer.style.position = 'fixed';
    contentContainer.style.top = '0';
    contentContainer.style.left = '0';
    contentContainer.style.right = '0';
    contentContainer.style.bottom = '0';
    contentContainer.style.margin = '75px';
    contentContainer.style.backgroundColor = '#333';
    contentContainer.style.padding = '40px';
    contentContainer.style.borderRadius = '10px';
    contentContainer.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    contentContainer.style.color = '#fff';
    contentContainer.style.backgroundColor = '#222';

    var largeTextBox = document.createElement('textarea');
    largeTextBox.style.width = '100%';
    largeTextBox.style.height = '86%';
    largeTextBox.style.fontSize = '18px';
    largeTextBox.style.color = '#fff';
    largeTextBox.style.backgroundColor = '#333';
    largeTextBox.style.border = 'none';
    largeTextBox.style.borderRadius = '10px';
    largeTextBox.style.padding = '20px';
    largeTextBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    largeTextBox.style.resize = 'none';
    largeTextBox.style.outline = 'none';
    largeTextBox.setAttribute('spellcheck', 'false');
    document.body.appendChild(largeTextBox);

    var history = [''];
    var historyIndex = 0;

    function saveState() {
        if (historyIndex < history.length - 1) {
            history = history.slice(0, historyIndex + 1);
        }
        history.push(largeTextBox.value);
        historyIndex = history.length - 1;
    }

    largeTextBox.addEventListener('input', saveState);

    function undo() {
        if (historyIndex > 0) {
            historyIndex--;
            largeTextBox.value = history[historyIndex];
        }
    }

    function redo() {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            largeTextBox.value = history[historyIndex];
        }
    }

    largeTextBox.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'z') {
            e.preventDefault();
            undo();
        } else if (e.ctrlKey && e.key === 'y') {
            e.preventDefault();
            redo();
        } else if (e.key === 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var spaces = '    ';
            var value = this.value;
            if (start === end) {
                this.value = value.substring(0, start) + spaces + value.substring(end);
                this.selectionStart = this.selectionEnd = start + spaces.length;
            } else {
                var lines = value.substring(start, end).split('\n');
                var indentedText = lines.map(function(line) {
                    return spaces + line;
                }).join('\n');
                this.value = value.substring(0, start) + indentedText + value.substring(end);
                this.selectionStart = start;
                this.selectionEnd = end + spaces.length * lines.length;
            }
            saveState();
        // added deleting a 4 space tab
        } else if (e.key === 'Backspace' && this.value.substring(this.selectionStart - 4, this.selectionStart) === '    ') {
            e.preventDefault();
            var start = this.selectionStart;
            this.value = this.value.substring(0, start - 4) + this.value.substring(start);
            this.selectionStart = this.selectionEnd = start - 4;
            saveState();
        }
    });        

    var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginTop = '20px';

    var executeButton = document.createElement('button');
    executeButton.innerText = 'Execute';
    executeButton.style.width = '47.5%';
    executeButton.style.backgroundColor = '#333';
    executeButton.style.border = 'none';
    executeButton.style.borderRadius = '10px';
    executeButton.style.padding = '15px';
    executeButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    executeButton.style.fontSize = '20px';
    executeButton.style.color = '#aaa';
    executeButton.style.cursor = 'pointer';
    executeButton.style.transition = 'background-color 0.3s ease';

    executeButton.addEventListener('mouseover', function() {
        executeButton.style.backgroundColor = '#444';
    });

    executeButton.addEventListener('mouseout', function() {
        executeButton.style.backgroundColor = '#333';
    });

    // actual javascript execution
    executeButton.addEventListener('click', function() {
        var jsCode = largeTextBox.value;

        try {
            eval(jsCode);
        } catch (error) {
            executeButton.innerText = 'Error: Execution Failed';
            console.log(error)
            setTimeout(function() {
                executeButton.innerText = 'Execute';
            }, 2000);
        }
    });

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Close Menu';
    deleteButton.style.width = '47.5%';
    deleteButton.style.backgroundColor = '#333';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '10px';
    deleteButton.style.padding = '15px';
    deleteButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    deleteButton.style.fontSize = '20px';
    deleteButton.style.color = '#aaa';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.transition = 'background-color 0.3s ease';

    deleteButton.addEventListener('mouseover', function() {
        deleteButton.style.backgroundColor = '#444';
    });

    deleteButton.addEventListener('mouseout', function() {
        deleteButton.style.backgroundColor = '#333';
    });

    deleteButton.addEventListener('click', function() {
        backgroundDiv.style.display = 'none';
    });

    buttonContainer.appendChild(executeButton);
    buttonContainer.appendChild(deleteButton);
    contentContainer.appendChild(largeTextBox);
    contentContainer.appendChild(buttonContainer);

    backgroundDiv.appendChild(contentContainer);
    document.body.appendChild(backgroundDiv);
    // end of javascript execution elements

    var modeButton = document.createElement("button");
    modeButton.innerText = "Current Mode: Temporary Redirect";
    modeButton.style.position = "fixed";
    modeButton.style.bottom = "10px";
    modeButton.style.left = "50%";
    modeButton.style.transform = "translateX(-50%)";
    modeButton.style.cursor = "pointer";
    modeButton.style.width = "30vw";
    modeButton.style.backgroundColor = "#333";
    modeButton.style.border = "none";
    modeButton.style.padding = "10px 10px";
    modeButton.style.fontSize = "20px";
    modeButton.style.borderRadius = "10px";
    modeButton.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
    modeButton.style.transition = "background-color 0.3s ease";
    modeButton.style.color = "#aaa";
    modeButton.style.outline = 'none';

    modeButton.addEventListener("mouseover", function() {
        modeButton.style.backgroundColor = "#444";
    });

    modeButton.addEventListener("mouseout", function() {
        modeButton.style.backgroundColor = "#333";
    });

    modeButton.addEventListener("click", function() {
        if (redirectSwitcher) {
            redirectSwitcher = false;
            modeButton.innerText = "Current Mode: Temporary Redirect";
            textBox1.placeholder = "Temporary Redirect";
        } else {
            redirectSwitcher = true;
            modeButton.innerText = "Current Mode: Permanent Redirect";
            textBox1.placeholder = "Permanent Redirect";
        }
    });

    var backgroundDiv2 = document.createElement('div');
    backgroundDiv2.style.position = 'fixed';
    backgroundDiv2.style.top = '0';
    backgroundDiv2.style.left = '0';
    backgroundDiv2.style.width = '100%';
    backgroundDiv2.style.height = '100%';
    backgroundDiv2.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    backgroundDiv2.style.zIndex = '10001';
    backgroundDiv2.style.display = 'none';

    var contentContainer = document.createElement('div');
    contentContainer.style.position = 'fixed';
    contentContainer.style.top = '0';
    contentContainer.style.left = '0';
    contentContainer.style.right = '0';
    contentContainer.style.bottom = '0';
    contentContainer.style.margin = '75px';
    contentContainer.style.marginBottom = '100px';
    contentContainer.style.backgroundColor = '#333';
    contentContainer.style.padding = '40px';
    contentContainer.style.borderRadius = '10px';
    contentContainer.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    contentContainer.style.color = '#fff';
    contentContainer.style.backgroundColor = '#222';
    contentContainer.style.overflow = 'auto';

    var copier = document.createElement('button');
    copier.innerText = 'Copy Links';
    copier.style.position = 'fixed';
    copier.style.bottom = '20px';
    copier.style.width = '15%';
    copier.style.left = '42.5%';
    copier.style.backgroundColor = '#333';
    copier.style.border = 'none';
    copier.style.padding = '15px';
    copier.style.fontSize = '20px';
    copier.style.borderRadius = '10px';
    copier.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    copier.style.transition = 'background-color 0.3s ease';
    copier.style.color = '#aaa';
    copier.style.cursor = 'pointer';
    copier.style.outline = 'none';
    copier.style.textAlign = 'center';

    copier.addEventListener('mouseover', function() {
        copier.style.backgroundColor = '#444';
    });

    copier.addEventListener('mouseout', function() {
        copier.style.backgroundColor = '#333';
    });

    copier.addEventListener('click', function() {
        var textarea = document.querySelector('.questions-textarea');
        textarea.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });

    var closeButton = document.createElement('div');
    closeButton.innerText = 'Close Menu';
    closeButton.style.width = '32.5%';
    closeButton.style.backgroundColor = '#333';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '10px';
    closeButton.style.padding = '15px';
    closeButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    closeButton.style.fontSize = '20px';
    closeButton.style.color = '#aaa';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.3s ease';
    closeButton.style.position = 'fixed';
    closeButton.style.right = '6.5%';
    closeButton.style.bottom = '20px';
    closeButton.style.textAlign = 'center';

    closeButton.addEventListener('mouseover', function() {
        closeButton.style.backgroundColor = '#444';
    });

    closeButton.addEventListener('mouseout', function() {
        closeButton.style.backgroundColor = '#333';
    });

    closeButton.addEventListener('click', function() {
        backgroundDiv2.style.display = 'none';

        var textarea = document.querySelector('.questions-textarea');
        textarea.select();
        window.getSelection().removeAllRanges();
    });

    var linkContainer = document.createElement('div');
    linkContainer.style.marginTop = '20px'; 
    linkContainer.style.textAlign = 'center';

    var otherButton = document.createElement('div');
    otherButton.innerText = 'New Hyperlink';
    otherButton.style.width = '32.5%';
    otherButton.style.backgroundColor = '#333';
    otherButton.style.border = 'none';
    otherButton.style.borderRadius = '10px';
    otherButton.style.padding = '15px';
    otherButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    otherButton.style.fontSize = '20px';
    otherButton.style.color = '#aaa';
    otherButton.style.cursor = 'pointer';
    otherButton.style.transition = 'background-color 0.3s ease';
    otherButton.style.position = 'fixed';
    otherButton.style.left = '6.5%';
    otherButton.style.bottom = '20px';
    otherButton.style.textAlign = 'center';
    
    otherButton.addEventListener('mouseover', function() {
        otherButton.style.backgroundColor = '#444';
    });
    
    otherButton.addEventListener('mouseout', function() {
        otherButton.style.backgroundColor = '#333';
    });

    // have to define these outside the function so checkpoint2() can acess them
    var backgroundDiv3; 
    var textBox;
    var linkContainer;

    function checkpoint1() {
        backgroundDiv3 = document.createElement('div');
        backgroundDiv3.style.position = 'fixed';
        backgroundDiv3.style.top = '0';
        backgroundDiv3.style.left = '0';
        backgroundDiv3.style.width = '100%';
        backgroundDiv3.style.height = '100%';
        backgroundDiv3.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        backgroundDiv3.style.zIndex = '10001';

        var contentContainer = document.createElement('div');
        contentContainer.style.width = '1000px';
        contentContainer.style.height = '300px';
        contentContainer.style.backgroundColor = '#222';
        contentContainer.style.borderRadius = '10px';
        contentContainer.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
        contentContainer.style.textAlign = 'center';
        contentContainer.style.position = 'absolute';
        contentContainer.style.left = '50%';
        contentContainer.style.top = '50%';
        contentContainer.style.transform = 'translate(-50%, -50%)';

        var cancelHyperLinks = document.createElement('button');
        cancelHyperLinks.innerText = 'X';
        cancelHyperLinks.style.position = 'fixed';
        cancelHyperLinks.style.width = '30px';
        cancelHyperLinks.style.height = '30px';
        cancelHyperLinks.style.fontSize = '20px'; 
        cancelHyperLinks.style.top = '-5px';
        cancelHyperLinks.style.right = '-5px';
        cancelHyperLinks.style.margin = '10px';
        cancelHyperLinks.style.color = '#aaa';
        cancelHyperLinks.style.backgroundColor = '#333';
        cancelHyperLinks.style.border = 'none';
        cancelHyperLinks.style.borderRadius = '50%';
        cancelHyperLinks.style.outline = 'none';
        cancelHyperLinks.style.textAlign = 'center';
        cancelHyperLinks.style.cursor = 'pointer';
        cancelHyperLinks.style.fontWeight = 'bold';
        cancelHyperLinks.style.transition = 'background-color 0.3s ease';
    
        cancelHyperLinks.addEventListener('mouseover', function() {
            cancelHyperLinks.style.backgroundColor = '#444';
        });
    
        cancelHyperLinks.addEventListener('mouseout', function() {
            cancelHyperLinks.style.backgroundColor = '#333';
        });

        cancelHyperLinks.addEventListener('click', function() {
            backgroundDiv3.remove();
        });

        var topText = document.createElement('div');
        topText.innerText = 'Add Your URL Below:';
        topText.style.padding = '10px';
        topText.style.marginTop = '35px';
        topText.style.border = 'none';
        topText.style.borderRadius = '10px';
        topText.style.color = '#aaa';
        topText.style.transition = 'background-color 0.3s ease';
        topText.style.backgroundColor = 'transparent';
        topText.style.userSelect = 'none';
        topText.style.cursor = 'auto';
        topText.style.fontSize = '24px';
        topText.style.textAlign = 'center';

        textBox = document.createElement('input');
        textBox.type = 'text';
        textBox.placeholder = '...';
        textBox.style.width = '80%';
        textBox.style.padding = '15px';
        textBox.style.margin = '15px';
        textBox.style.backgroundColor = '#333';
        textBox.style.border = 'none';
        textBox.style.borderRadius = '10px';
        textBox.style.boxSizing = 'border-box';
        textBox.style.color = '#aaa';
        textBox.style.cursor = 'text';
        textBox.style.transition = 'background-color 0.3s ease';
        textBox.style.fontSize = '24px';
        textBox.style.outline = 'none';

        textBox.addEventListener('mouseover', function() {
            textBox.style.backgroundColor = '#444';
        });

        textBox.addEventListener('mouseout', function() {
            textBox.style.backgroundColor = '#333';
        });
        
        textBox.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                if (textBox.value.trim() !== '' && textBox.value.includes('.')) { 
                    userURL = textBox.value
                    if (userURL.startsWith("https://")) {
                      userURL = userURL.slice(8);
                    } else if (userURL.startsWith("http://")) {
                      userURL = userURL.slice(7);
                    }                
                    backgroundDiv3.style.display = 'none';
                    checkpoint2(userURL);
                } else {
                    bottomButton.innerText = 'Error: Invalid URL';
                    setTimeout(function() {
                        bottomButton.innerText = 'Add Hyperlink';
                    }, 2000); 
                }
            }
        });

        var bottomButton = document.createElement('button');
        bottomButton.innerText = 'Add Hyperlink';
        bottomButton.style.width = '80%';
        bottomButton.style.padding = '15px';
        bottomButton.style.margin = '15px';
        bottomButton.style.backgroundColor = '#333';
        bottomButton.style.border = 'none';
        bottomButton.style.borderRadius = '10px';
        bottomButton.style.boxSizing = 'border-box';
        bottomButton.style.color = '#aaa';
        bottomButton.style.cursor = 'pointer';
        bottomButton.style.transition = 'background-color 0.3s ease';
        bottomButton.style.fontSize = '24px';

        bottomButton.addEventListener('mouseover', function() {
            bottomButton.style.backgroundColor = '#444';
        });

        bottomButton.addEventListener('mouseout', function() {
            bottomButton.style.backgroundColor = '#333';
        });

        bottomButton.addEventListener('click', function() {
            if (textBox.value.trim() !== '' && textBox.value.includes('.')) { 
                userURL = textBox.value
                if (userURL.startsWith("https://")) {
                  userURL = userURL.slice(8);
                } else if (userURL.startsWith("http://")) {
                  userURL = userURL.slice(7);
                }                
                backgroundDiv3.style.display = 'none';
                checkpoint2(userURL);
            } else {
                bottomButton.innerText = 'Error: Invalid URL';
                setTimeout(function() {
                    bottomButton.innerText = 'Add Hyperlink';
                }, 2000); 
            }
        });

        contentContainer.appendChild(topText);
        contentContainer.appendChild(textBox);
        contentContainer.appendChild(bottomButton);
        contentContainer.appendChild(cancelHyperLinks);

        backgroundDiv3.appendChild(contentContainer);
        document.body.appendChild(backgroundDiv3);
    }

    var linkCounter = 1;
    
    function checkpoint2(userURL) {
        const websiteURL = 'https://' + userURL;
        var faviconURL = '';
    
        fetch(websiteURL)
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                var match = data.match(/<link.*?rel=["']icon["'].*?href=["'](.*?)["']/i);
                if (match) {
                    faviconURL = match[1];
                    console.log("Website URL: " + websiteURL)
                    console.log("Favicon Path: " + faviconURL)
                    if (faviconURL.startsWith('/') && !websiteURL.endsWith('/')) {
                        faviconURL = websiteURL + faviconURL;
                    } else if (faviconURL.startsWith('http')) {
                        faviconURL = faviconURL;
                    } else {
                        faviconURL = websiteURL + '/' + faviconURL;
                    }
                } else {
                    faviconURL = 'https://www.google.com/s2/favicons?domain=' + userURL;
                }

                console.log("Final Favicon URL: " + faviconURL)
    
                var link = document.createElement('button');
                link.style.width = '25%';
                link.style.height = '225px';
                link.style.backgroundColor = '#333';
                link.style.border = 'none';
                link.style.borderRadius = '10px';
                link.style.padding = '15px';
                link.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
                link.style.fontSize = '20px';
                link.style.color = '#aaa';
                link.style.cursor = 'pointer';
                link.style.transition = 'background-color 0.3s ease';
                link.style.margin = '10px';
                link.style.textAlign = 'center';
    
                link.addEventListener('mouseover', function() {
                    link.style.backgroundColor = '#444';
                });
    
                link.addEventListener('mouseout', function() {
                    link.style.backgroundColor = '#333';
                });
    
                link.addEventListener('click', function() {
                    if (redirectSwitcher === false) {
                        window.open('https://' + userURL, '_blank');
                    } else {
                        window.location.href = 'https://' + userURL;
                    }
                });
    
                linkContainer.appendChild(link);
    
                var imgDiv = document.createElement('img');
                imgDiv.style.width = '150px';
                imgDiv.style.height = '150px';
                imgDiv.style.textAlign = 'center';
                imgDiv.src = faviconURL;
                
                link.appendChild(imgDiv);
    
                var linkText = document.createElement('div');
                linkText.innerText = userURL;
                linkText.style.marginTop = '10px';
                linkText.style.textAlign = 'center';
                
                link.appendChild(linkText);

                var deleteLink = document.createElement('button');
                deleteLink.innerText = 'X';
                deleteLink.style.position = 'fixed';
                deleteLink.style.width = '30px';
                deleteLink.style.height = '30px';
                deleteLink.style.fontSize = '20px'; 
                deleteLink.style.top = '-5px';
                deleteLink.style.right = '-5px';
                deleteLink.style.margin = '10px';
                deleteLink.style.color = '#aaa';
                deleteLink.style.backgroundColor = '#333';
                deleteLink.style.border = 'none';
                deleteLink.style.borderRadius = '50%';
                deleteLink.style.outline = 'none';
                deleteLink.style.textAlign = 'center';
                deleteLink.style.cursor = 'pointer';
                deleteLink.style.fontWeight = 'bold';
                deleteLink.style.transition = 'background-color 0.3s ease';
            
                deleteLink.addEventListener('mouseover', function() {
                    deleteLink.style.backgroundColor = '#444';
                });
            
                deleteLink.addEventListener('mouseout', function() {
                    deleteLink.style.backgroundColor = '#333';
                });
        
                deleteLink.addEventListener('click', function() {
                    backgroundDiv3.remove();
                });

                link.appendChild(deleteLink)

            })
    }

    otherButton.addEventListener('click', checkpoint1);

    invis.appendChild(toggler);
    invis2.appendChild(textBox1);
    invis2.appendChild(button1);
    button1.insertAdjacentElement('afterend', button2);

    container.appendChild(button3);
    container.appendChild(sparxsstext);
    container.appendChild(invis2);
    container.appendChild(modeButton);

    document.body.appendChild(container);
    document.body.appendChild(invis);

    contentContainer.appendChild(linkContainer);
    contentContainer.appendChild(otherButton);
    contentContainer.appendChild(copier);
    contentContainer.appendChild(closeButton);
    backgroundDiv2.appendChild(contentContainer);
    document.body.appendChild(backgroundDiv2);

    var redirectSwitcher = false;

    function tempRedirector() {
        var setUrl = textBox1.value;
        if (setUrl.trim() !== "") {
            if (!setUrl.startsWith("http://") && !setUrl.startsWith("https://")) {
                setUrl = "https://" + setUrl;
            }
            window.open(setUrl, '_blank');
        }
    }

    function permRedirector() {
        var setUrl = textBox1.value;
        if (setUrl.trim() !== "") {
            if (!setUrl.startsWith("http://") && !setUrl.startsWith("https://")) {
                setUrl = "https://" + setUrl;
            }
            window.location.href = setUrl;
        }
    }
}
