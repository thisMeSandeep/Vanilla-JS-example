document.addEventListener("DOMContentLoaded", () => {
  const parent = document.querySelector(".parent");
  const childrens = document.querySelectorAll(".child");

  //demo of event bubbling
  parent.addEventListener("click", (e) => {
    console.log(e.target.dataset.number);
    // demo event delegation
    const clickedElement=e.target;
    // clickedElement.style.backgroundColor="red";
    clickedElement.textContent="i was clicked";
    clickedElement.classList.toggle("apply");
  });

//   childrens.forEach((item) => {
//     item.addEventListener("click", (event) => {
//       console.log("oh no !i got clicked");
//       //  event.stopPropagation();
//       // console.log(event.target);
//       // console.log(event.type);
//       // console.log(event.clientX ,event.clientY)

//       console.log(event.target.tagName);
//       console.log(event.target.id);
//       console.log(event.target.classList);
//       console.log(event.target.value);
//       console.log(event.target.dataset.number)
//     });
//   });


});
