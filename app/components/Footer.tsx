import { FooterLinks } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import logo from '../../public/linkedin.png'

export default function Footer() {

    return (
        <footer className="flex flex-col md:flex-row p-4 w-fulls h-[10vh] justify-start md:justify-between md:items-center">
            <Image src={logo} width={100} height={40} alt="Logo" />
            <div className="flex flex-col-reverse md:flex-row gap-4 items-start md:items-center">
                <span> &copy; Copyright 2023</span>
                <nav className="flex gap-4 flex-col md:flex-row">
                    {
                        FooterLinks.map(link => {
                            return (
                                <Link href={link.link}><p className="hover:translate-y-1 duration-200 text-[14px]">{link.title}</p></Link >
                            )
                        })
                    }
                </nav>
            </div>
        </footer >
    )
}
