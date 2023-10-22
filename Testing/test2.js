if (typeof executed === 'undefined') {
    executed = true;

    fetch('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js').then(response=>response.text()).then(animationScript=>{eval(animationScript);})
    .catch(error => {
        console.error('Failed to load GSAP:', error);
    });

}
