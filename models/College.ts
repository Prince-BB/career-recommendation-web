import mongoose from "mongoose"

const CollegeSchema = new mongoose.Schema({
  stream: String,
  course: String,
  collegeName: String,
  location: String,
  minScore: Number,
  scale: String,
  entrance: String,
  approxAnnualFeeINR: String,
  highlights: [String],
  website: String
})

export default mongoose.models.College ||
mongoose.model("College", CollegeSchema)