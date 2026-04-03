import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    console.log("Incoming body:", body);

    // Normalize fields
    const name = body?.name || body?.fullName || "";
    const email = body?.email || "";
    const company = body?.company || "";
    const message = body?.message || "";

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push("name/fullName");
    if (!email) missingFields.push("email");
    if (!message) missingFields.push("message");
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required field(s): ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    try {
      await resend.emails.send({
        from: 'Project Buddy <onboarding@resend.dev>',
        to: 'info@projectbuddy.co.in',
        subject: 'New Website Lead',
        html: `
          <h2>New Website Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>' )}</p>
        `,
      });
    } catch (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json(
        { error: "Failed to send email via Resend" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error?.message || "Unknown server error" },
      { status: 500 }
    );
  }
}
