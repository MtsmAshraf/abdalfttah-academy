"use client"
import React, { useEffect, useState } from 'react'
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
    enrollType,
    lo,
    showAr
} : {
    courseName: string,
    courseLink?: string,
    enrollType: string,
    lo: string,
    showAr?: boolean
}) => {

    async function handlePaymentSuccess(userEmail: string, userName: string, course: string) {
        await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, name: userName , courseName: course }),
        });
    }
    type Method = {
        logo: string,
        name_ar: string,
        name_en: string,
        paymentId: number,
        redirect: string,
    }
    const [methods, setMethods] = useState<Method[]>([])
    const [payment, setPayment] = useState<any>()

    async function getMethods() {
        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        myHeaders.append("Authorization", "Bearer 2690f31989d675d9f2b250d0abbdc935967e93230df661ce88");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };


        await fetch("https://staging.fawaterk.com/api/v2/getPaymentmethods", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 2690f31989d675d9f2b250d0abbdc935967e93230df661ce88"
            },
            redirect: 'follow'
        })
        .then(response => (response.json()))
        .then(result => {
            console.log(result.data)
            setMethods(result.data)
            excutePayment(result.data[0].paymentId)
            // console.log("result.data[0].paymentId", result.data[0].paymentId)
        })
        .catch(error => console.log('error', error));

    }


    async function excutePayment(id: number) {
        var axios = require('axios');
        var data = JSON.stringify({
        "payment_method_id": id,
        "cartTotal": "5000",
        "currency": "EGP",
        "customer": {
            "first_name": "test",
            "last_name": "test",
            "email": "test@test.test",
            "phone": "01000000000",
            "address": "test address"
        },
        "redirectionUrls": {
            "successUrl": "https://dev.fawaterk.com/success",
            "failUrl": "https://dev.fawaterk.com/fail",
            "pendingUrl": "https://dev.fawaterk.com/pending"
        },
        "cartItems": [
            {
            "name": courseName,
            "price": "5000",
            "quantity": "1"
            }
        ]
        });

        var config = {
        method: 'post',
        url: 'https://staging.fawaterk.com/api/v2/invoiceInitPay',
        headers: { 
            'Authorization': 'Bearer 2690f31989d675d9f2b250d0abbdc935967e93230df661ce88', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response: any) {
            console.log(response.data.data);
            setPayment(response.data.data)
        })
        .catch(function (error: Error) {
            console.log(error);
        });
    }

    useEffect(() => {
        getMethods()
        console.log(methods)
    },[])

    const classNames = [
        styles.enroll,
        lo === "ar" && showAr ? styles.ar : ""
    ]

    if(enrollType === "free"){
        return (
            <div id='enroll' className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
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
            <div id='enroll' className={`${classNames.length > 1 ? classNames.join(" ") : classNames[0]} ${styles.paid}`}>
                <h2>How to enroll?</h2>
                {
                    methods.map((method: any,index: number) => {
                        return(
                            <div key={index}>
                                <div style={{ height:"100px"}}>
                                    {
                                        index === 0 && 
                                        <a href={payment?.payment_data.redirectTo}>
                                            <Image style={{ objectFit:'contain', height: "100%" }} src={method.logo} alt='logo' width={2000} height={2000}></Image>
                                        </a>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
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
            <div id='enroll' className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
                {
                    lo === "ar" && showAr ? 
                    <>
                        <h2>لطلب الدورة</h2> 
                        <p>أرسل <span>بريدًا إلكترونيًا</span> أو <span>رسالة</span> توضح فيها:</p>
                        <ul className={styles.steps}>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faQuestion} />
                                </span>
                                <p>
                                    لماذا تحتاج إلى هذه الدورة؟
                                </p>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </span>
                                <p>
                                    ما هو البحث أو العمل الذي تقوم به حاليًا؟
                                </p>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faBullseye} />
                                </span>
                                <p>
                                    كيف ستساعدك هذه الدورة في تحقيق أهدافك؟
                                </p>
                            </li>
                        </ul>
                        <p>
                            <span>الخطوة التالية: </span>
                            بمجرد استلام طلبك <span> سنقوم بجدولة اجتماع لوضع خطة تعليمية مخصصة </span>تناسب احتياجاتك البحثية والمهنية
                        </p>
                        <div>
                            <a className={styles.email} href={`mailto:mohamed.biotech98@gmail.com?subject=${courseName} Course Enroll Request&body=Name%3A%0A%0A-%20I%20need%20this%20course%20to%3A%0A-%20I%20am%20currently%20working%20on%3A%0A-%20This%20course%20will%20help%20me%20achieve%3A`} target='_blank'>
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <h4>
                                    بريد إلكتروني
                                </h4>
                            </a>
                            <a className={styles.whatsapp} href="https://wa.me/123123123123" target='_blank'>
                                <span>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </span>
                                <h4>
                                    واتساب
                                </h4>
                            </a>
                        </div>
                    </>
                    :
                    <>
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
                        <p>
                            <span>Next Step: </span>
                            Once we receive your request <span> we will schedule a meeting to create a personalized learning plan </span>that fits your research and career needs.
                        </p>
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
                    </>
                }
            </div>
        )
    }
}

export default Enroll