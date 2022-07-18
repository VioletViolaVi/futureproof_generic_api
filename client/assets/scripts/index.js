function loadRestaurantDetails() {
  const url = "http://localhost:3000";

  fetch(url)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

loadRestaurantDetails();
