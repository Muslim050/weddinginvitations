import { NextResponse } from "next/server";
import { addWish } from "@/lib/store";

export async function POST(req: Request) {
  try {
    const { name, attendance, guests, message } = await req.json();

    if (!name || !attendance || !guests || !message) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    await addWish({
      name: String(name),
      attendance: String(attendance),
      guests: Number(guests),
      message: String(message),
    });

    return NextResponse.json({ message: "RSVP saved" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to submit RSVP", { status: 500 });
  }
}

export async function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
