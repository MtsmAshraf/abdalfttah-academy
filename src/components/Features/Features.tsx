"use client"
import { useEffect } from "react"
import styles from "./features.module.css"
import MainHeading from "../MainHeading/MainHeading"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const Features = ({
    lo
} : {
    lo: string
}) => {
   useEffect(() => {
        const handleOnMouseMove = (e: HTMLElement | any) => {
            const {currentTarget: target} = e;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            target.style.setProperty("--mouse-x",`${x}px`)
            target.style.setProperty("--mouse-y",`${y}px`)
            // target.style.setProperty("--mouse-x-deg",`${-1 * ((1/10) * x - 10)}deg`)
            // target.style.setProperty("--mouse-y-deg",`${1 * ((1/10) * y - 10)}deg`)
        }
        
        
        document.querySelectorAll('.card').forEach((card: HTMLElement | any) => {
            card.onmousemove = (e: HTMLElement | any) => {
                handleOnMouseMove(e);
            }
        })
   },[])

   const t = useTranslations("HomePage.Features")

  return (
    <section id="features" className={lo === "ar" ? styles.features + " " + styles.ar : styles.features}>
        <MainHeading>
            {t("heading")}
        </MainHeading>
        <div className="container">
            <div className={styles.cards}>
                <div className={styles.card + " " + "card"}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            {/* <dotlottie-player src="https://lottie.host/585452f3-aa83-46be-85a8-29db19901dd6/ObAZV9IMOg.json" background="transparent" speed="3" loop autoplay></dotlottie-player> */}
                            <DotLottieReact
                                src="https://lottie.host/687d115b-356f-42db-891c-4d10c1f88695/NalqJZNN7z.lottie"
                                loop
                                autoplay
                            />
                        </span>
                        <h4>{t("0.h4")}</h4>
                        <p>
                            {t("0.p")}
                        </p>
                    </div>
                </div> 
                <div className={styles.card + " " + "card"}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            {/* <FontAwesomeIcon icon={faGear} /> */}
                            {/* <dotlottie-player src="https://lottie.host/b5d62c1d-dd20-4c76-ac15-a96fe0fe8746/hXXuSctsMr.json" background="transparent" speed="1" loop autoplay></dotlottie-player> */}
                            <FontAwesomeIcon icon={faGear} />
                            <FontAwesomeIcon icon={faGear} />
                        </span>
                        <h4>{t("1.h4")}</h4>
                        <p>
                            {t("1.p")}
                        </p>
                    </div>
                </div> 
                <div className={styles.card + " " + "card"}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            {/* <DotLottieReact
                                src="https://lottie.host/65fab352-bcd2-4005-bbbf-580c243cc6d2/xozCz19sZI.lottie"
                                loop
                                autoplay
                            /> */}
                            <iframe src="https://lottie.host/embed/65fab352-bcd2-4005-bbbf-580c243cc6d2/xozCz19sZI.lottie"></iframe>
                            {/* <dotlottie-player src="https://lottie.host/6b5e72a3-6732-424b-ace2-4ce14411941e/MiEgcSw21O.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player> */}
                        </span>
                        <h4>{t("2.h4")}</h4>
                        <p>
                            {t("2.p")}
                        </p>
                    </div>
                </div> 
                <div className={styles.card + " " + "card"}>
                    <div className={styles.cardBorder}></div>
                    <div className={styles.cardContent}>
                        <span>
                            {/* <FontAwesomeIcon icon={faGear} /> */}
                            <DotLottieReact
                                src="https://lottie.host/8365c178-3fb7-45fb-9ed5-fd468cb87646/H5kL81hPDC.lottie"
                                loop
                                autoplay
                            />
                            {/* <dotlottie-player src="https://lottie.host/764f198f-ccf1-41e1-9a58-a0710aacd47d/OHVHZmeTqY.json" background="transparent" speed="1" loop autoplay></dotlottie-player> */}
                        </span>
                        <h4>{t("3.h4")}</h4>
                        <p>
                            {t("3.p")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features