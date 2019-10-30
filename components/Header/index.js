// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headCont = document.querySelector(".header-container");
const Header = () {
const HeaderEl = document.createElement("div");
HeaderEl.classList.add("header");
headCont.appendChild(HeaderEl);

let headerDate = document.createElement("span");
headerDate.classList.add("date");
headerDate.textContent = "SMARCH 28, 2019";
HeaderEl.appendChild(headerDate);

let titleEl = document.createElement("h1");
titleEl.textContent = "Lambda Times";
HeaderEl.appendChild(titleEl);

let tempEl = document.createElement("span");
tempEl.classList.add("temp");
tempEl.textContent = "98°";
HeaderEl.appendChild(tempEl);
}

Header();
