// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const objRequest = axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(currentValue => {
      return new TabEl(currentValue);
    });
  })
  .catch(error => {
    console.log("error", error);
  });

const topics = document.querySelector(".topics");

const TabEl = (obj) => {
  const div = document.createElement("div");
  div.classList.add("tab");
  div.textContent = obj;
  topics.appendChild(div);
}
window.setTimeout(() => {
    const tabsList = document.querySelectorAll(".tab");
    tabsList.forEach(currentValue => {
      currentValue.dataset.tab = currentValue.textContent;
      currentValue.addEventListener("click", () => {
        tabsList.forEach(currentValue => {
          currentValue.classList.remove("active-tab");
        });
        currentValue.classList.add("active-tab");
        const cardsList = document.querySelectorAll(".card");
        cardsList.forEach(av => {
          av.style.display = "inline-block";
          if (av.dataset.tab != currentValue.dataset.tab) {
            av.style.display = "none";
          }
        });
      });
    });
  }, 3000);