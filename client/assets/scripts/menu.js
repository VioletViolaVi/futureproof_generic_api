function displayMenu(data) {
  console.log(data);
}

async function loadMenu() {
  const url = "http://localhost:3000/menu";

  try {
    const res = await fetch(url);
    const data = await res.json();
  } catch (error) {
    alert("There was a problem communicating with the server.");
  }
}
loadMenu();
