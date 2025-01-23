import { StaticImageData } from "next/image";
import image1 from "../../../public/images/publication-test.webp"

export type Publication = {
    id: string,
    title: string,
    authors: string[],
    date: string,
    src: StaticImageData,
}

const allPublications : Publication[] = [
    {
        id: "1",
        title: "Relapse to cocaine seeking is regulated by medial habenula NR4A2/NURR1 in mice",
        authors: [
            "Jessica E. Childs",
            "Samuel Morabito",
            "Sudeshna Das",
            "Caterina Santelli",
            "Victoria Pham"
        ],
        date: "Cell Reports, 2024",
        src: image1
    },
    {
        id: "2",
        title: "Relapse to cocaine seeking is regulated by medial habenula NR4A2/NURR1 in mice",
        authors: [
            "Jessica E. Childs",
            "Samuel Morabito",
            "Sudeshna Das",
            "Caterina Santelli",
            "Victoria Pham"
        ],
        date: "Cell Reports, 2024",
        src: image1
    },
    {
        id: "3",
        title: "Relapse to cocaine seeking is regulated by medial habenula NR4A2/NURR1 in mice",
        authors: [
            "Jessica E. Childs",
            "Samuel Morabito",
            "Sudeshna Das",
            "Caterina Santelli",
            "Victoria Pham"
        ],
        date: "Cell Reports, 2024",
        src: image1
    }
]

export default allPublications;