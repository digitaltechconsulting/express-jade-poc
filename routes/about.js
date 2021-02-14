const { names } = require("debug");
let express = require("express");

let router = express.Router();

router.get("/", (req, res, next) => {
  let names = ['Hemant', 'Arushi', 'Aaroh'];
  let cities = ['Sydney','Melbourne','Brisbane']
  res.render("about", {
    name: "Hemant",
    mobile: "0478415726",
    test: names,
    cities: cities,
    isRaining: true
  });
});

module.exports = router;
