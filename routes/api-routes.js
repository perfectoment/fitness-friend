
const db = require("../models")



module.exports = function(app) {
app.get("/api/workouts", (req, res) =>{
db.Workout.find({})  
    .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

app.post("/api/workouts", (req, res) =>{
db.Workout.create({})
.then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });

});

// app.put("api/workouts:workout", ({ params, body }, res)=>{
//     db.Workout.findByIdAndUpdate(
//         {_id: params.id})
//     .
// });
}



