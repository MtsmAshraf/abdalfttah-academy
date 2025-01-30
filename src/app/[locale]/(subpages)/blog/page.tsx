"use client"
import Loader from '@/components/Loader/Loader';
import React from 'react'
import { useSelector } from 'react-redux';

const Blog = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <div id={theme === "light" ? "light" : ""} >
        <Loader></Loader>
    </div>
  )
}

export default Blog