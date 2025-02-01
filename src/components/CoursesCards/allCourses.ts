import { StaticImageData } from "next/image";

import image1 from "../../../public/images/IntroductionToCancerBiology.jpg"
import image2 from "../../../public/images/course.jpg"
import image3 from "../../../public/images/user.webp"

export type Person = {
    id: string,
    name: string,
    title: string,
    src: StaticImageData,
    country: string,
    countryCode: string
}

export type Course = {
    id: string,
    title: string,
    category: string,
    price: string,
    src: StaticImageData,
    innerPage: {
        people: Person[]
    }
}


const allCourses : Course[] = [
    {
        id: "1",
        title: "Cancer Biology",
        category: "Advanced Biology",
        price: "200.00$ USD",
        src: image1,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "2",
        title: "Advanced Cancer Biology",
        category: "Advanced Biology",
        price: "Free",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "3",
        title: "Immune Oncology",
        category: "Advanced Biology",
        price: "Coming Soon",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "4",
        title: "Brain Tumors and Glial Cell Biology",
        category: "Advanced Biology",
        price: "Upon Request",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "5",
        title: "Basics of Colorectal Cancer (CRC)",
        category: "Advanced Biology",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "6",
        title: "Circular RNA (CircRNA) Biology",
        category: "Advanced Biology",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "7",
        title: "RNA Sequencing",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "8",
        title: "Single-Cell RNA Sequencing",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "9",
        title: "Spatial Transcriptomics",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "10",
        title: "R Programming for Bioinformatics",
        category: "Data Analysis and Technologies",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "11",
        title: "DNA Replication",
        category: "Basics",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "12",
        title: "DNA Structure",
        category: "Basics",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "13",
        title: "DNA Transcription",
        category: "Basics",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    },
    {
        id: "14",
        title: "Introduction to Bioinformatics",
        category: "Basics",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            people: [
                {
                    id: "10",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "1",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "2",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "3",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "4",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "5",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "6",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "7",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "8",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
                {
                    id: "9",
                    name: "Jon Doe",
                    title: "Student Title",
                    src: image3,
                    country: "Egypt",
                    countryCode: "eg"
                },
            ] 
        }
    }
]

export default allCourses;