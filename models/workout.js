const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()

  },
  exercises: [{
    type:{ 
      type: String,
      trim:true,
      required: "enter a exercise type"
    },
    name:{
      type:String,
      trim:true,
      required:"Please enter a name"
    },
    duration:{
      type:Number,
      required:"Please enter a duration"

    },
      distance:{
        type:Number
      },
      weight:{
        type:Number
      },
      reps:{
        type:Number
      },
      sets:{
        type:Number
      },
  }]
    

},
{
  toJSON:{
    virtuals: true
  }
}
);

workoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
});

const Exercise = mongoose.model("Exercise", workoutSchema);

module.exports = Exercise;