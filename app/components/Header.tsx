import React from 'react'
import Image from 'next/image'
import logo from '../../public/linkedin.png'

export default function Header() {
    return (
        <main className='flex items-center w-full p-8 md:p-4 shadow-sm h-[10vh]'>
            <Image src={logo} alt="LinkedIn" width={100} height={100}></Image>
        </main>
    )
}
