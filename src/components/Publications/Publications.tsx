import React from 'react'
import styles from "./publications.module.css"
import MainHeading from '../MainHeading/MainHeading'
import PublicationsCard from './PublicationsCard/PublicationsCard'
import Image from 'next/image'

import img from "../../../public/images/publication-test.webp"


const Publications = ({
    lo
}: {
    lo: string
}) => {
  return (
    <section className={styles.publications}>
        <MainHeading>
            Publications
        </MainHeading>
        <div className="container">
            <PublicationsCard>
                <div>
                    <Image src={img} alt='Publication Image'></Image>
                </div>
                <div>       
                    <h4>
                        Relapse to cocaine seeking is regulated by medial habenula NR4A2/NURR1 in mice
                    </h4>
                    <p>Jessica E. Childs* ,  Samuel Morabito* ,  Sudeshna Das ,  Caterina Santelli ,  Victoria Pham</p>
                    <span>
                        Cell Reports, 2024
                    </span>
                    <div>
                        <button>ABS</button>
                        <button>HTML</button>
                        <button>PDF</button>
                    </div>
                </div>
            </PublicationsCard>
            <PublicationsCard inverted={true}>
                <div>
                    <Image src={img} alt='Publication Image'></Image>
                </div>
                <div>       
                    <h4>
                        Relapse to cocaine seeking is regulated
                    </h4>
                    <p>Caterina Santelli ,  Victoria Pham</p>
                    <span>
                        Cell Reports, 2024
                    </span>
                    <div>
                        <button>ABS</button>
                        <button>HTML</button>
                        <button>PDF</button>
                    </div>
                </div>
            </PublicationsCard>
            <PublicationsCard>
                <div>
                    <Image src={img} alt='Publication Image'></Image>
                </div>
                <div>       
                    <h4>
                        {/* Relapse to cocaine seeking is regulated by medial habenula NR4A2/NURR1 in mice */}
                        Relapse to cocaine seeking is regulated
                        </h4>
                    <p>Jessica E. Childs* ,  Samuel Morabito* ,  Sudeshna Das ,  Caterina Santelli ,  Victoria Pham</p>
                    <span>
                        Cell Reports, 2024
                    </span>
                    <div>
                        <button>ABS</button>
                        <button>HTML</button>
                        <button>PDF</button>
                    </div>
                </div>
            </PublicationsCard>
        </div>
    </section>
  )
}

export default Publications