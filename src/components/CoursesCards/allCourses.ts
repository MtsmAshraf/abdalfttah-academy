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

export type ContentList = {
    heading: string,
    list: string[]
}
export type Content = {
    button: string,
    subList?: (string | ContentList)[]
}

export type GeneralContent = {
    heading: string,
    vids:string,
    duration: string,
    partLink:string,
    contentPieces: Content[]
}
export type WhoNote = {
    note: string
}
export type OptionalDiv = {
    h2: string,
    className?: string,
    content: (OptionalDivContent | string)[]
}
export type OptionalDivContent = {
    heading: string,
    paragraphs: string[]
}
export type Course = {
    id: string,
    enrollType: string,
    title: string,
    category: string,
    price?: string,
    src: StaticImageData,
    innerPage: {
        details: {
            noOfVideos?: string,
            parts?: string,
            when?: string,
            duration?: string,
            location?: string,
            price?: string
        },
        heading: string,
        description: string,
        divs?: OptionalDiv[],
        why?: string[],
        content?: (Content | GeneralContent)[],
        who: (string | WhoNote)[],
        people: Person[],
        courseLink?: string,
    }
}


const allCourses : Course[] = [
    {
        id: "1",
        enrollType: "paid",
        title: "Introduction to Cancer Biology",
        category: "Advanced Biology",
        price: "100$ USD",
        src: image1,
        innerPage: {
            details: {
                when: "20-06-2025",
                duration: "8 weeks",
                location: "Online",
                price: "100 USD"
            },
            heading: "Welcome to the Introduction to Cancer Biology Course!",
            description: "This course is structured to give participants a deep understanding of cancer biology, exploring everything from fundamental principles to advanced research topics. Each week, we will cover different aspects of cancer biology, from cellular mechanisms to therapeutic strategies.",
            divs:[
                {
                    h2: "Course Structure",
                    content: [
                        {
                            heading: "Preparation Phase (Daily for 10 Days)",
                            paragraphs: [
                                "Independent study to build foundational knowledge.",
                                "Here you mention the three courses of (DNA Structure, DNA Replication, RNA Transcription)"
                            ]
                        },
                        {
                            heading: "Weekly Sessions",
                            paragraphs: [
                                "*Lecture (3 hours):* Covers core concepts in depth.",
                                "*Tutorial (1 hour):* Focuses on advanced discussions and clarifications.",
                                "*One-to-One Meeting (1 hour, optional):* Personalised guidance available upon request."
                            ]
                        },
                    ],
                }
            ],
            content: [
                {
                    button: "Week one: *Fundamentals of Cancer Biology and Classification*",
                    subList: [
                        "What is Cancer?",
                        "Basic Cell Biology of Cancer Development",
                        "Basics of Cell Biology and the Cell Cycle",
                        "Overview of the Cell Cycle and Its Regulation",
                        "How Uncontrolled Cell Cycle Leads to Cancer",
                        "Differences Between Normal Cells and Cancer Cells",
                        "Understanding cancer prevalence, incidence, and survival rates",
                        "Key trends in cancer statistics by type and region",
                        "Origin of Tumors from Normal Tissues",
                        "Tumors Originate from Various Specialized Cell Types",
                        "Major Types of Cancer",
                        "Classification of Tumors: Benign vs. Malignant",
                        "Histopathology and Architecture of Tumors",
                        "Epithelial Origin of Carcinomas",
                        "Carcinomas and Epithelial Tissue Structure",
                        "Other Tumor Types: Sarcomas, Hematopoietic, and Neuroectodermal Tumors"
                    ]
                },
                {
                    button: "Week two: *Cancer Incidence and Causes*",
                    subList: [
                        "Variability in Cancer Frequency Across Populations",
                        "Global Variability in Cancer Incidence",
                        "General Causes of Cancer",
                        "Cancer Risk and Lifestyle Factors",
                        "Historical Evidence of Cancer Associations",
                        "Discovery of Radiation Effects",
                        "Smoking and Cancer",
                        "Coal Tar and Skin Cancer",
                        "Viruses as Cancer Agents",
                        "The Role of Genetics in Cancer",
                        "Carcinogenesis and Mutagenesis"
                    ]
                },
                {
                    button: "Week Three: *Cancers seem to develop progressively*",
                    subList: [
                        "Normal Cells",
                        "Hyperplasia",
                        "Dysplasia",
                        "Carcinoma in Situ",
                        "Invasive Carcinoma",
                        "Cancer Requires Multiple Mutations",
                        "Single Mutation Initiation",
                        "Accumulation of Chromosomal Alterations",
                        "High Chromosomal Instability",
                        "Gene Mutations",
                        "Somatic Mutations",
                        "Germline Mutations",
                        "Two-Hit Hypothesis",
                        "Types of DNA damage and common causes",
                        "Mechanisms cells use to repair damaged DNA",
                    ]
                },
                {
                    button: "Week four: 14 Hallmarks of Cancer",
                    subList: [
                        "Sustaining Proliferative Signaling",
                        "Evading Growth Suppressors",
                        "Resisting Cell Death",
                        "Tumor-Promoting Inflammation",
                        "Enabling Replicative Immortality",
                        "Senescent Cells",
                        "Deregulating Cellular Metabolism",
                        "Avoiding Immune Destruction",
                        "Inducing or Accessing Vasculature",
                        "Activating Invasion & Metastasis",
                        "Unlocking Phenotypic Plasticity",
                        "Genome Instability & Mutation",
                        "Nonmutational Epigenetic Reprogramming",
                        "Polymorphic Microbiomes",
                    ]
                },
                {
                    button: "Week five: Tumor Viruses and Genetic Factors in Cancer",
                    subList: [
                        "The Role of Tumor Viruses in Cancer Research",
                        "Early Hypotheses on Tumor Viruses",
                        "Challenges to the Viral Theory of Cancer",
                        "The Retrovirus Hypothesis and Cancer",
                        "Human Cancer and Endogenous Retroviruses (ERVs)",
                        "Why the Tumor Virus Hypothesis Failed",
                        "Oncogenes: Drivers of Uncontrolled Growth",
                        "Tumor Suppressor Genes: The Guardians Against Cancer",
                    ]
                },
                {
                    button: "Week six: *The Process and Impact of Cancer Metastasis*",
                    subList: [
                        "What is Metastasis?",
                        "Primary Tumors vs. Metastases",
                        "The Danger of Metastasis",
                        "Local Invasion",
                        "Loss of Cell Adhesion",
                        "Epithelial-to-Mesenchymal Transition (EMT)",
                        "Degradation of Extracellular Matrix",
                        "Intravasation",
                        "Circulatory Survival",
                        "Platelet Cloaking",
                        "Immune Evasion",
                        "Arrest at Distant Site",
                        "Extravasation",
                        "Survival in New Microenvironment",
                        "Dormancy or Micrometastasis Formation",
                        "Reactivation and Proliferation",
                        "Angiogenesis",
                        "Colonization and Organ-Specific Growth",
                    ]
                },
                {
                    button: "Week Seven: Cancer Treatments and Their Drugs",
                    subList: [
                        {
                            heading: "*Surgery & Radiation*",
                            list:[
                                "- *External Beam Radiation Therapy*"
                            ]
                        },
                        {
                            heading: "*Hormonal Therapy*",
                            list:[
                                "*Anti-Estrogen Agents* (Breast Cancer)",
                                "*Anti-Testosterone Agents* (Prostate Cancer)"
                            ]
                        },
                        {
                            heading: "*Chemotherapy*",
                            list:[
                                "*DNA Replication Inhibitors*",
                                "*Anti-Metabolites*: 5-FU, Capecitabine, Gemcitabine",
                                "*Topoisomerase Inhibitors*: Etoposide, Irinotecan",
                                "*DNA Intercalators*: Cisplatin, Cyclophosphamide, Doxorubicin"
                            ]
                        },
                        {
                            heading: "*Cell Division Inhibitors*",
                            list:[
                                "*Vinca Alkaloids*: Vincristine, Vinorelbine",
                                "*Taxanes*: Paclitaxel, Docetaxel"
                            ]
                        },
                        {
                            heading: "*Targeted Therapy*",
                            list:[
                                "*VEGF Inhibitors*: Bevacizumab",
                                "*EGFR Inhibitors*: Tarceva",
                                "*HER2 Inhibitors*: Trastuzumab (Herceptin)",
                                "*PARPi Inhibitors*: Olaparib`"
                            ]
                        },
                        {
                            heading: "*Immunotherapy*",
                            list:[
                                "*PD-1/PD-L1 Inhibitors*: Nivolumab, Pembrolizumab",
                                "*CTLA-4 Inhibitors*: Ipilimumab (Yervoy)"
                            ]
                        }
                    ]
                }
            ],
            who: [
                {
                    note: 'This course is open to anyone interested in cancer biology, especially:'
                },
                "*Undergraduate and Graduate Students:* Ideal for those studying biomedical sciences, biotechnology, or related fields.",
                "*Early Career Researchers:* Suitable for researchers new to cancer biology or those transitioning into this field.",
                "*Enthusiastic Learners:* Anyone with a passion for understanding the complexities of cancer at the cellular level.",
                {
                    note: '*No prior experience in cancer research is required*, though a basic understanding of Molecular Biology will be helpful!'
                },
            ],
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
        enrollType: "free",
        title: "Advanced Cancer Biology",
        category: "Advanced Biology",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Learn *step-by-step how DNA replicates*, ensuring genetic continuity in all living organisms.",
                        "Explore the *key enzymes and molecular mechanisms* involved in replication.",
                        "Understand the differences between *prokaryotic and eukaryotic DNA replication*.",
                        "Discover the challenges of *telomere replication* and the role of *telomerase* in chromosome stability.",
                        "Essential for anyone studying *cell biology, genetics, or molecular medicine*."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to DNA Replication",
                    subList: [
                        "Importance of Genetic Continuity",
                        "Semiconservative Replication",
                        "DNA Synthesis Mechanisms"
                    ]
                },
                {
                    button: "Theoretical Models of DNA Replication",
                    subList: [
                        "Semiconservative Replication",
                        "Conservative Replication",
                        "Dispersive Replication"
                    ]
                },
                {
                    button: "Experimental Evidence of DNA Replication",
                    subList: [
                        "The Meselson–Stahl Experiment",
                        "Isotopes in DNA Replication",
                        "Buoyant Density Centrifugation"
                    ]
                },
                {
                    button: "DNA Replication in Eukaryotes",
                    subList: [
                        "Taylor–Woods–Hughes Experiment",
                        "Autoradiography and Replication Evidence"
                    ]
                },
                {
                    button: "Origins, Forks, and Units of Replication",
                    subList: [
                        "Origin of Replication (oriC)",
                        "Bidirectional Replication",
                        "Bidirectional Replication"
                    ]
                },
                {
                    button: "DNA Synthesis Mechanisms in Bacteria",
                    subList: [
                        "DNA Polymerases I, II, III, IV, and V",
                        "The DNA Pol III Holoenzyme",
                        "Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Key Enzymes and Proteins in DNA Replication",
                    subList: [
                        "DNA Helicase and Unwinding of the Helix",
                        "Single-Stranded Binding Proteins (SSBs)",
                        "DNA Gyrase and Topoisomerases"
                    ]
                },
                {
                    button: "Initiation of DNA Synthesis",
                    subList: [
                        "RNA Primers and Primase Activity",
                        "Continuous and Discontinuous DNA Synthesis",
                        "Okazaki Fragments and Lagging Strand"
                    ]
                },
                {
                    button: "Concurrent Synthesis of Leading and Lagging Strands",
                    subList: [
                        "The Role of the Holoenzyme in Synthesis",
                        "The Donut-Shaped Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Proofreading and Mismatch Repair",
                    subList: [
                        "Error Rate in DNA Polymerase III",
                        "Exonuclease Activity in Proofreading"
                    ]
                },
                {
                    button: "Eukaryotic DNA Replication",
                    subList: [
                        "Differences Between Prokaryotic and Eukaryotic Replication",
                        "Multiple Replication Origins in Eukaryotes",
                        "Role of Origin Recognition Complex (ORC)"
                    ]
                },
                {
                    button: "Regulation of DNA Replication",
                    subList: [
                        "Cell-Cycle Kinases and Replication Control",
                        "Polymerase Switching Mechanism"
                    ]
                },
                {
                    button: "Telomeres and Chromosome End Replication",
                    subList: [
                        "Role of Telomeres in Stability and Replication",
                        "Telomerase Function and Structure (TERC & TERT)",
                        "Prevention of Chromosome Shortening"
                    ]
                },
            ],
            who: [
                "*Students in molecular biology, genetics, and medicine* who want to master DNA replication.",
                "*Researchers and professionals* working in genomics, biotechnology, and bioinformatics.",
                "*Science educators and teachers* looking for a structured way to explain DNA replication.",
                "*Anyone interested in the molecular basis of heredity and cell division.*"
            ],
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
        enrollType: "free",
        title: "Immune Oncology",
        category: "Advanced Biology",
        price: "Coming Soon",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Learn *step-by-step how DNA replicates*, ensuring genetic continuity in all living organisms.",
                        "Explore the *key enzymes and molecular mechanisms* involved in replication.",
                        "Understand the differences between *prokaryotic and eukaryotic DNA replication*.",
                        "Discover the challenges of *telomere replication* and the role of *telomerase* in chromosome stability.",
                        "Essential for anyone studying *cell biology, genetics, or molecular medicine*."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to DNA Replication",
                    subList: [
                        "Importance of Genetic Continuity",
                        "Semiconservative Replication",
                        "DNA Synthesis Mechanisms"
                    ]
                },
                {
                    button: "Theoretical Models of DNA Replication",
                    subList: [
                        "Semiconservative Replication",
                        "Conservative Replication",
                        "Dispersive Replication"
                    ]
                },
                {
                    button: "Experimental Evidence of DNA Replication",
                    subList: [
                        "The Meselson–Stahl Experiment",
                        "Isotopes in DNA Replication",
                        "Buoyant Density Centrifugation"
                    ]
                },
                {
                    button: "DNA Replication in Eukaryotes",
                    subList: [
                        "Taylor–Woods–Hughes Experiment",
                        "Autoradiography and Replication Evidence"
                    ]
                },
                {
                    button: "Origins, Forks, and Units of Replication",
                    subList: [
                        "Origin of Replication (oriC)",
                        "Bidirectional Replication",
                        "Bidirectional Replication"
                    ]
                },
                {
                    button: "DNA Synthesis Mechanisms in Bacteria",
                    subList: [
                        "DNA Polymerases I, II, III, IV, and V",
                        "The DNA Pol III Holoenzyme",
                        "Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Key Enzymes and Proteins in DNA Replication",
                    subList: [
                        "DNA Helicase and Unwinding of the Helix",
                        "Single-Stranded Binding Proteins (SSBs)",
                        "DNA Gyrase and Topoisomerases"
                    ]
                },
                {
                    button: "Initiation of DNA Synthesis",
                    subList: [
                        "RNA Primers and Primase Activity",
                        "Continuous and Discontinuous DNA Synthesis",
                        "Okazaki Fragments and Lagging Strand"
                    ]
                },
                {
                    button: "Concurrent Synthesis of Leading and Lagging Strands",
                    subList: [
                        "The Role of the Holoenzyme in Synthesis",
                        "The Donut-Shaped Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Proofreading and Mismatch Repair",
                    subList: [
                        "Error Rate in DNA Polymerase III",
                        "Exonuclease Activity in Proofreading"
                    ]
                },
                {
                    button: "Eukaryotic DNA Replication",
                    subList: [
                        "Differences Between Prokaryotic and Eukaryotic Replication",
                        "Multiple Replication Origins in Eukaryotes",
                        "Role of Origin Recognition Complex (ORC)"
                    ]
                },
                {
                    button: "Regulation of DNA Replication",
                    subList: [
                        "Cell-Cycle Kinases and Replication Control",
                        "Polymerase Switching Mechanism"
                    ]
                },
                {
                    button: "Telomeres and Chromosome End Replication",
                    subList: [
                        "Role of Telomeres in Stability and Replication",
                        "Telomerase Function and Structure (TERC & TERT)",
                        "Prevention of Chromosome Shortening"
                    ]
                },
            ],
            who: [
                "*Students in molecular biology, genetics, and medicine* who want to master DNA replication.",
                "*Researchers and professionals* working in genomics, biotechnology, and bioinformatics.",
                "*Science educators and teachers* looking for a structured way to explain DNA replication.",
                "*Anyone interested in the molecular basis of heredity and cell division.*"
            ],
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
        enrollType: "free",
        title: "Brain Tumors and Glial Cell Biology",
        category: "Advanced Biology",
        price: "Upon Request",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Learn *step-by-step how DNA replicates*, ensuring genetic continuity in all living organisms.",
                        "Explore the *key enzymes and molecular mechanisms* involved in replication.",
                        "Understand the differences between *prokaryotic and eukaryotic DNA replication*.",
                        "Discover the challenges of *telomere replication* and the role of *telomerase* in chromosome stability.",
                        "Essential for anyone studying *cell biology, genetics, or molecular medicine*."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to DNA Replication",
                    subList: [
                        "Importance of Genetic Continuity",
                        "Semiconservative Replication",
                        "DNA Synthesis Mechanisms"
                    ]
                },
                {
                    button: "Theoretical Models of DNA Replication",
                    subList: [
                        "Semiconservative Replication",
                        "Conservative Replication",
                        "Dispersive Replication"
                    ]
                },
                {
                    button: "Experimental Evidence of DNA Replication",
                    subList: [
                        "The Meselson–Stahl Experiment",
                        "Isotopes in DNA Replication",
                        "Buoyant Density Centrifugation"
                    ]
                },
                {
                    button: "DNA Replication in Eukaryotes",
                    subList: [
                        "Taylor–Woods–Hughes Experiment",
                        "Autoradiography and Replication Evidence"
                    ]
                },
                {
                    button: "Origins, Forks, and Units of Replication",
                    subList: [
                        "Origin of Replication (oriC)",
                        "Bidirectional Replication",
                        "Bidirectional Replication"
                    ]
                },
                {
                    button: "DNA Synthesis Mechanisms in Bacteria",
                    subList: [
                        "DNA Polymerases I, II, III, IV, and V",
                        "The DNA Pol III Holoenzyme",
                        "Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Key Enzymes and Proteins in DNA Replication",
                    subList: [
                        "DNA Helicase and Unwinding of the Helix",
                        "Single-Stranded Binding Proteins (SSBs)",
                        "DNA Gyrase and Topoisomerases"
                    ]
                },
                {
                    button: "Initiation of DNA Synthesis",
                    subList: [
                        "RNA Primers and Primase Activity",
                        "Continuous and Discontinuous DNA Synthesis",
                        "Okazaki Fragments and Lagging Strand"
                    ]
                },
                {
                    button: "Concurrent Synthesis of Leading and Lagging Strands",
                    subList: [
                        "The Role of the Holoenzyme in Synthesis",
                        "The Donut-Shaped Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Proofreading and Mismatch Repair",
                    subList: [
                        "Error Rate in DNA Polymerase III",
                        "Exonuclease Activity in Proofreading"
                    ]
                },
                {
                    button: "Eukaryotic DNA Replication",
                    subList: [
                        "Differences Between Prokaryotic and Eukaryotic Replication",
                        "Multiple Replication Origins in Eukaryotes",
                        "Role of Origin Recognition Complex (ORC)"
                    ]
                },
                {
                    button: "Regulation of DNA Replication",
                    subList: [
                        "Cell-Cycle Kinases and Replication Control",
                        "Polymerase Switching Mechanism"
                    ]
                },
                {
                    button: "Telomeres and Chromosome End Replication",
                    subList: [
                        "Role of Telomeres in Stability and Replication",
                        "Telomerase Function and Structure (TERC & TERT)",
                        "Prevention of Chromosome Shortening"
                    ]
                },
            ],
            who: [
                "*Students in molecular biology, genetics, and medicine* who want to master DNA replication.",
                "*Researchers and professionals* working in genomics, biotechnology, and bioinformatics.",
                "*Science educators and teachers* looking for a structured way to explain DNA replication.",
                "*Anyone interested in the molecular basis of heredity and cell division.*"
            ],
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
        enrollType: "free",
        title: "Basics of Colorectal Cancer (CRC)",
        category: "Advanced Biology",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Learn *step-by-step how DNA replicates*, ensuring genetic continuity in all living organisms.",
                        "Explore the *key enzymes and molecular mechanisms* involved in replication.",
                        "Understand the differences between *prokaryotic and eukaryotic DNA replication*.",
                        "Discover the challenges of *telomere replication* and the role of *telomerase* in chromosome stability.",
                        "Essential for anyone studying *cell biology, genetics, or molecular medicine*."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to DNA Replication",
                    subList: [
                        "Importance of Genetic Continuity",
                        "Semiconservative Replication",
                        "DNA Synthesis Mechanisms"
                    ]
                },
                {
                    button: "Theoretical Models of DNA Replication",
                    subList: [
                        "Semiconservative Replication",
                        "Conservative Replication",
                        "Dispersive Replication"
                    ]
                },
                {
                    button: "Experimental Evidence of DNA Replication",
                    subList: [
                        "The Meselson–Stahl Experiment",
                        "Isotopes in DNA Replication",
                        "Buoyant Density Centrifugation"
                    ]
                },
                {
                    button: "DNA Replication in Eukaryotes",
                    subList: [
                        "Taylor–Woods–Hughes Experiment",
                        "Autoradiography and Replication Evidence"
                    ]
                },
                {
                    button: "Origins, Forks, and Units of Replication",
                    subList: [
                        "Origin of Replication (oriC)",
                        "Bidirectional Replication",
                        "Bidirectional Replication"
                    ]
                },
                {
                    button: "DNA Synthesis Mechanisms in Bacteria",
                    subList: [
                        "DNA Polymerases I, II, III, IV, and V",
                        "The DNA Pol III Holoenzyme",
                        "Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Key Enzymes and Proteins in DNA Replication",
                    subList: [
                        "DNA Helicase and Unwinding of the Helix",
                        "Single-Stranded Binding Proteins (SSBs)",
                        "DNA Gyrase and Topoisomerases"
                    ]
                },
                {
                    button: "Initiation of DNA Synthesis",
                    subList: [
                        "RNA Primers and Primase Activity",
                        "Continuous and Discontinuous DNA Synthesis",
                        "Okazaki Fragments and Lagging Strand"
                    ]
                },
                {
                    button: "Concurrent Synthesis of Leading and Lagging Strands",
                    subList: [
                        "The Role of the Holoenzyme in Synthesis",
                        "The Donut-Shaped Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Proofreading and Mismatch Repair",
                    subList: [
                        "Error Rate in DNA Polymerase III",
                        "Exonuclease Activity in Proofreading"
                    ]
                },
                {
                    button: "Eukaryotic DNA Replication",
                    subList: [
                        "Differences Between Prokaryotic and Eukaryotic Replication",
                        "Multiple Replication Origins in Eukaryotes",
                        "Role of Origin Recognition Complex (ORC)"
                    ]
                },
                {
                    button: "Regulation of DNA Replication",
                    subList: [
                        "Cell-Cycle Kinases and Replication Control",
                        "Polymerase Switching Mechanism"
                    ]
                },
                {
                    button: "Telomeres and Chromosome End Replication",
                    subList: [
                        "Role of Telomeres in Stability and Replication",
                        "Telomerase Function and Structure (TERC & TERT)",
                        "Prevention of Chromosome Shortening"
                    ]
                },
            ],
            who: [
                "*Students in molecular biology, genetics, and medicine* who want to master DNA replication.",
                "*Researchers and professionals* working in genomics, biotechnology, and bioinformatics.",
                "*Science educators and teachers* looking for a structured way to explain DNA replication.",
                "*Anyone interested in the molecular basis of heredity and cell division.*"
            ],
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
        enrollType: "upon request",
        title: "Circular RNA (CircRNA) Biology",
        category: "Advanced Biology",
        price: "upon request",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "Videos",
                duration: "hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why Take a Personalized Course?",
                    content: [
                        "*Focused Learning:* Instead of multiple disconnected courses, get everything structured in one place.",
                        "*One-on-One Guidance:* Direct support to ensure you apply what you learn effectively.",
                        "*Career Impact:* Gain skills that help you *finish your research faster, improve job prospects, and increase your salary potential*.",
                    ]
                }
            ],
            
            who: [
                {
                    note: "This course is designed *specifically for master's and PhD students, NOT undergraduates. Instead of taking multiple scattered courses, this program provides **a structured, focused learning experience* tailored to your needs."
                },
                {
                    note: "Graduate students often struggle to find the right resources amid a sea of general courses. This program *offers a clear path* with *focused content and one-on-one guidance, ensuring that you learn exactly what you need **without wasting time on unnecessary material*."
                },
                "*Master's or PhD students* looking for structured, targeted learning.",
                "*Researchers needing one-on-one guidance* to apply skills directly to their work.",
                "*Professionals seeking career advancement, whether to **secure a new job or increase their salary* after completing their degree.",
                "*NOT for undergraduate students* who have more time to explore general learning paths. This course is for those who need *a clear, efficient, and personalized* learning experience."
            ],
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
        enrollType: "upon request",
        title: "RNA Sequencing",
        category: "Data Analysis and Technologies",
        price: "upon request",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why Take a Personalized Course?",
                    content: [
                        "*Focused Learning:* Instead of multiple disconnected courses, get everything structured in one place.",
                        "*One-on-One Guidance:* Direct support to ensure you apply what you learn effectively.",
                        "*Career Impact:* Gain skills that help you *finish your research faster, improve job prospects, and increase your salary potential*.",
                    ]
                }
            ],
            
            who: [
                {
                    note: "This course is designed *specifically for master's and PhD students, NOT undergraduates. Instead of taking multiple scattered courses, this program provides **a structured, focused learning experience* tailored to your needs."
                },
                {
                    note: "Graduate students often struggle to find the right resources amid a sea of general courses. This program *offers a clear path* with *focused content and one-on-one guidance, ensuring that you learn exactly what you need **without wasting time on unnecessary material*."
                },
                "*Master's or PhD students* looking for structured, targeted learning.",
                "*Researchers needing one-on-one guidance* to apply skills directly to their work.",
                "*Professionals seeking career advancement, whether to **secure a new job or increase their salary* after completing their degree.",
                "*NOT for undergraduate students* who have more time to explore general learning paths. This course is for those who need *a clear, efficient, and personalized* learning experience."
            ],
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
        enrollType: "upon request",
        title: "Single-Cell RNA Sequencing",
        category: "Data Analysis and Technologies",
        price: "upon request",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why Take a Personalized Course?",
                    content: [
                        "*Focused Learning:* Instead of multiple disconnected courses, get everything structured in one place.",
                        "*One-on-One Guidance:* Direct support to ensure you apply what you learn effectively.",
                        "*Career Impact:* Gain skills that help you *finish your research faster, improve job prospects, and increase your salary potential*.",
                    ]
                }
            ],
            
            who: [
                {
                    note: "This course is designed *specifically for master's and PhD students, NOT undergraduates. Instead of taking multiple scattered courses, this program provides **a structured, focused learning experience* tailored to your needs."
                },
                {
                    note: "Graduate students often struggle to find the right resources amid a sea of general courses. This program *offers a clear path* with *focused content and one-on-one guidance, ensuring that you learn exactly what you need **without wasting time on unnecessary material*."
                },
                "*Master's or PhD students* looking for structured, targeted learning.",
                "*Researchers needing one-on-one guidance* to apply skills directly to their work.",
                "*Professionals seeking career advancement, whether to **secure a new job or increase their salary* after completing their degree.",
                "*NOT for undergraduate students* who have more time to explore general learning paths. This course is for those who need *a clear, efficient, and personalized* learning experience."
            ],
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
        enrollType: "upon request",
        title: "Spatial Transcriptomics",
        category: "Data Analysis and Technologies",
        price: "upon request",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why Take a Personalized Course?",
                    content: [
                        "*Focused Learning:* Instead of multiple disconnected courses, get everything structured in one place.",
                        "*One-on-One Guidance:* Direct support to ensure you apply what you learn effectively.",
                        "*Career Impact:* Gain skills that help you *finish your research faster, improve job prospects, and increase your salary potential*.",
                    ]
                }
            ],
            
            who: [
                {
                    note: "This course is designed *specifically for master's and PhD students, NOT undergraduates. Instead of taking multiple scattered courses, this program provides **a structured, focused learning experience* tailored to your needs."
                },
                {
                    note: "Graduate students often struggle to find the right resources amid a sea of general courses. This program *offers a clear path* with *focused content and one-on-one guidance, ensuring that you learn exactly what you need **without wasting time on unnecessary material*."
                },
                "*Master's or PhD students* looking for structured, targeted learning.",
                "*Researchers needing one-on-one guidance* to apply skills directly to their work.",
                "*Professionals seeking career advancement, whether to **secure a new job or increase their salary* after completing their degree.",
                "*NOT for undergraduate students* who have more time to explore general learning paths. This course is for those who need *a clear, efficient, and personalized* learning experience."
            ],
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
        enrollType: "free",
        title: "Data Analysis & Bioinformatics with R",
        category: "Data Analysis and Technologies",
        price: "free",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "100",
                parts: "6",
                duration: "27 hours",
                location: "Online",
                
            },
            courseLink: "https://www.youtube.com/watch?v=PI4kigc4i-g&list=PLC4LFcwOQGSEba8Uha5Hp7WBzU2T_RT_8",
            heading: "Welcome to the DNA Replication Course!",
            description: "Data analysis and bioinformatics are essential skills for researchers, scientists, and students working with biological data. This *free YouTube course* provides a structured approach to *learning R programming, focusing on **data types, visualization, statistical analysis, and genomic data processing*. Whether you’re new to R or looking to enhance your bioinformatics skills, this course is designed to *help you analyze, visualize, and interpret biological datasets efficiently*.",
            content: [
                {
                    heading: "*Part 1: Data Types & Structures*",
                    vids:"8",
                    duration: "1 hour 45 minutes",
                    partLink:"https://www.youtube.com/watch?v=PI4kigc4i-g&list=PLC4LFcwOQGSEba8Uha5Hp7WBzU2T_RT_8",
                    contentPieces: [
                        {
                            button: "*Data Types*",
                            subList: [
                                "Character",
                                "Numeric",
                                "Integer",
                                "Logical",
                                "Complex"
                            ]
                        },
                        {
                            button: "*Data Structures*",
                            subList: [
                                "Vector",
                                "Factor",
                                "Matrix",
                                "Data Frame",
                                "List"
                            ]
                        },
                    ]
                },
                {
                    heading: "*Part 2: Reading, Downloading & Installing Data & Packages*",
                    vids:"8",
                    duration: "1 hour 30 minutes",
                    partLink:" https://www.youtube.com/watch?v=WJR_XjIrGVk&list=PLC4LFcwOQGSGg3YPtoTVAX1znRblEo-9j",
                    contentPieces: [
                        {
                            button: "*Reading & importing data* from various sources",
                        },
                        {
                            button: "*Downloading biological datasets* from *UCSC and Pepper*",
                        },
                        {
                            button: "Installing *R packages* from *CRAN, GitHub, and Bioconductor*",
                        },
                    ]
                },
                {
                    heading: "*Part 3: Data Visualization*",
                    vids:"11",
                    duration: "3 hours 45 minutes",
                    partLink:"https://www.youtube.com/watch?v=uumUZCAU_YQ&list=PLC4LFcwOQGSFqZgpvT76obvkph0SADHBk",
                    contentPieces: [
                        {
                            button: "Creating *different types of plots* in R",
                            subList: [
                                "*Bar Plots, Histograms, Scatter Plots, Box Plots*",
                                "*Density Plots, Violin Plots, Line Plots*",
                                "*PCA (Principal Component Analysis), Heatmaps*"
                            ]
                        }
                    ]
                },
                {
                    heading: "*Part 4: Data Transformation & Programming in R*",
                    vids:"15",
                    duration: "3 hours",
                    partLink:"https://www.youtube.com/watch?v=G9MIKReLkwY&list=PLC4LFcwOQGSGTydn4NPPr76Pz2i-Xa2sX",
                    contentPieces: [
                        {
                            button: "*Data manipulation & transformation* techniques",
                            subList: [
                                "Filtering, Selecting, Arranging, Mutating, Summarizing",
                                "Spreading, Gathering, Separating, and Pulling data",
                                "Integer",
                                "Logical",
                                "Complex"
                            ]
                        },
                        {
                            button: "*Relational Data & Joins*",
                            subList: [
                                "Left/Right Join",
                                "Semi/Anti Join",
                                "Inner/Full Join"
                            ]
                        },
                        {
                            button: "*Programming Basics*",
                            subList: [
                                "Writing Functions", 
                                "Iteration (Loops & Apply functions)"
                            ]
                        }
                    ]
                },
                {
                    heading: "*Part 5: Basic Statistical Inference*",
                    vids:"37",
                    duration: "10 hours 30 minutes",
                    partLink:"https://www.youtube.com/watch?v=yYryZKEuS8E&list=PLC4LFcwOQGSHbmds9_2ue9Z5kJY9hG71n",
                    contentPieces: [
                        {
                            button: "*Descriptive Statistics*",
                            subList: [
                                "Measures of Centrality", 
                                "Variance, Standard Deviation"
                            ]
                        },
                        {
                            button: "*Probability & Sampling*",
                            subList: [
                                "Normal Distribution",
                                "Standard Error",
                                "Sampling Variability"
                            ]
                        },
                        {
                            button: "*Resampling Techniques*",
                            subList: [
                                "Bootstrapping",
                                "Virtual Resampling",
                                "Confidence Intervals"
                            ]
                        },
                        {
                            button: "Hypothesis Testing Methods",
                            subList: [
                                "*T-Test*",
                                "*ANOVA (Analysis of Variance)*",
                                "*Chi-Square Test*",
                            ]
                        },
                    ]
                },
                {
                    heading: "*Part 6: Introduction to Bioconductor & Genomic Data Analysis*",
                    vids:"19",
                    duration: "6 hours 30 minutes",
                    partLink:"https://www.youtube.com/watch?v=n8mp3_GeHaQ&list=PLC4LFcwOQGSHi1KVjb_8WEdsCV36hLSLk",
                    contentPieces: [
                        {
                            button: "*Introduction to Bioconductor*, a powerful tool for analyzing genomic data",
                            subList: [
                                "Character",
                                "Numeric",
                                "Integer",
                                "Logical",
                                "Complex"
                            ]
                        },
                        {
                            button: "*Genomic Annotation & Gene Ontology (GO) Analysis*",
                        },
                        {
                            button: "*Multiple Sequence Alignment & Phylogenetic Tree Construction*",
                        },
                        {
                            button: "*Quality Control for Sequencing Reads* (Trimming & Filtering Reads)",
                        },
                        {
                            button: "*Working with Genomic Data in R*",
                            subList: [
                                "Introduction to *GenomicRanges* package",
                                "Understanding the *SummarizedExperiment Object*",
                            ]
                        },
                    ]
                }
            ],
            who: [
                "*Beginners* wanting to learn R from scratch.",
                "*Researchers & Biologists* working with genomic data.",
                "*Data Scientists* interested in bioinformatics applications.",
                "*Students* in life sciences, computational biology, or bioinformatics.",
                {
                    note: "No prior programming knowledge is required—just a passion for *learning and analyzing biological data*!"
                }
            ],
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
        enrollType: "free",
        title: "DNA Replication",
        category: "Basics",
        price: "",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Learn *step-by-step how DNA replicates*, ensuring genetic continuity in all living organisms.",
                        "Explore the *key enzymes and molecular mechanisms* involved in replication.",
                        "Understand the differences between *prokaryotic and eukaryotic DNA replication*.",
                        "Discover the challenges of *telomere replication* and the role of *telomerase* in chromosome stability.",
                        "Essential for anyone studying *cell biology, genetics, or molecular medicine*."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to DNA Replication",
                    subList: [
                        "Importance of Genetic Continuity",
                        "Semiconservative Replication",
                        "DNA Synthesis Mechanisms"
                    ]
                },
                {
                    button: "Theoretical Models of DNA Replication",
                    subList: [
                        "Semiconservative Replication",
                        "Conservative Replication",
                        "Dispersive Replication"
                    ]
                },
                {
                    button: "Experimental Evidence of DNA Replication",
                    subList: [
                        "The Meselson–Stahl Experiment",
                        "Isotopes in DNA Replication",
                        "Buoyant Density Centrifugation"
                    ]
                },
                {
                    button: "DNA Replication in Eukaryotes",
                    subList: [
                        "Taylor–Woods–Hughes Experiment",
                        "Autoradiography and Replication Evidence"
                    ]
                },
                {
                    button: "Origins, Forks, and Units of Replication",
                    subList: [
                        "Origin of Replication (oriC)",
                        "Bidirectional Replication",
                        "Bidirectional Replication"
                    ]
                },
                {
                    button: "DNA Synthesis Mechanisms in Bacteria",
                    subList: [
                        "DNA Polymerases I, II, III, IV, and V",
                        "The DNA Pol III Holoenzyme",
                        "Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Key Enzymes and Proteins in DNA Replication",
                    subList: [
                        "DNA Helicase and Unwinding of the Helix",
                        "Single-Stranded Binding Proteins (SSBs)",
                        "DNA Gyrase and Topoisomerases"
                    ]
                },
                {
                    button: "Initiation of DNA Synthesis",
                    subList: [
                        "RNA Primers and Primase Activity",
                        "Continuous and Discontinuous DNA Synthesis",
                        "Okazaki Fragments and Lagging Strand"
                    ]
                },
                {
                    button: "Concurrent Synthesis of Leading and Lagging Strands",
                    subList: [
                        "The Role of the Holoenzyme in Synthesis",
                        "The Donut-Shaped Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Proofreading and Mismatch Repair",
                    subList: [
                        "Error Rate in DNA Polymerase III",
                        "Exonuclease Activity in Proofreading"
                    ]
                },
                {
                    button: "Eukaryotic DNA Replication",
                    subList: [
                        "Differences Between Prokaryotic and Eukaryotic Replication",
                        "Multiple Replication Origins in Eukaryotes",
                        "Role of Origin Recognition Complex (ORC)"
                    ]
                },
                {
                    button: "Regulation of DNA Replication",
                    subList: [
                        "Cell-Cycle Kinases and Replication Control",
                        "Polymerase Switching Mechanism"
                    ]
                },
                {
                    button: "Telomeres and Chromosome End Replication",
                    subList: [
                        "Role of Telomeres in Stability and Replication",
                        "Telomerase Function and Structure (TERC & TERT)",
                        "Prevention of Chromosome Shortening"
                    ]
                },
            ],
            who: [
                "*Students in molecular biology, genetics, and medicine* who want to master DNA replication.",
                "*Researchers and professionals* working in genomics, biotechnology, and bioinformatics.",
                "*Science educators and teachers* looking for a structured way to explain DNA replication.",
                "*Anyone interested in the molecular basis of heredity and cell division.*"
            ],
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
            ],
            courseLink: "https://youtube.com/playlist?list=PLC4LFcwOQGSH8NbGsisaJiyhxWQ5MVF1l&si=-sRgDZ6lddHRiync",
        }
    },
    {
        id: "12",
        enrollType: "free",
        title: "DNA Structure",
        category: "Basics",
        price: "",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "19",
                duration: "4 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Structure and Analysis Course!",
            description: "This course is designed to provide a comprehensive understanding of DNA as the fundamental molecule of life. From its historical discovery to its intricate structure and chemical properties, participants will explore how DNA functions as the genetic blueprint of all living organisms. Throughout the course, we will examine the experimental evidence supporting DNA as the genetic material, delve into the molecular architecture of nucleic acids, and analyze the key differences between DNA and RNA. By the end, participants will have a solid grasp of DNA's role in genetics, inheritance, and molecular biology.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Gain a strong foundation in *DNA structure and function*, essential for understanding genetics and molecular biology.",
                        "Explore the *historical experiments* that led to the discovery of DNA as genetic material.",
                        "Understand the differences between *DNA and RNA*, and how they encode genetic information.",
                        "Learn about *nucleic acid chemistry, base pairing, and DNA stability* with real scientific examples.",
                        "Perfect for students, researchers, and professionals looking to strengthen their knowledge of molecular biology."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to DNA Structure",
                    subList: [
                        "Characteristics of Genetic Material",
                        "Replication, Storage, Expression, and Variation by Mutation"
                    ]
                },
                {
                    button: "Historical Perspectives on Genetic Material",
                    subList: [
                        "Early Theories: Protein vs. DNA as Genetic Material",
                        "Avery, MacLeod, and McCarty Experiment",
                        "Griffith’s Transformation Experiments",
                        "Hershey-Chase Experiment"
                    ]
                },
                {
                    button: "Evidence Supporting DNA as Genetic Material",
                    subList: [
                        "Transformation Experiments",
                        "Transfection Studies",
                        "Indirect and Direct Evidence in Eukaryotes"
                    ]
                },
                {
                    button: "RNA as Genetic Material",
                    subList: [
                        "Experimental Evidence of RNA in Viruses",
                        "Role of Retroviruses and Reverse Transcription"
                    ]
                },
                {
                    button: "Nucleic Acid Chemistry",
                    subList: [
                        "Structure of DNA and RNA",
                        "Nucleotides, Nucleosides, and Phosphates",
                        "Polynucleotides and DNA Stability"
                    ]
                },
                {
                    button: "The DNA Double Helix",
                    subList: [
                        "Chargaff’s Base Composition Studies",
                        "X-ray Diffraction and Rosalind Franklin’s Contribution",
                        "Watson and Crick Model of DNA Structure"
                    ]
                },
                {
                    button: "Molecular Stability of DNA",
                    subList: [
                        "Hydrogen Bonding in Base Pairs",
                        "Importance of Sugar-Phosphate Backbone",
                        "Alternative DNA Forms (A-DNA, B-DNA, Z-DNA)"
                    ]
                },
                {
                    button: "Structure of RNA and Its Types",
                    subList: [
                        "Ribosomal RNA (rRNA)",
                        "Messenger RNA (mRNA)",
                        "Transfer RNA (tRNA)"
                    ]
                },
            ],
            who: [
                "*Undergraduate and graduate students* in biology, biotechnology, genetics, and related fields.",
                "*Researchers and professionals* seeking a refresher on DNA structure and analysis.",
                "*Science enthusiasts* curious about how genetic information is stored and transmitted.",
                "*Aspiring geneticists and bioinformaticians* who want a strong molecular foundation."
            ],
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
            ],
            courseLink: "https://youtube.com/playlist?list=PLC4LFcwOQGSFSXo72eTw04tf7DMzyeuj_&si=vvQCCsNUEnnxdro0",
        }
    },
    {
        id: "13",
        enrollType: "free",
        title: "DNA Transcription",
        category: "Basics",
        price: "",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "19",
                duration: "7 hours",
                location: "Online",
                
            },
            heading: "Welcome to the Transcription Course!",
            description: "This course is designed to provide an in-depth exploration of transcription, the first step in gene expression where genetic information is transcribed from DNA into RNA. We will cover the molecular machinery that drives transcription, including RNA polymerases, promoters, and regulatory elements. Participants will learn about the genetic code, RNA processing events like splicing and polyadenylation, and the differences between prokaryotic and eukaryotic transcription. By the end of the course, participants will have a strong understanding of how transcription is regulated and its crucial role in cellular function and gene expression.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Learn how genetic information is *transcribed from DNA to RNA*, a critical step in gene expression.",
                        "Understand the *molecular machinery* behind transcription, including *RNA polymerase and transcription factors*.",
                        "Explore the differences between *prokaryotic and eukaryotic transcription*.",
                        "Gain insights into *post-transcriptional modifications, including **splicing, polyadenylation, and RNA editing*.",
                        "Essential for those interested in *gene regulation, molecular genetics, and biotechnology applications*."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to Transcription",
                    subList: [
                        "Genetic Information Encoding",
                        "DNA to RNA Information Transfer"
                    ]
                },
                {
                    button: "General Features of the Genetic Code",
                    subList: [
                        "Triplet Code and Codon Specificity",
                        "Start and Stop Codons",
                        "Nonoverlapping and Comma-less Nature of the Code",
                        "Colinearity and Universality"
                    ]
                },
                {
                    button: "Early Studies on the Genetic Code",
                    subList: [
                        "The Role of mRNA",
                        "Discovery of Messenger RNA (mRNA)",
                        "The Triplet Nature of the Genetic Code"
                    ]
                },
                {
                    button: "Early Studies on the Genetic Code",
                    subList: [
                        "Frameshift Mutations and Crick’s Experiment",
                        "Nirenberg and Matthaei’s Discoveries",
                        "Cell-Free Protein Synthesis Systems",
                        "Polynucleotide Phosphorylase and RNA Synthesis",
                    ]
                },
                {
                    button: "Experimental Methods to Identify Codons",
                    subList: [
                        "Homopolymer Experiments",
                        "Triplet Binding Assay",
                        "Repeating Copolymer Experiments"
                    ]
                },
                {
                    button: "Patterns in the Genetic Code",
                    subList: [
                        "Degeneracy and Codon Assignments",
                        "Wobble Hypothesis and tRNA Flexibility"
                    ]
                },
                {
                    button: "Initiation and Termination Codons",
                    subList: [
                        "Start Codon: AUG and Methionine",
                        "Stop Codons: UAA, UAG, UGA",
                        "Nonsense Mutations and Protein Truncation"
                    ]
                },
                {
                    button: "Universality and Exceptions in the Genetic Code",
                    subList: [
                        "Mitochondrial Code Variations",
                        "Evolutionary Adaptations of the Code"
                    ]
                },
                {
                    button: "Transcription Process",
                    subList: [
                        "Role of RNA Polymerase",
                        "Promoters and Template Binding",
                        "Cis-Acting Elements: Promoters and Terminators"
                    ]
                },
                {
                    button: "Regulation of Transcription",
                    subList: [
                        "Consensus Sequences and Their Impact",
                        "Strength of Promoters and Gene Expression Levels",
                        "Sigma Factors and Their Role in Bacteria"
                    ]
                },
                {
                    button: "Regulation of Transcription",
                    subList: [
                        "Proofreading and RNA Polymerase Fidelity",
                        "Intrinsic and Rho-Dependent Termination"
                    ]
                },
                {
                    button: "Differences Between Bacterial and Eukaryotic Transcription",
                    subList: [
                        "Nucleus vs. Cytoplasmic Transcription",
                        "Chromatin Remodeling in Eukaryotes",
                        "Cis-Acting Enhancers and Silencers"
                    ]
                },
                {
                    button: "Transcription in Eukaryotes",
                    subList: [
                        "RNA Polymerase I, II, and III",
                        "Core Promoter and Enhancers",
                        "General and Specific Transcription Factors"
                    ]
                },
                {
                    button: "Post-Transcriptional Modifications",
                    subList: [
                        "Capping and Polyadenylation",
                        "Processing of mRNA in Eukaryotes",
                        "Alternative Splicing and Exon Shuffling"
                    ]
                },
                {
                    button: "RNA Splicing and Its Mechanisms",
                    subList: [
                        "Self-Splicing Introns (Group I and II)",
                        "Spliceosome and Small Nuclear RNAs (snRNAs)",
                        "Role of snRNPs in Pre-mRNA Processing"
                    ]
                },
                {
                    button: "Significance of Introns and Exons",
                    subList: [
                        "Alternative Splicing and Gene Diversity",
                        "Evolutionary Importance of Introns",
                        "Regulatory Functions of Intronic Sequences"
                    ]
                },
                {
                    button: "Termination of Transcription in Eukaryotes",
                    subList: [
                        "Cleavage and Polyadenylation",
                        "Regulation of mRNA Stability"
                    ]
                },
            ],
            who: [
                "*Students in biology, genetics, and biotechnology* who want a deeper understanding of transcription.",
                "*Researchers working in genomics, transcriptomics, and molecular biology.*",
                "*Science communicators and educators* explaining gene expression and regulation.",
                "*Science communicators and educators* explaining gene expression and regulation."
            ],
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
            ],
            courseLink: "https://youtube.com/playlist?list=PLC4LFcwOQGSHGArTtrYu4U0iP9LbBEO_Z&si=dPNNVGF3WMzop-wu",
        }
    },
    {
        id: "14",
        enrollType: "free",
        title: "Introduction to Bioinformatics",
        category: "Basics",
        price: "200.00$ USD",
        src: image2,
        innerPage: {
            details: {
                noOfVideos: "14",
                duration: "4.5 hours",
                location: "Online",
                
            },
            heading: "Welcome to the DNA Replication Course!",
            description: "This course will guide participants through the fascinating process of DNA replication, a fundamental mechanism ensuring genetic continuity in all living cells. We will explore the experimental discoveries that confirmed the semiconservative nature of replication, the molecular machinery involved, and the step-by-step process of DNA synthesis in both prokaryotic and eukaryotic systems. Key topics include replication origins, polymerases, proofreading mechanisms, and the challenges of replicating chromosome ends. By the end of the course, participants will have a thorough understanding of how DNA faithfully replicates and the critical enzymes that drive this essential process.",
            divs: [
                {
                    h2: "Why take this course?",
                    content: [
                        "Learn *step-by-step how DNA replicates*, ensuring genetic continuity in all living organisms.",
                        "Explore the *key enzymes and molecular mechanisms* involved in replication.",
                        "Understand the differences between *prokaryotic and eukaryotic DNA replication*.",
                        "Discover the challenges of *telomere replication* and the role of *telomerase* in chromosome stability.",
                        "Essential for anyone studying *cell biology, genetics, or molecular medicine*."
                    ]
                }
            ],
            content: [
                {
                    button: "Introduction to DNA Replication",
                    subList: [
                        "Importance of Genetic Continuity",
                        "Semiconservative Replication",
                        "DNA Synthesis Mechanisms"
                    ]
                },
                {
                    button: "Theoretical Models of DNA Replication",
                    subList: [
                        "Semiconservative Replication",
                        "Conservative Replication",
                        "Dispersive Replication"
                    ]
                },
                {
                    button: "Experimental Evidence of DNA Replication",
                    subList: [
                        "The Meselson–Stahl Experiment",
                        "Isotopes in DNA Replication",
                        "Buoyant Density Centrifugation"
                    ]
                },
                {
                    button: "DNA Replication in Eukaryotes",
                    subList: [
                        "Taylor–Woods–Hughes Experiment",
                        "Autoradiography and Replication Evidence"
                    ]
                },
                {
                    button: "Origins, Forks, and Units of Replication",
                    subList: [
                        "Origin of Replication (oriC)",
                        "Bidirectional Replication",
                        "Bidirectional Replication"
                    ]
                },
                {
                    button: "DNA Synthesis Mechanisms in Bacteria",
                    subList: [
                        "DNA Polymerases I, II, III, IV, and V",
                        "The DNA Pol III Holoenzyme",
                        "Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Key Enzymes and Proteins in DNA Replication",
                    subList: [
                        "DNA Helicase and Unwinding of the Helix",
                        "Single-Stranded Binding Proteins (SSBs)",
                        "DNA Gyrase and Topoisomerases"
                    ]
                },
                {
                    button: "Initiation of DNA Synthesis",
                    subList: [
                        "RNA Primers and Primase Activity",
                        "Continuous and Discontinuous DNA Synthesis",
                        "Okazaki Fragments and Lagging Strand"
                    ]
                },
                {
                    button: "Concurrent Synthesis of Leading and Lagging Strands",
                    subList: [
                        "The Role of the Holoenzyme in Synthesis",
                        "The Donut-Shaped Sliding DNA Clamp"
                    ]
                },
                {
                    button: "Proofreading and Mismatch Repair",
                    subList: [
                        "Error Rate in DNA Polymerase III",
                        "Exonuclease Activity in Proofreading"
                    ]
                },
                {
                    button: "Eukaryotic DNA Replication",
                    subList: [
                        "Differences Between Prokaryotic and Eukaryotic Replication",
                        "Multiple Replication Origins in Eukaryotes",
                        "Role of Origin Recognition Complex (ORC)"
                    ]
                },
                {
                    button: "Regulation of DNA Replication",
                    subList: [
                        "Cell-Cycle Kinases and Replication Control",
                        "Polymerase Switching Mechanism"
                    ]
                },
                {
                    button: "Telomeres and Chromosome End Replication",
                    subList: [
                        "Role of Telomeres in Stability and Replication",
                        "Telomerase Function and Structure (TERC & TERT)",
                        "Prevention of Chromosome Shortening"
                    ]
                },
            ],
            who: [
                "*Students in molecular biology, genetics, and medicine* who want to master DNA replication.",
                "*Researchers and professionals* working in genomics, biotechnology, and bioinformatics.",
                "*Science educators and teachers* looking for a structured way to explain DNA replication.",
                "*Anyone interested in the molecular basis of heredity and cell division.*"
            ],
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