import { StaticImageData } from "next/image";
import image1 from "../../../public/images/publication-test.webp"

export type Publication = {
    id: string,
    title: string,
    authors: string[],
    date: string,
    src: string,
    link: string,
    pdf: string,
}

const allPublications : Publication[] = [
    {
        id: "1",
        title: "Harnessing STING signaling and natural killer cells overcomes PARP inhibitor resistance in homologous recombination deficient breast cancer",
        authors: [
            "Pedretti, F.",
            "Abdalfttah, M.",
            "Pellegrino, B.",
            "Mateo-González, F.",
            "Martínez-Sanz, P.",
            "Herencia-Ropero, A.",
            "Òdena, A.",
            "Clavell-Revelles, P.",
            "Casali, G.",
            "Domenech, H.",
            "Monserrat, L.",
            "Papić, D.",
            "Mas Malavila, A.",
            "Pascual-Reguant, A.",
            "Eixarch, H.",
            "Guzmán, M.",
            "Rodríguez, O.",
            "Grueso, J.",
            "Simonetti, S.",
            "...Serra, V."
        ],
        date: "Cancer Research (2025)",
        src: "https://www.purdue.edu/uns/images/2019/cancer-research.jpg",
        link: "",
        pdf: "/2024.03.01.582941v1.full.pdf"
    },
    {
        id: "2",
        title: "Community assesses differential cell communication using large multi-sample case-control scRNAseq datasets",
        authors: [
            "Solovey, M.",
            "Celik, M. A.",
            "Salcher, F. R.",
            "Abdalfttah, M.",
            "Ismail, M.",
            "Scialdone, A.",
            "... & Colome-Tatche, M."
        ],
        date: "Cell Reports, 2024",
        src: "https://www.cshl.edu/wp-content/uploads/2018/02/bioarchive-logo.png",
        link: "https://www.biorxiv.org/content/10.1101/2024.03.01.582941v1",
        pdf: "/2024.03.01.582941v1.full.pdf"
    },
    {
        id: "3",
        title: "Multigene panel sequencing reveals cancer-specific and common somatic mutations in colorectal cancer patients: an Egyptian experience",
        authors: [
            "Youssef, A. S. E. D.", 
            "Abdalfttah, M", 
            "Lotfy, M. M.", 
            "Nassar, A.", 
            "Abouelhoda, M.", 
            "Touny, A. O.", 
            "... & Zekri, A. R. N. "
        ],
        date: "Current issues in molecular biology (2022)",
        src: "https://www.mdpi.com/files/uploaded/covers/cimb/big_cover-cimb-v45-i10.png",
        link: "https://www.mdpi.com/1467-3045/44/3/90",
        pdf: "/cimb-44-00090-with-cover.pdf"
    },
    {
        id: "4",
        title: "In Silico Characterization of Toxin-Antitoxin Systems in Campylobacter Isolates Recovered from Food Sources and Sporadic Human Illness",
        authors: [
            "Wadie, B.",
            "Abdalfttah, M",
            "Yousef, A.",
            "Mouftah, S. F.",
            "Elhadidy, M.",
            "& Salem, T. Z"
        ],
        date: "Genes (2021)",
        src: "https://www.mdpi.com/files/uploaded/covers/genes/big_cover-genes-v13-i4.png",
        link: "https://www.mdpi.com/2073-4425/12/1/72",
        pdf: "/genes-12-00072-with-cover.pdf"
    }
]

export default allPublications;