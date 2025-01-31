import { StaticImageData } from "next/image";

import image1 from "../../../public/images/course.jpg"

export type BlogPost = {
    id: string,
    title: string,
    category: string,
    brief: string,
    body: string,
    src: StaticImageData,
}


const allBlogPosts : BlogPost[] = [
    {
        id: "1",
        title: "Blog Post Title",
        category: "Advanced Biology",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.",
        body: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            
        `,
        src: image1
    },
    {
        id: "2",
        title: "Blog Post Title",
        category: "Advanced Biology",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.",
        body: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            
        `,
        src: image1
    },
    {
        id: "3",
        title: "Blog Post Title",
        category: "Advanced Biology",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.",
        body: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            
        `,
        src: image1
    },
    {
        id: "4",
        title: "Blog Post Title",
        category: "Advanced Biology",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.",
        body: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime quaerat quo exercitationem est saepe blanditiis quas, placeat aspernatur unde dolorum possimus accusantium quam enim molestiae quasi nesciunt tempore atque.
            
        `,
        src: image1
    }
]

export default allBlogPosts;