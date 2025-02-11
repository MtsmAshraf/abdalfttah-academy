import React from 'react'
import styles from "./enroll.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBullseye, faDollarSign, faEnvelope, faEye, faMoneyBillTransfer, faQuestion, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import instaPay from "../../../public/images/instapay.png"
import vodafoneCash from "../../../public/images/vodafone-cash.png"


import Image from 'next/image'
const Enroll = ({
    courseName,
    courseLink,
    enrollType
} : {
    courseName: string,
    courseLink?: string,
    enrollType: string,
}) => {

    async function handlePaymentSuccess(userEmail: string, userName: string, course: string) {
        await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, name: userName , courseName: course }),
        });
    }



    if(enrollType === "free"){
        return (
            <div id='enroll' className={styles.enroll}>
                <h2>How to enroll?</h2>
                <p>Enrolling in this course is simple and <span>free!</span> All lessons are available on YouTube, allowing you to learn at your own pace.</p>
                <ul className={styles.steps}>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faEye} />
                        </span>
                        <p>
                            Watch the full course on <a href={courseLink} target='_blank'>Youtube</a>
                        </p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faDollarSign} />
                        </span>
                        <p>
                            <span>No registration required</span> – just click and start learning!
                        </p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faYoutube} />
                        </span>
                        <p>
                            <a href="https://www.youtube.com/@MoAbdalfttah">Subscribe to the channel</a> to stay updated on new lessons!
                        </p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faRocket} />
                        </span>
                        <p>
                            Start your journey in molecular biology today!
                        </p>
                    </li>
                </ul>
                <div>
                    <a className={styles.youtube} href={courseLink} target='_blank'>
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>
                            Start Learning!
                        </span>
                    </a>
                </div>
            </div>
        )
    }else if(enrollType === "paid"){
        return (
            <div id='enroll' className={`${styles.enroll} ${styles.paid}`}>
                <h2>How to enroll?</h2>
                <iframe src={`
                    https://accept.paymob.com/api/acceptance/iframes/899396?payment_token=${"ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRBeU1qZ3lPU3dpYm1GdFpTSTZJbWx1YVhScFlXd2lmUS5nTktfNTY2YWJOM0RGX1lueFZ2UlhwSktqbWJBMGZsSkdhcHQ5TmNESnA1Uks2cHBsWU04bEgxamN4ZGtJVzBWWVNxelJGNzFISHJUN25NM0hkOVUtUQ=="}
                `}></iframe>
                <ul>
                    <li>
                        <button onClick={() => {handlePaymentSuccess(
                            "mosda@gmail.com",
                            "moatasim",
                            courseName
                        )}}>
                            <span>
                                <Image loading='lazy' width={2500} height={2500} src={vodafoneCash} alt='Vodafone Cash Logo'></Image>
                            </span>
                            <h4>
                                Vodafone Cash
                            </h4>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>
                                <Image loading='lazy' width={2500} height={2500} src={instaPay} alt='InstaPay Logo'></Image>
                            </span>
                            <h4>
                                InstaPay
                            </h4>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>
                                <FontAwesomeIcon icon={faMoneyBillTransfer}  />
                            </span>
                            <h4>
                                Bank Transfer
                            </h4>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }else if(enrollType === "upon request"){
        return (
            <div id='enroll' className={styles.enroll}>
                <h2>How to request access?</h2>
                    <p>Send an <span>email</span> or a <span>message</span> explaining:</p>
                    <ul className={styles.steps}>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faQuestion} />
                            </span>
                            <p>
                                Why you need this course.
                            </p>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faBookOpen} />
                            </span>
                            <p>
                                What research or work you are currently doing.
                            </p>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faBullseye} />
                            </span>
                            <p>
                                How this course will help you achieve your goals.
                            </p>
                        </li>
                    </ul>
                    <div>
                        <a className={styles.email} href={`mailto:mohamed.biotech98@gmail.com?subject=${courseName} Course Enroll Request&body=Name%3A%0A%0A-%20I%20need%20this%20course%20to%3A%0A-%20I%20am%20currently%20working%20on%3A%0A-%20This%20course%20will%20help%20me%20achieve%3A`} target='_blank'>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <h4>
                                Email
                            </h4>
                        </a>
                        <a className={styles.whatsapp} href="https://wa.me/123123123123" target='_blank'>
                            <span>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </span>
                            <h4>
                            Whatsapp
                            </h4>
                        </a>
                    </div>
            </div>
        )
    }
}

export default Enroll