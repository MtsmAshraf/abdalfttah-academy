"use client"
import React, { useEffect } from 'react'
import styles from "./time-period.module.css"

const TimePeriod = ({
    inverted,
    span,
    h3,
    h4,
    p,
    index,
    hidden
} : {
    inverted: boolean,
    span: string,
    h3: string,
    h4?: string,
    p: string,
    index: number,
    hidden?: boolean
}) => {
    useEffect(() => {
        const periods = document.querySelectorAll("div:has( > div:last-child > div > h3 + p)")
        periods.forEach((period: HTMLElement | any) => {
            let fullOffsetTop = period.offsetTop + period.parentElement?.parentElement?.offsetTop + period.parentElement?.parentElement?.parentElement?.parentElement?.offsetTop
            window.addEventListener("scroll", () => {
            if(window.scrollY >= fullOffsetTop - 900){
                period.style.cssText = `
                    opacity: 1;
                    transform: translateY(0);
                    --period-passed-bg-color: #415ede;
                    --period-passed-border-color: #415ede;
                `
                period.querySelectorAll("div").forEach((div: HTMLElement | any) => {
                    div.style.cssText = `
                        opacity: 1 !important;
                        transform: rotateZ(0deg) translateY(0) !important;
                    `
                })
            }
            })
        })
    },[])
  return (
    <div style={{ opacity: hidden ? "0" : "" }} className={inverted ? styles.inverted + " " + styles.timePeriod : styles.timePeriod}>
        <div className={styles.date}>
            <span>
                {span}
            </span>
        </div>
        <div className={styles.details}>
            <div>
                <h3>{h3}</h3>
                <p>{p}</p>
                {
                    h4 && <h4>{h4}</h4>
                }
            </div>
        </div>
    </div>
  )
}

export default TimePeriod