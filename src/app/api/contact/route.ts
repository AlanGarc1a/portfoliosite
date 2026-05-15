import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request body:", body); // ← add this temporarily

    const { name, email, message } = body;

    console.log("Fields:", { name, email, message }); // ← and this

    if (!name || !email || !message) {
      console.log("Missing fields — returning 400"); // ← and this
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "contact@alanxgarcia.dev",
      to: "alangarcia2096@gmail.com",
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    console.log("Email sent successfully"); // ← and this
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Request Error", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
