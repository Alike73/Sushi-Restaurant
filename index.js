
window.addEventListener('load', (event) => {
    let tl = gsap.timeline();
    tl.fromTo(".sushiLogo", {x: -50, opacity: 0}, {delay: .2, duration: .5, x: 0, opacity: 1})
    tl.fromTo(".title span", {opacity: 0, y: 50, x: -50}, {duration: .5, stagger: .1, opacity: 1, y: 0, x: 0})
    tl.fromTo(".subTitle span", {opacity: 0, y: 30, x: 20}, {duration: .5, stagger: .1, opacity: 1, y: 0, x: 0})
    tl.fromTo(".bannerImg", {x: -300, opacity: 0}, {duration: 1.3, x: 0, opacity: 1})
    tl.fromTo("#mainBtn", {opacity: 0}, {duration: .2, opacity: 1})
});