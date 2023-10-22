fetch('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js').then(response=>response.text()).then(animationScript=>{eval(animationScript);})
.catch(error => {
    console.error('Failed to load GSAP:', error);
});
