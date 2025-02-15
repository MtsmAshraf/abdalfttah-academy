import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.json({ error: "Authorization code not found" }, { status: 400 });
    }

    const response = await fetch("https://api.notion.com/v1/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(
                `${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`
            ).toString("base64")}`,
            },
            body: JSON.stringify({
            grant_type: "authorization_code",
            code,
            redirect_uri: process.env.NOTION_REDIRECT_URI,
        }),
    });

    const data = await response.json();

    async function saveAccessToken(token: string) {
        (await cookies()).set("notion_token", token, { httpOnly: true, secure: true });
    }
    saveAccessToken(data.access_token)
    if (!response.ok) {
        return NextResponse.json({ error: "Failed to get access token" }, { status: 400 });
    }

    return NextResponse.json({ access_token: data.access_token });
}
