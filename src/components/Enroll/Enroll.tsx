"use client"
import React, { useEffect, useState } from 'react'
import styles from "./enroll.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBullseye, faDollarSign, faEnvelope, faEye, faMoneyBillTransfer, faPhone, faQuestion, faRocket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import instaPay from "../../../public/images/instapay.png"
import vodafoneCash from "../../../public/images/vodafone-cash.png"
import Select from "react-select";

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

async function handlePaymentSuccess(userEmail: string, userName: string, phone: string, course: string) {
    await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, name: userName, phone: phone , courseName: course }),
    });
    console.log("formData",formData)
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

const countryCodes = [
    { value: "+1", label: "🇺🇸 +1 (USA)" },
    { value: "+44", label: "🇬🇧 +44 (UK)" },
    { value: "+20", label: "🇪🇬 +20 (Egypt)" },
    { value: "+91", label: "🇮🇳 +91 (India)" },
    { value: "+33", label: "🇫🇷 +33 (France)" },
    { value: "+49", label: "🇩🇪 +49 (Germany)" },
    { value: "+971", label: "🇦🇪 +971 (UAE)" },
    { value: "+61", label: "🇦🇺 +61 (Australia)" },
    { value: "+7", label: "🇷🇺 +7 (Russia)" },
    { value: "+81", label: "🇯🇵 +81 (Japan)" },
    { value: "+86", label: "🇨🇳 +86 (China)" },
    { value: "+34", label: "🇪🇸 +34 (Spain)" },
    { value: "+39", label: "🇮🇹 +39 (Italy)" },
    { value: "+55", label: "🇧🇷 +55 (Brazil)" },
    { value: "+52", label: "🇲🇽 +52 (Mexico)" },
    { value: "+27", label: "🇿🇦 +27 (South Africa)" },
    { value: "+62", label: "🇮🇩 +62 (Indonesia)" },
    { value: "+82", label: "🇰🇷 +82 (South Korea)" },
    { value: "+90", label: "🇹🇷 +90 (Turkey)" },
    { value: "+46", label: "🇸🇪 +46 (Sweden)" },
    { value: "+47", label: "🇳🇴 +47 (Norway)" },
    { value: "+48", label: "🇵🇱 +48 (Poland)" },
    { value: "+31", label: "🇳🇱 +31 (Netherlands)" },
    { value: "+32", label: "🇧🇪 +32 (Belgium)" },
    { value: "+41", label: "🇨🇭 +41 (Switzerland)" },
    { value: "+43", label: "🇦🇹 +43 (Austria)" },
    { value: "+30", label: "🇬🇷 +30 (Greece)" },
    { value: "+351", label: "🇵🇹 +351 (Portugal)" },
    { value: "+353", label: "🇮🇪 +353 (Ireland)" },
    { value: "+380", label: "🇺🇦 +380 (Ukraine)" },
    { value: "+375", label: "🇧🇾 +375 (Belarus)" },
    { value: "+420", label: "🇨🇿 +420 (Czech Republic)" },
    { value: "+421", label: "🇸🇰 +421 (Slovakia)" },
    { value: "+36", label: "🇭🇺 +36 (Hungary)" },
    { value: "+40", label: "🇷🇴 +40 (Romania)" },
    { value: "+386", label: "🇸🇮 +386 (Slovenia)" },
    { value: "+372", label: "🇪🇪 +372 (Estonia)" },
    { value: "+371", label: "🇱🇻 +371 (Latvia)" },
    { value: "+370", label: "🇱🇹 +370 (Lithuania)" },
    { value: "+56", label: "🇨🇱 +56 (Chile)" },
    { value: "+57", label: "🇨🇴 +57 (Colombia)" },
    { value: "+58", label: "🇻🇪 +58 (Venezuela)" },
    { value: "+63", label: "🇵🇭 +63 (Philippines)" },
    { value: "+65", label: "🇸🇬 +65 (Singapore)" },
    { value: "+66", label: "🇹🇭 +66 (Thailand)" },
    { value: "+92", label: "🇵🇰 +92 (Pakistan)" },
    { value: "+98", label: "🇮🇷 +98 (Iran)" },
    { value: "+965", label: "🇰🇼 +965 (Kuwait)" },
    { value: "+966", label: "🇸🇦 +966 (Saudi Arabia)" },
    { value: "+972", label: "🇮🇱 +972 (Israel)" },
    { value: "+973", label: "🇧🇭 +973 (Bahrain)" },
    { value: "+974", label: "🇶🇦 +974 (Qatar)" },
    { value: "+975", label: "🇧🇹 +975 (Bhutan)" },
    { value: "+976", label: "🇲🇳 +976 (Mongolia)" },
    { value: "+977", label: "🇳🇵 +977 (Nepal)" },
    { value: "+212", label: "🇲🇦 +212 (Morocco)" },
    { value: "+213", label: "🇩🇿 +213 (Algeria)" },
    { value: "+216", label: "🇹🇳 +216 (Tunisia)" },
    { value: "+218", label: "🇱🇾 +218 (Libya)" },
    { value: "+220", label: "🇬🇲 +220 (Gambia)" },
    { value: "+221", label: "🇸🇳 +221 (Senegal)" },
    { value: "+222", label: "🇲🇷 +222 (Mauritania)" },
    { value: "+223", label: "🇲🇱 +223 (Mali)" },
    { value: "+225", label: "🇨🇮 +225 (Ivory Coast)" },
    { value: "+226", label: "🇧🇫 +226 (Burkina Faso)" },
    { value: "+227", label: "🇳🇪 +227 (Niger)" },
    { value: "+228", label: "🇹🇬 +228 (Togo)" },
    { value: "+229", label: "🇧🇯 +229 (Benin)" },
    { value: "+230", label: "🇲🇺 +230 (Mauritius)" },
    { value: "+231", label: "🇱🇷 +231 (Liberia)" },
    { value: "+232", label: "🇸🇱 +232 (Sierra Leone)" },
    { value: "+233", label: "🇬🇭 +233 (Ghana)" },
    { value: "+234", label: "🇳🇬 +234 (Nigeria)" },
    { value: "+235", label: "🇹🇩 +235 (Chad)" },
    { value: "+236", label: "🇨🇫 +236 (Central African Republic)" },
    { value: "+237", label: "🇨🇲 +237 (Cameroon)" },
    { value: "+238", label: "🇨🇻 +238 (Cape Verde)" },
    { value: "+239", label: "🇸🇹 +239 (Sao Tome and Principe)" },
    { value: "+240", label: "🇬🇶 +240 (Equatorial Guinea)" },
    { value: "+241", label: "🇬🇦 +241 (Gabon)" },
    { value: "+242", label: "🇨🇬 +242 (Republic of the Congo)" },
    { value: "+243", label: "🇨🇩 +243 (Democratic Republic of the Congo)" },
    { value: "+244", label: "🇦🇴 +244 (Angola)" },
    { value: "+245", label: "🇬🇼 +245 (Guinea-Bissau)" },
    { value: "+246", label: "🇮🇴 +246 (British Indian Ocean Territory)" },
    { value: "+248", label: "🇸🇨 +248 (Seychelles)" },
    { value: "+249", label: "🇸🇩 +249 (Sudan)" },
    { value: "+250", label: "🇷🇼 +250 (Rwanda)" },
];
  
