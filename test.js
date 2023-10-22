if (typeof executed === 'undefined') {
    executed = true;

    const newHead = document.createElement('head');
    const newBody = document.createElement('body');
    document.documentElement.replaceChild(newHead, document.head);
    document.documentElement.replaceChild(newBody, document.body);

    fetch('https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.min.js').then(response => response.text()).then(jsCode => eval(jsCode));
    
    const scriptElement = document.createElement('script');
    scriptElement.src = "https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg.js";
    scriptElement.zIndex = "9999";
    
    scriptElement.addEventListener('load', () => {
        bubbly({
            el: "#app",
            data: {
                configs: [
                    {},
                    {
                        background: (ctx) => {
                            const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
                            gradient.addColorStop(0, "#111");
                            gradient.addColorStop(1, "#422");
                            return gradient;
                        },
                        bubbles: {
                            fill: () => `hsla(0, 100%, 50%, ${Math.random() * 0.25})`,
                            shadow: () => ({blur: 4, color: "#fff"}),
                        },
                    },
                    {
                        background: (ctx) => {
                            const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
                            gradient.addColorStop(0, "#4c004c");
                            gradient.addColorStop(1, "#1a001a");
                            return gradient;
                        },
                        bubbles: {
                            fill: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`,
                            shadow: () => ({blur: 4, color: "#fff"}),
                        },
                    },
                    {
                        background: (ctx) => {
                            const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
                            gradient.addColorStop(0, "#fff4e6");
                            gradient.addColorStop(1, "#ffe9e4");
                            return gradient;
                        },
                        compose: "source-over",
                        bubbles: {
                            fill: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`,
                            shadow: () => ({blur: 1, color: "#fff"}),
                        },
                    },
                    {
                        background: (ctx) => {
                            const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
                            gradient.addColorStop(0, "#194167");
                            gradient.addColorStop(1, "#112144");
                            return gradient;
                        },
                        bubbles: {
                            count: 300,
                            objectCreator: function () {
                                const createImage = (canvas) => {
                                    const img = new Image();
                                    img.src = canvas.toDataURL();
                                    return img;
                                }
                                const radius = 5 + Math.random() * 15;
                                const blur = 15;
                                const bubbleCv = document.createElement("canvas");
                                bubbleCv.width = bubbleCv.height = (radius * 2) + (blur * 2) + 2;
                                const bubbleCtx = bubbleCv.getContext("2d");
                                bubbleCtx.shadowColor = "#fff";
                                bubbleCtx.shadowBlur = blur;
                                bubbleCtx.fillStyle = `hsla(${200 + Math.random() * 50}, 100%, 65%, .1)`;
                                bubbleCtx.beginPath();
                                bubbleCtx.arc(radius + blur, radius + blur, radius, 0, Math.PI * 2);
                                bubbleCtx.fill();
                                return {
                                    r: bubbleCv.width,
                                    a: -Math.PI / 2,
                                    v: 3 + Math.random() * 5.5,
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    img: createImage(bubbleCv),
                                    draw: (ctx, b) => ctx.drawImage(b.img, b.x - b.r, b.y - b.r)
                                }
                            },
                        },
                    },
                    {
                        background: () => "#f9f9f9",
                        compose: "source-over",
                        bubbles: {
                            count: 200,
                            fill: () => `hsla(${150 + Math.random() * 100}, 100%, 50%, .3)`,
                            radius: () => 1 + Math.random() * 4,
                            angle: () => Math.random() > 0.5 ? Math.PI : 2 * Math.PI,
                            velocity: () => 4 + Math.random() * 4,
                        },
                    },
                ],
            },
            methods: {
                copyConfig(i) {
                    let bubblyConfigText = configToText(this.configs[i]);
                    navigator.clipboard.writeText(bubblyConfigText).then(() => {
                        this.$buefy.toast.open("Copied!");
                    })
                },
                changeBubbly(i) {
                    document.body.removeChild(document.querySelector("canvas"));
                    bubbly(this.configs[i]);
                }
            }
        });
    });
    document.head.appendChild(scriptElement);
};
