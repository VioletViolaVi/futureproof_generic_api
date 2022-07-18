const express = require("express");
const cors = require("cors");
const menu = {
  starters: ["garlic bread", "chicken soup", "salad"],
  mains: ["burger & chips", "steak", "roast beef"],
  desserts: ["cake", "ice cream", "jelly"],
  specials: {
    monday: "coconut shrimp with mango dipping sauce",
    tuesday: "filet mignon",
  },
};
const app = express();

// tell app to allow cross-origin request
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: "Chez Norbert ",
    established: 2019,
    status: "open",
    hygieneRating: 10,
  });
});

app.get("/menu", (req, res) => {
  // instead of res.send() as it needs to be json code, but still works so... :P
  res.json(menu);
});

// works for /specials/monday, /specials/tuesday, etc...
app.get("/specials/:day", (req, res) => {
  // the "":day" is a param
  const day = req.params.day;

  const special = menu["specials"][day];

  if (special) {
    res.json({
      special: special,
      success: true,
    });
  } else {
    res.status(404).json({
      special: null,
      success: false,
    });
  }
});

module.exports = app;
