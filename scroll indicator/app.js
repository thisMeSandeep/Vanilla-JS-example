const content=document.querySelector(".content");
const bar=document.querySelector(".scroll-bar");
content.addEventListener("scroll",()=>{
  let scrollTop=content.scrollTop;
  console.log(scrollTop);
  let scrolligContent=content.scrollHeight-content.clientHeight;
  let percentScrolled=(scrollTop/scrolligContent)*100;
  bar.style.width=percentScrolled + "%"
})