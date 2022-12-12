

window.addEventListener('load', (event) => {
    let tl = gsap.timeline();
    tl.fromTo(".sushiLogo", {opacity: 0, scale: 0}, {delay: .1, duration: .8, opacity: 1, scale: 1})
    tl.fromTo(".menuTitle span", {opacity: 0, y: -50, x: -50}, {delay: .2, duration: .5, stagger: .1, opacity: 1, y: 0, x: 0})
    tl.fromTo(".card", {opacity: 0, y: 50}, {duration: .5, opacity: 1, y: 0})
    tl.fromTo(".homePageBox", {opacity: 0, x: 300}, {duration: .9, opacity: 1, x: 0, ease: "back.inOut"})
    
});



const { createApp } = Vue;

createApp({
    data() {
        return {
        cards: [
            {
            id: 1,
            title: "Nigiri",
            desc:
                "In different heights and shapes, the four versions of Floema low tables offer a variety of surfaces to satisfy different needs and uses in a contract environment, from work to moments of relaxation.",
            photo:
                "images/nigiri.jpg"
            },
            {
            id: 2,
            title: "Uramaki",
            desc:
                "In different heights and shapes, the four versions of Floema low tables offer a variety of surfaces to satisfy different needs and uses in a contract environment, from work to moments of relaxation.",
            photo:
                "images/uramaki.jpg"
            },
            {
            id: 3,
            title: "Sashimi",
            desc:
                "In different heights and shapes, the four versions of Floema low tables offer a variety of surfaces to satisfy different needs and uses in a contract environment, from work to moments of relaxation.",
            photo:
                "images/sashimi.jpg"
            },
            {
            id: 4,
            title: "Temaki",
            desc:
                "In different heights and shapes, the four versions of Floema low tables offer a variety of surfaces to satisfy different needs and uses in a contract environment, from work to moments of relaxation.",
            photo:
                "images/temaki.jpg"
            }
        ],
        currentNum: 0
        };
    },
    computed: {
        currentCard() {
        return this.cards[this.currentNum];
        }
    },
    methods: {
        playFoward() {
        let tl = gsap.timeline({
            defaults: {
            duration: 0.7,
            ease: "sine.out"
            },
            onComplete: () => {
            this.playReverse();
            if (this.currentNum >= 3) {
                this.currentNum = 0;
            } else {
                this.currentNum++;
            }
            }
        });
        tl.to("#mask-1", {
            yPercent: 100,
            scaleY: 1.4
        })
            .to(
            "#mask-2",
            {
                yPercent: -100,
                scaleY: 1.4
            },
            "<"
            )
            .to(
            "#card-info-title",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
            },
            "<0.4"
            )
            .to(
            "#card-info-desc",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
            },
            "<0.3"
            );
        },
        playReverse() {
        let tl = gsap.timeline({
            defaults: {
            duration: 0.7,
            ease: "sine.in"
            }
        });
        tl.to("#mask-1", {
            yPercent: -100,
            scaleY: 1.4
        })
            .to(
            "#mask-2",
            {
                yPercent: 100,
                scaleY: 1.4
            },
            "<"
            )
            .to(
            "#card-info-title",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
            },
            "<0.2"
            )
            .to(
            "#card-info-desc",
            {
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
            },
            "<0.3"
        );
    },
    nextCard() {
        this.playFoward();
    }
    }
}).mount("#app");

// =============Calculating-Price================>
const showPriceBefore = document.querySelector(".price del");
const showPriceAfter = document.querySelector(".price ins");
const nextBtn = document.querySelector("#nextBtn");

const pricesBefore = [48, 37, 52, 39];
const pricesAfter = [37, 32, 45, 34];
const sushiName = ["Nigiri", "Uramaki", "Sashimi", "Temaki"];
let i = 0;

nextBtn.addEventListener("click", () => {
    
    i++;
    if(i > pricesBefore.length -1) {
        i = 0;
    }
    else if(i > pricesAfter.length -1 || i > sushiName.length -1) {
        i = 0;
    }
    
    // else if(i > sushiName.length -1) {
    //     i = 0;
    // }
    // console.log(sushiNameString)

    showPriceBefore.innerHTML = "&#36; " + pricesBefore[i];
    showPriceAfter.innerHTML = "&#36; " + pricesAfter[i];

    let tl = gsap.timeline();
    tl.fromTo(showPriceBefore, {opacity: 0, scale: 0}, {delay: 2, duration: .5, opacity: 1, scale: 1})
    tl.fromTo(showPriceAfter, {opacity: 0, scale: 0}, {duration: .5, opacity: 1, scale: 1})

});

// ====Saving-Data-of-Item-to-Local-Storage-in-order-to-display-in-"Your-order-Page"=======>

const orderNowBtn = document.querySelector("#orderNowBtn");



orderNowBtn.addEventListener("click", saveData);
function saveData() {
    const sushiNameString = JSON.stringify(sushiName[i]);
    localStorage.setItem('sushiItemName', sushiNameString);


    const userItemString = JSON.stringify(pricesAfter[i]);
    localStorage.setItem('objectPricing', userItemString);
}

const homePageBox = document.querySelector(".homePageBox");
homePageBox.addEventListener("click", () => {

    localStorage.removeItem('objectPricing');
    localStorage.removeItem('sushiItemName');
})
