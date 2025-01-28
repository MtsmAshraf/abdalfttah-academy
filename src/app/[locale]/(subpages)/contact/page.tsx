"use client"
import React from 'react'
import { useSelector } from 'react-redux';

const Contact = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <div id={theme === "light" ? "light" : ""} >contact</div>
  )
}

export default Contact