import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { ownerEmail, propertyName, buyerAddress } = await req.json();

    const emailResponse = await resend.sendEmail({
      from: "property@laprimaltd.com",
      to: ownerEmail,
      subject: `Offer on Your Property: ${propertyName}`,
      text: `An offer has been made on your property: ${propertyName}. Buyer Address: ${buyerAddress}`,
    });

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}
