export type EducationPeriod = {
    id: string,
    degree: string,
    date: string,
    institute: string,
}

const educationPeriods : EducationPeriod[] = [
    {
        id: "1",
        degree: "Bachelor’s Degree in Biotechnology",
        date: "September 2017 - June 2021",
        institute: "Ain Shams University, Egypt"
    },
    {
        id: "2",
        degree: "Master’s Degree in Multidisciplinary Research in Experimental Sciences",
        date: "Sep 2023 - Sep 2024",
        institute: "Universitat Pompeu Fabra, Barcelona, Spain"
    },
    {
        id: "3",
        degree: "PhD in Molecular Biosciences",
        date: "September 2024 - Present",
        institute: "Faculty of Medicine, Universidad Autónoma de Madrid (UAM), Spain"
    }
]

export default educationPeriods;