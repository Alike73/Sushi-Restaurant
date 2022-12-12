window.addEventListener('load', (event) => {
    let tl = gsap.timeline();
    tl.fromTo(".aboutTitle span", {y: 40, opacity: 0}, {delay: .5, stagger: .1, y: 0, opacity: 1})
    tl.fromTo(".aboutText", {y: 50, opacity: 0, scale: 0.85}, {duration: .8, y: 0, opacity: 1, scale: 1})
    tl.fromTo(".teamText", {y: 20, opacity: 0}, {duration: .7, y: 0, opacity: 1})
    tl.fromTo(".aboutBannerImg", {opacity: 0, height: 0, y: 200}, {duration: .8, opacity: 1, height: "auto", y: 0})
    tl.fromTo("#aboutBtn", {opacity: 0}, {duration: .5, opacity: 1})
});