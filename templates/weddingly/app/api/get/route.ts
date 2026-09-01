import { NextResponse } from "next/server";
import { listWishes } from "@/lib/store";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);

  try {
    return NextResponse.json(await listWishes(page, limit));
  } catch (error) {
    console.error("Error fetching wishes:", error);
    return NextResponse.json(
      { message: "Error fetching wishes", error },
      { status: 500 }
    );
  }
}