const customStyles = {
    control: (base: any, state: { isFocused: any }) => ({
        ...base,
        backgroundColor: "var(--bg-color)",
        borderRadius: "20px 0px 0px 20px",
        border: "none",
        outline: state.isFocused ? "2px solid var(--main-light-color)" : "1px solid var(--main-light-color)", // Blue focus border
        padding: "0px 0px 0px 10px",
        transition: "0.2s ease-in-out",
        fontSize: "14px",
        height: "100%"
    }),
    menu: (base: any) => ({
        ...base,
        backgroundColor: "var(--bg-color)",
        // backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
        minWidth: "200px"
    }),
    option: (base: any, { isFocused, isSelected }: any) => ({
        ...base,
        backgroundColor: isSelected ? "var(--main-light-color)" : isFocused ? "var(--main-light-color)" : "var(--main-color)",
        color: isSelected ? "white" : "white",
        cursor: "pointer",
    }),
    singleValue: (base: any) => ({
        ...base,
        color: "var(--text-color)",
    }),
    
};
    
    type FormData = {
        username: string,
        userEmail: string,
        phoneNumber: string,
        course: string
    }

    const [formData, setFormData] = useState<FormData>({
        username: "",
        userEmail: "",
        phoneNumber: "",
        course: courseName
    })

