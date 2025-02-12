const swiperWrapper=document.querySelector(".swiper-wrapper");
const slides=document.querySelectorAll(".slide");
const totalSlides=slides.length;
let currentSlide=0

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
        currentSlide++;
        if(currentSlide>=totalSlides){
            currentSlide=0; 
        }
        swiperWrapper.style.transform=`translateX(-${currentSlide*100}%)`
    },2000)
})