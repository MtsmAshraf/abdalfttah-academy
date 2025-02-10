import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, name, courseName } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Abdalfttah Academy <onboarding@resend.dev>',
      to: ['mo32000a@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: name }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" });

  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
