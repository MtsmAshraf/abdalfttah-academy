"use client"
import React, { useEffect, useState } from 'react'
import "./loader.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
const Loader = () => {
    const [loaded, setLoaded] = useState(false)
    const [stopLoading, setStopLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 500);
        setTimeout(() => {
            setStopLoading(true)
        }, 2000);
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