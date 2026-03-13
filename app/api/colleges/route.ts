import connectDB from "@/lib/mongodb"
import College from "@/models/College"
import { NextResponse } from "next/server"

export async function GET() {
  await connectDB()

  const colleges = await College.find()

  return NextResponse.json(colleges)
}