const [selectedCode, setSelectedCode] = useState(countryCodes[2]); // Default to Egypt
const [showNotValid, setShowNotValid] = useState<boolean>()

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
                
                <form onSubmit={(e) => {
                    e.preventDefault(); 
                    if( 
                        formData.username.length > 1 && 
                        formData.userEmail.includes("@") && 
                        formData.phoneNumber.length > 5
                    ){
                        console.log("formData","VALID")
                        handlePaymentSuccess(formData.userEmail, formData.username, formData.phoneNumber, formData.course)
                    }else{
                        console.log("formData","NOT VALID")
                    }; 
                    }}>
                    <h3>Please add your info!</h3>
                    <div>
                        <label htmlFor="name">
                            <FontAwesomeIcon icon={faUser} />
                            <span>
                                Name
                            </span>
                        </label>
                        <input onChange={(e) => {setFormData({...formData, username: e.target.value})}} type="text" name="name" id="name" required placeholder='e.g. John Doe'/>
                    </div>
                    <div>
                        <label htmlFor="email">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>
                                Email
                            </span>
                        </label>
                        <input onChange={(e) => {setFormData({...formData, userEmail: e.target.value})}} type="email" name="email" id="email" required placeholder='e.g. john@example.com'/>
                    </div>
                    <div>
                        <label htmlFor="number"> 
                            <FontAwesomeIcon icon={faPhone} />
                            <span>
                                Phone number
                            </span>
                        </label>
                        <div className={styles.phone}>
                            <Select
                                options={countryCodes}
                                value={selectedCode}
                                onChange={(e) => {setSelectedCode(
                                    {
                                        value: e?.value || "value", 
                                        label: e?.label || "label"
                                    })}}
                                styles={customStyles}
                            />
                            <input
                                onChange={(e) => {setFormData({...formData, phoneNumber: `${selectedCode.value}${e.target.value}`})}}
                                type="tel"
                                required placeholder="Enter phone number"
                            />
                        </div>
                    </div>
                </form>
                <p style={{ opacity: showNotValid ? "1" : "0" }} className={styles.notValid}>
                    Please make sure to fill ALL the the info!
                </p>
                {/* {
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
                } */}
                <ul>
                    {
                        methods.map((method: Method, index: number) => {
                            return(
                                <li key={index}>
                                    <button onClick={(e) => {
                                        e.preventDefault(); 
                                        if( 
                                            formData.username.length > 1 && 
                                            formData.userEmail.includes("@") && 
                                            formData.phoneNumber.length > 2
                                        ){
                                            console.log("formData","VALID")
                                            setShowNotValid(false)
                                            handlePaymentSuccess(formData.userEmail, formData.username, formData.phoneNumber, formData.course)
                                        }else{
                                            console.log("formData","NOT VALID")
                                            setShowNotValid(true)
                                        }; 
                                        }}
                                    >
                                        <span>
                                            <Image loading='lazy' width={2500} height={2500} src={method.logo} alt='Vodafone Cash Logo'></Image>
                                        </span>
                                        <h4>
                                            {method.name_en}
                                        </h4>
                                    </button>
                                </li>
                            )
                        })
                    }
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