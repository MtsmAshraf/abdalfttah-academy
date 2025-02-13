import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getBlogPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
  });

  console.log(response)

  return response.results.map((page) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.text.content || "Untitled",
    slug: page.properties.Slug.rich_text[0]?.text.content || "",
    content: page.properties.Content.rich_text[0]?.text.content || "",
    created: page.properties.Created.date.start,
  }));
}
