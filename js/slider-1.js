let sliderImg = Array.from(document.querySelectorAll(".img-slider img"));
let sliderImg1 = Array.from(document.querySelectorAll(".img-slider-1 img"));
let sliderThumb = Array.from(document.querySelectorAll(".contorl img"));
let sliderThumb1 = Array.from(document.querySelectorAll(".contorl-1 img"));
currentSlide = 1;
let sliderSection = document.querySelector(".slider-section");
let closeBtn = document.getElementById("close");
let img = document.querySelector(".img-slider");
let close2 = document.querySelector(".close-2");
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
let pr =document.querySelector(".control-2-pr");
let nx =document.querySelector(".control-2-nx");


pr.addEventListener("click",function(){
    if (currentSlide > 1 ){
        currentSlide -= 1 ;
        theChecker();
        
    }
    
})

nx.addEventListener("click",function(){
    if(currentSlide >= 1 && currentSlide < 4){
        currentSlide += 1 ;
        theChecker()
        
    }
})


img.addEventListener("click",function(){
    sliderSection.style.display = "block";
})



closeBtn.addEventListener("click",function(){
    sliderSection.style.display = "none";
})


for (let i = 0; i < sliderThumb.length; i++){
    sliderThumb[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}
for (let i = 0; i < sliderThumb1.length; i++){
    sliderThumb1[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}


function theChecker(){
    removeAllActive();
    sliderImg[currentSlide - 1].classList.add("active");
    sliderImg1[currentSlide - 1].classList.add("active");
    sliderThumb[currentSlide - 1].classList.add("active-1");
    sliderThumb1[currentSlide - 1].classList.add("active-1");
}


function removeAllActive(){
    sliderImg.forEach(function(img){
        img.classList.remove("active");
    })
    sliderImg1.forEach(function(img){
        img.classList.remove("active");
    })
    sliderThumb.forEach(function (bullte){
        bullte.classList.remove("active-1");
    })
    sliderThumb1.forEach(function (bullte){
        bullte.classList.remove("active-1");
    })
}

menu.addEventListener("click",function(){
    nav.style.display = "block";
})
close2.addEventListener("click",function(){
    nav.style.display = "none";
})