import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
    try {
        const invoiceId = params.id; // Extract invoice ID from the URL

        const response = await fetch(
        `https://staging.fawaterk.com/api/v2/getInvoiceData/${invoiceId}`,
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAWATERAK}`, // Store API key in .env file
            },
        }
        );

        if (!response.ok) {
        return NextResponse.json(
            { error: "Failed to fetch invoice data" },
            { status: response.status }
        );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
        { error: "Something went wrong", details: error },
        { status: 500 }
        );
    }
    }
