"use client"
import React, { useEffect, useState } from 'react'
import "./loader.css"
const Loader = ({
    delay
} : {
    delay?: number
}) => {
    const [loaded, setLoaded] = useState(false)
    const [stopLoading, setStopLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 500 + (delay || 0));
        setTimeout(() => {
            setStopLoading(true)
        }, 2000 + (delay || 0));
    },[])
    return (
        <div className={loaded ? "loader" + " " + "loaded" : "loader"}>
            <div className={stopLoading ? "dna" + " " + "stopped" : "dna"}>
                <iframe src="https://lottie.host/embed/8b3e7d37-b2c8-44bd-aaeb-91fb1c07ee17/ajY8EOUq4v.lottie"></iframe>
            </div>
        </div>
    )
}

export default Loader