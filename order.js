const orderPrice = document.querySelector(".sushiItemPrice");
const orderName = document.querySelector(".sushiItemName");
const salesTax = document.querySelector(".salesTax").textContent;
const showTotalPrice = document.querySelector(".totalPrice");
const sushiNameText = document.querySelector(".sushiNameText");
const orderImage = document.querySelector("#orderImage");
window.addEventListener('load', (event) => {

    let tl = gsap.timeline();
    tl.fromTo(".navbar", {opacity: 0, y: -30}, {delay: .2, duration: .5, opacity: 1, y: 0})
    tl.fromTo("#chooseMenuBtn", {y: 30, opacity: 0,}, {duration: .3, y: 0, opacity: 1})
    tl.fromTo("#orderTitle", {opacity: 0, x: -500}, {duration: .5, opacity: 1, x: 0})
    tl.fromTo(".list li", {opacity: 0, x: -500}, {duration: .5, opacity: 1, x: 0, stagger: .1})
    tl.fromTo("#promoForm", {opacity: 0, x: 500}, {duration: .5, opacity: 1, x: 0})
    tl.fromTo("#promoField", {opacity: 0, x: -500}, {duration: .3, opacity: 1, x: 0})
    tl.fromTo(".promoText", {opacity: 0}, {duration: .5, opacity: 1})
    tl.fromTo(".itemImageBox", {scale: 0}, {duration: .5, scale: 1})
    tl.fromTo(".socLinkBox", {opacity: 0, y: 50}, {duration: .3, opacity: 1, y: 0})
    
    const sushiNameString2 = localStorage.getItem('sushiItemName');
    const finalSushiName = JSON.parse(sushiNameString2);
    if(finalSushiName === null) {
        return orderName.innerHTML = "Some sushi?", orderPrice.innerHTML = "&#36; " + "0", showTotalPrice.innerHTML = "&#36; " + "0", orderImage.setAttribute("src", "images/sushi-icon2.1.1.png", orderImage.style.border = "none", orderImage.style.width = "80%", orderImage.style.boxShadow = "none");
    }
    if(finalSushiName.includes("Nigiri")) {
        orderImage.setAttribute("src", "images/sushi1.jpg");
        sushiNameText.innerHTML = "Nigiri";
    }
    if(finalSushiName.includes("Uramaki")) {
        orderImage.setAttribute("src", "images/sushi2.jpg");
        sushiNameText.innerHTML = "Uramaki";
    }
    if(finalSushiName.includes("Sashimi")) {
        orderImage.setAttribute("src", "images/sushi3.jpg");
        sushiNameText.innerHTML = "Sashimi";
    }
    if(finalSushiName.includes("Temaki")) {
        orderImage.setAttribute("src", "images/sushi4.jpg");
        sushiNameText.innerHTML = "Temaki";
    }
    const userItemString2 = localStorage.getItem('objectPricing');
    const userItemPrice2 = JSON.parse(userItemString2);

    const isNumberPrice = Number(userItemPrice2)
    
    const isNumberTax = Number(salesTax);
    const tax = isNumberPrice * isNumberTax / 100;
    const totalPrice = isNumberPrice + tax;
    
    orderName.innerHTML = " &#171;" + finalSushiName + "&#187;";
    orderPrice.innerHTML = "&#36; " + isNumberPrice.toFixed(2);
    showTotalPrice.innerHTML = "&#36; " + totalPrice.toFixed(2);

    localStorage.removeItem('objectPricing');
    localStorage.removeItem('sushiItemName');

    // if(orderPrice.innerHTML === null || orderName.innerHTML === null) {
    //     orderPrice.innerHTML = "Price: " + "&#36; " + "0";
    //     orderName.innerHTML ="Product &#58;" + " &#171;" + "Item" + "&#187;";
    // }
    const promoBtn = document.querySelector("#button-addon2");
    const modalContent = document.querySelector(".modalContent");
    promoBtn.addEventListener("click", calculateDiscount);
    let promo = [""];
    let i = 0;
    function calculateDiscount(event) {
        
        if(promo.includes("5%off")) {
            openWindow();
            modalContent.textContent = "Sorry. you've already used your coupon!";
            modalContent.style.color = 'red';
        }

        event.preventDefault();
        i++;
        const promoInputValue = document.querySelector("#promoInput").value;
        const checkPromo = !promo.includes("5%off");
        if(promoInputValue ==="5%off" && i >= promo.length || checkPromo) {
            i=-100;
            
            let amountPromo = 5 * isNumberPrice / 100;
            let discountPrice = isNumberPrice - amountPromo;
            let discountTax = discountPrice * 7.25 / 100;
            let totalDiscountPrice = (discountPrice + discountTax);
            orderPrice.innerHTML = "&#36; " + discountPrice.toFixed(2);
            showTotalPrice.innerHTML = "&#36; " + totalDiscountPrice.toFixed(2);
            openWindow();
            modalContent.textContent = "Congratulations! You've god a 5% discount!";
            
            promo.unshift(promoInputValue);
            
        }
        
        if(promoInputValue !="5%off" || i > promo.length) {
            i=-100;
            openWindow();
            modalContent.textContent = "Sorry, invalid coupon code!";
            modalContent.style.color = '#D2001A';
            showTotalPrice.innerHTML = "&#36; " + totalPrice.toFixed(2);
        }

    }

    // ENTER-KEY-ENABLE
        const inputOne = document.querySelectorAll("input");
        inputOne.forEach(function(input) {
            input.addEventListener("keypress", enterKey);
        });
        function enterKey(e) {
            if(e.keyCode === 13) {
                calculateDiscount(e);
            }
        };

});




const modal = document.querySelector("#myModal");
const span = document.querySelector("#close");
span.addEventListener("click", closeWindow);

function openWindow() {
    modal.style.display = "block";
}
function closeWindow() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

// ==========Scale-Order-Image=============>
orderImage.addEventListener("mouseover", () => {
    orderImage.style.scale = "1.35";
    orderImage.style.transform = "translateY(-50px)";
    orderImage.style.boxShadow = "rgba(0, 0, 0, 0.75) 0px 22px 70px 4px";
    sushiNameText.classList.add("sushiNameTextTransform");
});
orderImage.addEventListener("mouseout", () => {
    orderImage.style.scale = "1";
    orderImage.style.transform = "translateY(0px)";
    orderImage.style.boxShadow = "rgba(0, 0, 0, 0.7) 0px 2px 4px, rgba(0, 0, 0, 0.6) 0px 7px 13px -3px, rgba(0, 0, 0, 0.5) 0px -4px 0px inset";
    sushiNameText.classList.remove("sushiNameTextTransform");
})