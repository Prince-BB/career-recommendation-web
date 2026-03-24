import mongoose from "mongoose";

export const dynamic = "force-dynamic"; // ✅ IMPORTANT

export async function GET() {
  try {
    // ✅ Check env variable
    if (!process.env.MONGO_URI) {
      return Response.json(
        { error: "MONGO_URI not found" },
        { status: 500 }
      );
    }

    // ✅ Prevent multiple connections
    if (mongoose.connections[0].readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    // ✅ Your logic (temporary test)
    return Response.json({ message: "API working" });

  } catch (error) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}