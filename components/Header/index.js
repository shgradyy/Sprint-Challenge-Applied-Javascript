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

function Header() {
    const headerEl = document.createElement('div');
    const dateEl = document.createElement('span');
    const titleEl = document.createElement('h1');
    const temperatureEl = document.createElement('span');
    headerEl.classList.add('header');
    dateEl.classList.add('date');
    temperatureEl.classList.add('temp');
    headerEl.appendChild(dateEl);
    headerEl.appendChild(titleEl);
    headerEl.appendChild(temperatureEl);
    return headerEl;
};

const headCont = document.querySelector('.header-container');
headCont.appendChild(Header(headCont));