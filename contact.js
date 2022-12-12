
let tl = gsap.timeline();
tl.fromTo("#contactTitle", {x: -500, opacity: 0}, {delay: .5, duration: .5, opacity: 1, x: 0})
tl.fromTo("#contactImgBox", {scale: 0}, {duration: .3, scale: 1})
tl.fromTo(".contactForm", {opacity: 0, x: 500}, {duration: .5, opacity: 1, x: 0})
tl.fromTo(".footerTitle", {opacity: 0, y: 50}, {duration: .5, opacity: 1, y: 0})
tl.fromTo(".nav li", {opacity: 0, y: 30}, {duration: .5, stagger: .1, opacity: 1, y: 0})
tl.fromTo(".footerEmail", {x: -500, opacity: 0}, {duration: .5, opacity: 1, x: 0})
tl.fromTo(".socLinkBox", {opacity: 0, y: 50}, {duration: .3, opacity: 1, y: 0})


document.querySelectorAll('.button').forEach(button => {

    let getVar = variable => getComputedStyle(button).getPropertyValue(variable);
		const formThanksText = document.querySelector(".formThanksText");
		const contactName = document.querySelector("#contactName");
        const contactEmail = document.querySelector("#contactEmail");
        const contactTextArea = document.querySelector("#contactTextArea");
    button.addEventListener('click', e => {
        e.preventDefault();
        if(contactEmail.value != "" && contactTextArea.value != "" && contactName.value != "") {
        
        gsap.to(button, {border: 0, delay: -.5})
        
        if(!button.classList.contains('active')) {

            button.classList.add('active');

            gsap.to(button, {
                keyframes: [{
                    '--left-wing-first-x': 50,
                    '--left-wing-first-y': 100,
                    '--right-wing-second-x': 50,
                    '--right-wing-second-y': 100,
                    duration: .2,
                    onComplete() {
                        gsap.set(button, {
                            '--left-wing-first-y': 0,
                            '--left-wing-second-x': 40,
                            '--left-wing-second-y': 100,
                            '--left-wing-third-x': 0,
                            '--left-wing-third-y': 100,
                            '--left-body-third-x': 40,
                            '--right-wing-first-x': 50,
                            '--right-wing-first-y': 0,
                            '--right-wing-second-x': 60,
                            '--right-wing-second-y': 100,
                            '--right-wing-third-x': 100,
                            '--right-wing-third-y': 100,
                            '--right-body-third-x': 60
                        })
                    }
                }, {
                    '--left-wing-third-x': 20,
                    '--left-wing-third-y': 90,
                    '--left-wing-second-y': 90,
                    '--left-body-third-y': 90,
                    '--right-wing-third-x': 80,
                    '--right-wing-third-y': 90,
                    '--right-body-third-y': 90,
                    '--right-wing-second-y': 90,
                    duration: .2
                }, {
                    '--rotate': 50,
                    '--left-wing-third-y': 95,
                    '--left-wing-third-x': 27,
                    '--right-body-third-x': 45,
                    '--right-wing-second-x': 45,
                    '--right-wing-third-x': 60,
                    '--right-wing-third-y': 83,
                    duration: .25
                }, {
                    '--rotate': 55,
                    '--plane-x': -8,
                    '--plane-y': 24,
                    duration: .2
                }, {
                    '--rotate': 40,
                    '--plane-x': 45,
                    '--plane-y': -180,
                    '--plane-opacity': 0,
                    duration: .3,
                    onComplete() {
                        setTimeout(() => {
                            button.removeAttribute('style');
                            gsap.fromTo(button, {
                                opacity: 0,
                                y: -8
                            }, {
                                opacity: 1,
                                y: 0,
                                clearProps: true,
                                duration: .3,
                                onComplete() {
                                    button.classList.remove('active');
                                }
                            })
                        }, 2000)
                    }
                }]
            })

            gsap.to(button, {
                keyframes: [{
                    '--text-opacity': 0,
                    '--border-radius': 0,
                    '--left-wing-background': getVar('--primary-darkest'),
                    '--right-wing-background': getVar('--primary-darkest'),
                    duration: .1
                }, {
                    '--left-wing-background': getVar('--primary'),
                    '--right-wing-background': getVar('--primary'),
                    duration: .1
                }, {
                    '--left-body-background': getVar('--primary-dark'),
                    '--right-body-background': getVar('--primary-darkest'),
                    duration: .4
                }, {
                    '--success-opacity': 1,
                    '--success-scale': 1,
                    duration: .25,
                    delay: .25
                }]
            })

        }
        
        let tl = gsap.timeline();
		tl.to(contactName, {delay: .5, value: ""})
        tl.to(contactEmail, {value: ""})
        tl.to(contactTextArea, {value: ""})
        tl.fromTo(formThanksText, {opacity: 0, scale: 0}, {delay: 2.3, duration: .5, opacity: 1, scale: 1})
        tl.to(formThanksText, {opacity: 0, scale: 0, delay: 4, duration: .5})

        }
        else {
            openContactWindow();
        }

    })

});


const contactModal = document.querySelector("#contactModal");
const closeContactModalBtn = document.querySelector("#close_modal");
closeContactModalBtn.addEventListener("click", closeContactWindow);

function openContactWindow() {
    contactModal.style.display = "block";
	gsap.fromTo(".contactModalText span", {y: 50, x: -50, opacity: 0}, {delay: .2, duration: .7, stagger: .1, y: 0, x: 0, opacity: 1})
}
function closeContactWindow() {
    contactModal.style.display = "none";
}

window.addEventListener("click", function(event) {
    if(event.target === contactModal) {
        contactModal.style.display = "none";
    }
})
// window.onclick = function(e) {
//     if(e.target == contactModal) {
//         contactModal.style.display = "none";
//     }
// }