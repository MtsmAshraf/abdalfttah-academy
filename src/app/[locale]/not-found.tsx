"use client"
import React from 'react'
import styles from "./not-found.module.css"
import Image from 'next/image'
import notFound from "../../../public/images/not-found.png"
import { Link } from '@/i18n/routing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
const NotFound = () => {
    const router = useRouter()
  return (
    <div className={styles.notFound}>
        <div className={styles.img}>
            <Image src={notFound} alt='404 not Found image'></Image>
        </div>
        <h2>Oops!, Page Not Found</h2>
        <div className={styles.btns}>
            <button onClick={() => {router.back()}}>
                <span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                </span> 
                <h4>
                    Go Back
                </h4>
            </button>
            <span>
                <Link href={"/"} replace>
                    <span>
                            <FontAwesomeIcon icon={faHome} />
                    </span> 
                    <h4>
                        Home
                    </h4>
                </Link>
            </span>
        </div>
    </div>
  )
}

export default NotFound