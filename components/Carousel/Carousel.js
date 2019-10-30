/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const caroCont = document.querySelector(".carousel-container");

function CarouselEl() {
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");
  caroCont.appendChild(carouselDiv);

  const leftButton = document.createElement("div");
  leftButton.textContent = "<-";
  leftButton.classList.add("left-button");
  carouselDiv.appendChild(leftButton);

  const carouselPic = document.createElement("img");
  carouselPic.src = "./assets/carousel/mountains.jpeg";
  carouselDiv.appendChild(carouselPic);

  const carouselPic2 = document.createElement("img");
  carouselPic2.src = "./assets/carousel/computer.jpeg";
  carouselDiv.appendChild(carouselPic2);

  const caurouselPic3 = document.createElement("img");
  caurouselPic3.src = "./assets/carousel/trees.jpeg";
  carouselDiv.appendChild(caurouselPic3);

  const caurouselPic4 = document.createElement("img");
  caurouselPic4.src = "./assets/carousel/turntable.jpeg";
  carouselDiv.appendChild(caurouselPic4);

  const rightButton = document.createElement("div");
  rightButton.textContent = "->";
  rightButton.classList.add("right-button");
  carouselDiv.appendChild(rightButton);
}
CarouselEl();

const next = document.querySelector(".right-button");
const prev = document.querySelector(".left-button");
const items = document.querySelectorAll(".carousel img");
const counter = 0;
const amount = items.length;
const current = items[0];
function navigate(direction) {
  current.style.display = "none";
  counter = counter + direction;
  if (direction === -1 && counter < 0) {
    counter = amount - 1;
  }
  if (direction === 1 && !items[counter]) {
    counter = 0;
  }
  current = items[counter];
  current.style.display = "block";
}
next.addEventListener("click", function(ev) {
  navigate(1);
});
prev.addEventListener("click", function(ev) {
  navigate(-1);
});
navigate(0);