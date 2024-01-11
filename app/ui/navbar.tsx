'use client'

import React from 'react'
import { TbChessKnightFilled } from 'react-icons/tb'

export const NavBar = () => {
    return (
        <nav className='bg-amber-600 text-teal-100 font-bold pt-3 pb-3 flex items-center justify-around pl-2 pr-2'>
            <div className='flex items-center text-5xl w-1/5'>
                <TbChessKnightFilled />
                <div>KPC </div>
            </div>
            <ul className='flex justify-around w-2/5 text-xl'>

                <li>
                    About
                </li>
                <li>
                    Schedule
                </li>
                <li>
                    Learn
                </li>
            </ul>
            <div className=' flex justify-around w-1/5 text-xl'>
                <div>
                    Login
                </div>
                <div>Sign Up
                </div>
            </div>
        </nav>

    )
}
