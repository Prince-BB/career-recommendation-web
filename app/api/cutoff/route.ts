import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import College from "../../../models/College"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)

  const stream = searchParams.get("stream")
  const score = Number(searchParams.get("score"))
  const limit = Number(searchParams.get("limit") || 6)

  await connectDB()

  const colleges = await College.find({ stream }).limit(limit)

  const recommendations = colleges.map((c: any) => {

    let fit = "reach"

    if (score >= c.minScore + 10) fit = "safe"
    else if (score >= c.minScore) fit = "match"

    return {
      id: c._id,
      stream: c.stream,
      course: c.course,
      collegeName: c.collegeName,
      location: c.location,
      minScore: c.minScore,
      scale: c.scale,
      entrance: c.entrance,
      approxAnnualFeeINR: c.approxAnnualFeeINR,
      highlights: c.highlights,
      website: c.website,
      fit,
      gap: score - c.minScore
    }

  })

  return NextResponse.json({
    stream,
    scale: "engineering200",
    score,
    suggestedCourses: [],
    recommendations
  })

}