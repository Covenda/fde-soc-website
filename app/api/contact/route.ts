import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // TODO: Implement actual email sending or CRM integration
    // Options:
    // - Send email via SendGrid, Postmark, or AWS SES
    // - Create contact in HubSpot, Salesforce, or similar CRM
    // - Store in database for follow-up

    // For now, just log the contact form submission
    console.log("Contact form submission received:", {
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // await sendEmail({
    //   to: "sales@covenda.ai",
    //   subject: `New contact form submission from ${data.company}`,
    //   body: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}`,
    // });

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
