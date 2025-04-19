import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, name, phone, courseName } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Abdalfttah Academy <onboarding@resend.dev>", // this should not be (onboarding@resend.dev) if the website is on a real custom doamin
      to: ['mo32000a@gmail.com'],
      subject: `${courseName} Course Paid Successfully!`,
      react: EmailTemplate({ 
        firstName: name,
        userEmail: email,
        phone: phone,
        course: courseName
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" });

  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
