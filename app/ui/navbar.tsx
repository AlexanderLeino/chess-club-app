'use client'

import Link from 'next/link'
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
            <li><Link href='/'>About</Link></li>
            <li>
                <Link href={'/learn'}>
                    Learn
                </Link>
            </li>
        </ul>
        <div className=' flex justify-around w-1/5 text-xl'>
            <Link href={'/login'}>Login</Link>
            <Link href={'/signup'}>Sign Up</Link>
        </div>
    </nav>
    )
}
