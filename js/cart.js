let cart = document.getElementById("cart");
let cartContainer = document.getElementById("cart-container");
let quantityNumber = document.querySelector(".quantity-number");
let quantityItem = document.querySelector(".item-quantity");
let quantity1 = document.querySelector(".quantity-1");
let addToCartBtn = document.querySelector(".quantity-2");
let item = document.querySelector(".item");
let close1 = document.querySelector(".close-1");
let priceNow = 125 ;
let quantity = 0 ;
let cartDisplay = "none";

cart.onclick = display;
close1.onclick = display;

quantity1.addEventListener("click",function(e){
    if(e.target.classList.contains("minus")){
        if (quantity > 0){
            quantity -= 1
            quantityNumber.innerHTML = quantity  ; 
        }
    }
    if(e.target.classList.contains("plus")){
        quantity += 1
        quantityNumber.innerHTML = quantity ;
        
    }
});

addToCartBtn.addEventListener("click",function(){
    if(quantity > 0){
        item.innerHTML= "";

        quantityItem.innerHTML = quantity ;
        quantityItem.style.display = "block"

        let itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");
        item.appendChild(itemContainer);

        let img1 = document.createElement("img");
        img1.src = "./images/image-product-1-thumbnail.jpg";
        itemContainer.appendChild(img1);

        let para = document.createElement("p");
        para.innerHTML = `<p>Fall Limited Edition Sneakers $125.00 x ${quantity} <span class="total-price">$${quantity*priceNow}</span></p>`;
        itemContainer.appendChild(para);

        let img2 = document.createElement("img");
        img2.src = "./images/icon-delete.svg";
        img2.classList.add("delete");
        itemContainer.appendChild(img2);

        img2.addEventListener("click",function(e){
            item.innerHTML = "Your cart is empty";
            quantity = 0 ;
            quantityItem.innerHTML = quantity
            quantityNumber.innerHTML = quantity
        })

        let checkOutBtn = document.createElement("button");
        checkOutBtn.innerHTML = "checkout";
        item.appendChild(checkOutBtn);
    }
})



function display(){
    if (cartDisplay == "none"){
        cartContainer.style.display = "block";
        cartDisplay = "block";
    }else {
        cartContainer.style.display = "none";
        cartDisplay = "none"
    }
}