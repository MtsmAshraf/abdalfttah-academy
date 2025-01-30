"use client"
import { toggleShowSideNav } from '@/store/showNavSlice';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const OpenSideNav = () => {
    const showSideNav = useSelector((state: any) => state.showSideNav.showSideNav);
    const dispatch = useDispatch();
  return (
    <button 
        onClick={() => dispatch(toggleShowSideNav())}>
        <span>
            <FontAwesomeIcon icon={faBars} />
        </span>
    </button>
  )
}

export default OpenSideNav