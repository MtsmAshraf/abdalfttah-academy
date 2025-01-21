import { StaticImageData } from "next/image";

import image1 from "../../../public/images/user.webp"
import image2 from "../../../public/images/egypt-flag.jpg"

export type Testimonial = {
    id: string,
    name: string,
    title: string,
    text: string,
    src: StaticImageData,
    flagSrc: StaticImageData
}


const allTestimonials : Testimonial[] = [
    {
        id: "1",
        name: "John Doe",
        title: "Job Title",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
        src: image1,
        flagSrc: image2
    },
    {
        id: "2",
        name: "John Doe",
        title: "Job Title",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
        src: image1,
        flagSrc: image2
    },
    {
        id: "3",
        name: "John Doe",
        title: "Job Title",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
        src: image1,
        flagSrc: image2
    },
    {
        id: "4",
        name: "John Doe",
        title: "Job Title",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
        src: image1,
        flagSrc: image2
    },
    {
        id: "5",
        name: "John Doe",
        title: "Job Title",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?",
        src: image1,
        flagSrc: image2
    },
    {
        id: "6",
        name: "John Doe",
        title: "Job Title",
        text: "explicabo officia quod est voluptatum adipisci?",
        src: image1,
        flagSrc: image2
    }
]

export default allTestimonials;