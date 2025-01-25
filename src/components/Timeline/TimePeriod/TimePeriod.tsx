"use client"
import React, { useEffect, useRef, useState } from 'react'
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

    const period: any = useRef(null)
    const [periodScrolled, setPeriodScrolled] = useState(false)
    
        function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    
    const scrollPeriodiSection = () => {
        if(period.current){
            let headingOffsetTop = getOffsetTopRelativeToWindow(period.current)
            if(headingOffsetTop <= (window.scrollY + 500)){
                setPeriodScrolled(true)
            }
        }
    }

    useEffect(() => {
        let headingOffsetTop = getOffsetTopRelativeToWindow(period.current)
        if(headingOffsetTop <= (window.scrollY + 500)){
            setPeriodScrolled(true)
        }
        window.addEventListener("scroll", scrollPeriodiSection)
    },[periodScrolled])

    const classNames = [
        inverted ? styles.inverted : null,
        periodScrolled ? styles.scrolled : null,
        styles.timePeriod
    ]

    return (
        <div ref={period} className={classNames.join(" ")}>
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