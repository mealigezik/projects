const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    localStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
    if(event.target.className == "fa-solid fa-minus"){
        if(event.target.parentElement.querySelector(".quantity").innerText > 1){
           event.target.parentElement.querySelector(".quantity").innerText--;
        }else{
            if(confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will remove from your cart!`)){
                event.target.closest(".product").remove()
            }
        }
    }else if(event.target.className == "fa-solid fa-plus"){
        event.target.parentElement.querySelector(".quantity").innerText++;
    }else if(event.target.className == "remove-product"){
        event.target.closest(".product").remove()
    }
    calculateProductPrice(event.target);
    calculateCartPrice();
});

const calculateProductPrice = (btn) => {
    const productInfoDiv = btn.parentElement.parentElement;
    const price = Number(productInfoDiv.querySelector(".product-price strong").innerText); 
    const quantity = Number(productInfoDiv.querySelector(".quantity").innerText);
    const productTotalDiv = productInfoDiv.querySelector(".price")

    productTotalDiv.innerText = (price * quantity).toFixed(2);
}
const calculateCartPrice = () => {
    const productsTotalPriceDivs = document.querySelectorAll(".price");
    const subtotal = [...productsTotalPriceDivs].reduce((acc, price) => acc + Number(price.innerText), 0)
    const taxtPrice = subtotal * localStorage.getItem("taxRate");
    const shippingPrice = subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
    ? localStorage.getItem("shippingPrice")
    : 0;
}

document.querySelector(".note p")