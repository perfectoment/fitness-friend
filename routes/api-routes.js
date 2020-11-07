const router = require("express").Router();
const db = require("./models");



router.get("/api/workouts", (req, res) =>{
console.log(req.body)
});

module.exports = router