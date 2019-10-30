// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const infoRequest = axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    Object.keys(response.data.articles).forEach(cv => {
      return new cardEl(response.data.articles[cv]);
    });
  })
  .catch(error => {
    console.log("error", error);
  });

const cardsCont = document.querySelector(".cards-container");

function cardEl(obj) {
  obj.forEach(cv => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardsCont.appendChild(cardDiv);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("headline");
    cardHeader.textContent = cv.headline;
    cardDiv.appendChild(cardHeader);

    const cardAuth = document.createElement("div");
    cardAuth.classList.add("author");
    cardDiv.appendChild(cardAuth);

    const cardImgCont = document.createElement("div");
    cardImgCont.classList.add("img-container");
    cardAuth.appendChild(cardImgCont);

    const cardImg = document.createElement("img");
    cardImg.src = cv.authorPhoto;
    cardImgCont.appendChild(cardImg);

    const cardAuthName = document.createElement("span");
    cardAuthName.textContent = `By: ${cv.authorName}`;
    cardAuth.appendChild(cardAuthName);
  });

