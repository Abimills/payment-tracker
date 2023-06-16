import mongoose, { model } from "mongoose";

const SalarySchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Sign in"],
  },
  today: {
    type: String,
  },

  startTime: {
    type: String,
    required: [true, "Please provide the start time."],
  },
  breakTime: {
    type: Number,
    min: [0, "Break Time cannot be negative"],
  },

  endTime: {
    type: String,
    // required: [true, "Please provide the end time"],
  },

  difference: {
    type: Number,
  },

  total: {
    type: Number,
  },

  hourWage: {
    type: Number,
  },
});

export default mongoose.models.Salary || mongoose.model("Salary", SalarySchema);
