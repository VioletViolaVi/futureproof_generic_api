function displayRestaurantDetails(data) { // data needs to be passed through so add the param to make that happen
  const heading = document.getElementById("restaurantName");
  heading.textContent = data["name"];

  const year = document.getElementById("establishedYear");
  year.textContent = data["name"];

  const status = document.getElementById("restaurantStatus");
  status.textContent = data["name"];
}

function loadRestaurantDetails() {
  const url = "http://localhost:3000";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayRestaurantDetails(data)) // need this 2nd .then() as the 1st one is returning a promise
    .catch((err) => {
      console.log(err);
    });
}

loadRestaurantDetails();
