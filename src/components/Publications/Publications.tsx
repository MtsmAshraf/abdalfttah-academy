import React from 'react'
import styles from "./publications.module.css"
import MainHeading from '../MainHeading/MainHeading'
import PublicationsCard from './PublicationsCard/PublicationsCard'
import Image from 'next/image'

import allPublications, { Publication } from './allPublications'


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
            {
                allPublications.map((publication: Publication, index: number) => {
                    return(
                        <PublicationsCard key={publication.id} inverted={index % 2 === 0 ? false : true}>
                            <div>
                                <Image src={publication.src} alt={`${publication.title} Publication Image`}></Image>
                            </div>
                            <div>       
                                <h4>
                                    {publication.title}
                                </h4>
                                <p>
                                    {publication.authors.join(", ")}
                                </p>
                                <span>
                                    {publication.date}
                                </span>
                                <div>
                                    <button>ABS</button>
                                    <button>HTML</button>
                                    <button>PDF</button>
                                </div>
                            </div>
                        </PublicationsCard>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Publications