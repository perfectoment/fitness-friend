const router = require("express").Router();



router.get("/api/workouts", (req, res) =>{
console.log(req.body)
});

module.exports = router