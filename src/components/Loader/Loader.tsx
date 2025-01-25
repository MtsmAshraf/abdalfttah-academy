"use client"
import React, { useEffect, useState } from 'react'
import "./loader.css"
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
            {/* <div className='push-pop loader'>
                <div></div>
                <div></div>
            </div> */}
            <div className={stopLoading ? "loading" + " " + "stopped" : "loading"}></div>
            {/* <div className='push-out loader'>
                <div></div>
                <div></div>
            </div> */}
        </div>
    )
}

export default Loader