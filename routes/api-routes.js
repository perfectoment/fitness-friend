const router =require("express").Router();
const Workout = require("../models/Workout")




router.get("/api/workouts", (req, res) =>{
Workout.find()  
    .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post("/api/workouts", ({body}, res) =>{
Workout.create(body)
.then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });

});

router.put("api/workouts/:id", ({ params, body }, res)=>{
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators:true })
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });    
    
});

router.get("api/workout/range", (req, res) => {
  Workout.find().limit(10)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });    
});

router.delete("api/workout", ({body}, res) =>{
  Workout.findByIdAndDelete(body.id)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  }); 
})




module.exports = router

