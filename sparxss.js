if (typeof executed === 'undefined') {
    executed = true;

    var redirectSwitcher = false;

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
    toggler.style.top = '15px';
    toggler.style.left = '15px';
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
    button2.innerText = "Custom Javascript";
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

    button2.addEventListener('mouseover', function() {
        button2.style.backgroundColor = '#444';
    });

    button2.addEventListener('mouseout', function() {
        button2.style.backgroundColor = '#333';
    });

    button2.addEventListener('click', function() {
        var backgroundDiv = document.createElement('div');
        backgroundDiv.style.position = 'fixed';
        backgroundDiv.style.top = '0';
        backgroundDiv.style.left = '0';
        backgroundDiv.style.width = '100%';
        backgroundDiv.style.height = '100%';
        backgroundDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        backgroundDiv.style.zIndex = '10001';
    
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
        largeTextBox.style.width = '95%';
        largeTextBox.style.height = '400px';
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
            }
        });
        
        document.body.appendChild(largeTextBox);                                   
    
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
    
        executeButton.addEventListener('click', function() {
            var jsCode = largeTextBox.value;
    
            try {
                eval(jsCode);
            } catch (error) {
                executeButton.innerText = 'Error: Execution Failed';
    
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
            document.body.removeChild(backgroundDiv);
        });
    
        buttonContainer.appendChild(executeButton);
        buttonContainer.appendChild(deleteButton);
        contentContainer.appendChild(largeTextBox);
        contentContainer.appendChild(buttonContainer);
    
        backgroundDiv.appendChild(contentContainer);
        document.body.appendChild(backgroundDiv);
    });    

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

    invis2.appendChild(textBox1);
    invis2.appendChild(button1);
    button1.insertAdjacentElement('afterend', button2);

    container.appendChild(sparxsstext);
    container.appendChild(invis2);
    container.appendChild(modeButton);

    document.body.appendChild(container);
    document.body.appendChild(invis);

    invis.appendChild(toggler);

    function tempRedirector() {
        var url = textBox1.value;
        if (url.trim() !== "") {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
            window.open(url, '_blank');
        }
    }

    function permRedirector() {
        var url = textBox1.value;
        if (url.trim() !== "") {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
            window.location.href = url;
        }
    }
}
