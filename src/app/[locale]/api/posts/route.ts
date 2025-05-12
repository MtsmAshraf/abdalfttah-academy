import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { cookies } from "next/headers";

export async function GET(req: Request) {
    const accessToken = req.headers.get("Authorization");
    if (!accessToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.log("Access Token:", accessToken); // Debugging line

    const notion = new Client({ auth: accessToken });

    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID!,
        });

        const posts = response.results.map((page: any) => ({
            id: page.id,
            title: page.properties.Title.title[0]?.text.content,
            slug: page.properties.Slug.rich_text[0]?.text.content,
            content: page.properties.Content.rich_text[0]?.text.content,
        }));

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}
