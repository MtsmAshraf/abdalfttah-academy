"use client"
import Loader from '@/components/Loader/Loader';
import React from 'react'
import { useSelector } from 'react-redux';

const blog = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <div id={theme === "light" ? "light" : ""} >
        <Loader></Loader>
    </div>
  )
}

export default blog