// fetching photos
const photo = document.querySelector(".photo");

  const url = "https://jsonplaceholder.typicode.com/photos";

  const photoData = fetch(url);

  photoData
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      for (let i = 0; i < 50; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", data[i].url);
        img.setAttribute("alt", data[i].title);
        photo.append(img);
      }
    })
    .catch((error) => {
      console.log("there is a error in fetching data:" + error);
    });


