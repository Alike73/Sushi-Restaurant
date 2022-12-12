gsap.registerPlugin(ScrollTrigger);

// =======================Testimonials=====================================>
ScrollTrigger.create({
	trigger: ".rotating-text",
	start: `top ${window.innerHeight * 0.9}`,
	toggleActions: "play none resume reverse",
	onEnter: () => gsap.fromTo(".rotating-text", {opacity:0, x: -250}, {duration: .5, delay: 1, opacity: 1, x: -50, ease: "power1.in"}),
	onLeave: () => gsap.fromTo(".rotating-text", {opacity: 1, x: -50}, {duration: .2, opacity:0, x: -250, ease: "power1.in",}),
	onEnterBack: () => gsap.fromTo(".rotating-text", {opacity:0, x: -250}, {duration: .5, delay: 1, opacity: 1, x: -50, ease: "power1.in"}),
	onLeaveBack: () => gsap.fromTo(".rotating-text", {opacity: 1, x: -50}, {duration: .2, opacity:0, x: -250, ease: "power1.in"}),
});

// ====================Testimonials=============================>
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const customerPhoto = document.querySelector(".customerPhoto");
const customerName = document.querySelector(".customerName");
const customerText = document.querySelector(".customer_text");
const subTitleText = document.querySelector(".subTitleText");

const customersNames = ["Mark", "Christina", "Courtney", "Matthew"];

const customersTestimonials = ["I really liked the work of Joe Doe and his team! Everything was very professional and cool!", "My experience was great. I walk in not knowing anything about sashimi and John Chiba and his staff walked me through it. He took our invasion of a sashimi we desired and made it real. Very professional and knowledgeable about his craft. Not only a great product but gracious staff. I appreciate them.", "Just wanted to thank Sushi Restaurant and John Chiba's team for the 'Nigiri' sushi. The 'Nigiri' was absolutely amazing . Thank you so much!!!!!!!!!!", "Our kindergarten class took a field trip to your sushi kitchen. It was the awesomest field trip EVER! The kids loved the hats and they loved seeing all of the sashimi and sushi goods. They enjoyed seeing the 'inner workings' of a kitchen and really enjoyed watching a sushi being decorated. They especially loved the 'temaki sushi' that you sent us home with! (So did our parents volunteers!) Thank you so much for taking the time to be our guides and for inviting us in to see what you do. We appreciate all you did for us!"];

const customersImages = ["images/Mark-photo-modified.png", "images/Christina-photo-modified.png", "images/Courtney-photo-modified.png", "images/Matthew-photo-modified.png"];

let i = 0;
// ----------NEXT-BUTTON-FUNCTION----------->
nextBtn.addEventListener("click", () => {
	gsap.fromTo(".rotating-text", {opacity: 0, scale: 0}, {delay: .5, duration: .5, opacity: 1, scale: 1})
	i++;
	if(i > customersImages.length -1 && i > customersNames.length -1 && i > customersTestimonials.length -1) {
		i = 0;
	}
	customerPhoto.src = customersImages[i];
	customerName.textContent = customersNames[i];
	customerText.textContent = customersTestimonials[i];
	let tl = gsap.timeline();
	tl.fromTo(".starsBox i", {y: -20, scale: 0, rotation: -45}, {delay: .3, duration: .3, stagger: .1, y: 0, scale: 1, rotation: 0})
	gsap.fromTo(customerPhoto, {opacity: 0}, {duration: 1.8, opacity: 1})
	gsap.fromTo(customerText, {x: -550, y: -50, opacity: 0, scale: 0}, {duration: 1.3, x: 0, y: 0, opacity: 1, scale: 1})
	gsap.fromTo(customerName, {y: -30, opacity: 0, scale: 0}, {duration: .8, y: 0, opacity: 1, scale: 1})
	gsap.fromTo(subTitleText, {opacity: 0, scale: 0,  y: -100}, {duration: .8, opacity: 1, scale: 1, y: 0})
});
// ------------PREVIOUS-BUTTON-FUNCTION----->
prevBtn.addEventListener("click", () => {
	gsap.fromTo(".rotating-text", {opacity: 0, scale: 0}, {delay: .5, duration: .5, opacity: 1, scale: 1})
	i--;
	if(i < 0) {
		i = customersImages.length -1;
		i = customersNames.length -1;
		i = customersTestimonials.length -1;
	}
	customerPhoto.src = customersImages[i];
	customerName.textContent = customersNames[i];
	customerText.textContent = customersTestimonials[i];
	let tl = gsap.timeline();
	tl.fromTo(".starsBox i", {y: -20, scale: 0, rotation: -45}, {delay: .3, duration: .3, stagger: .1, y: 0, scale: 1, rotation: 0})
	gsap.fromTo(customerPhoto, {opacity: 0}, {duration: 1.8, opacity: 1})
	gsap.fromTo(customerText, {y: 50, opacity: 0, scale: 0}, {duration: .9, y: 0, opacity: 1, scale: 1})
	gsap.fromTo(customerName, {y: -30, opacity: 0, scale: 0}, {duration: .8, y: 0, opacity: 1, scale: 1})
	gsap.fromTo(subTitleText, {opacity: 0, scale: 0,  y: -100}, {duration: .8, opacity: 1, scale: 1, y: 0})
});


// ================Rotating-Text====================
let words = document.querySelectorAll(".word");
words.forEach(function (word) {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let rotateText = function () {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    
    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(function () {
            letter.className = "letter out";
        }, i * 80);
    });
    
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach(function (letter, i) {
        letter.className = "letter behind";
        setTimeout(function () {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);

