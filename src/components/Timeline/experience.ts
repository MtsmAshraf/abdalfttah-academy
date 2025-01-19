export type ExperiencePeriod = {
    id: string,
    position: string,
    focus: string,
    date: string,
    institute: string
}

const experiencePeriods : ExperiencePeriod[] = [
    {
        id: "1",
        position: "Intern",
        focus: "Development of a cell communication algorithm.",
        date: "September 2021 - March 2022",
        institute: "Helmholtz Munich, Germany"
    },
    {
        id: "2",
        position: "Computational Biologist",
        focus: "Studied the impact of PARP inhibitors on breast cancer responders and non-responders.",
        date: "June 2022 - June 2024",
        institute: "Center for Genomic Regulation (CRG), Barcelona, Spain"
    },
    {
        id: "3",
        position: "Master Thesis Researcher",
        focus: "Studied Colorectal cancer (CRC) cell heterogeneity.",
        date: "October 2023 - July 2024",
        institute: "Institute for Research in Biomedicine (IRB), Barcelona, Spain"
    },
    {
        id: "4",
        position: "PhD Researcher",
        focus: "Studying molecular and cellular mechanisms of brain metastasis.",
        date: "September 2024 - Present",
        institute: "National Cancer Research Center (CNIO), Madrid, Spain"
    }
]

export default experiencePeriods;