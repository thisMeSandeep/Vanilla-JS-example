const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let num = 1;
  if(num){
    btn.textContent = "Unfollow";
    num=0;
  }
  else{
    btn.textContent = "Follow";
    num=1;
  }
});
