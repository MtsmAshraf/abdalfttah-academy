import { StaticImageData } from "next/image";

import image1 from "../../../public/images/IntroductionToCancerBiology.jpg"
import image2 from "../../../public/images/course.jpg"

export type Course = {
    id: string,
    title: string,
    category: string,
    price: string,
    src: StaticImageData,
}


const allCourses : Course[] = [
    {
        id: "1",
        title: "Cancer Biology",
        category: "Advanced Biology",
        price: "200.00$ USD",
        src: image1
    },
    {
        id: "2",
        title: "Advanced Cancer Biology",
        category: "Advanced Biology",
        price: "Free",
        src: image2
    },
    {
        id: "3",
        title: "Immune Oncology",
        category: "Advanced Biology",
        price: "Coming Soon",
        src: image2
    },
    {
        id: "4",
        title: "Brain Tumors and Glial Cell Biology",
        category: "Advanced Biology",
        price: "Upon Request",
        src: image2
    },
    {
        id: "5",
        title: "Basics of Colorectal Cancer (CRC)",
        category: "Advanced Biology",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "6",
        title: "Circular RNA (CircRNA) Biology",
        category: "Advanced Biology",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "7",
        title: "RNA Sequencing",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "8",
        title: "Single-Cell RNA Sequencing",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "9",
        title: "Spatial Transcriptomics",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "10",
        title: "R Programming for Bioinformatics",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "11",
        title: "DNA Replication",
        category: "Basics",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "12",
        title: "DNA Structure",
        category: "Basics",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "13",
        title: "DNA Transcription",
        category: "Basics",
        price: "200.00$ USD",
        src: image2
    },
    {
        id: "14",
        title: "Introduction to Bioinformatics",
        category: "Basics",
        price: "200.00$ USD",
        src: image2
    }
]

export default allCourses;