"use client"
import Link from "next/link"
import Image from "next/image"
import { Chivo_Mono } from 'next/font/google'
import { useEffect, useState } from "react";
const inter = Chivo_Mono({ subsets: ['latin'], weight: "700" });

export default function Navbar() {
    const [on, setOn] = useState(false)
    const [current, setCurrent] = useState(0)
    const [before, setBefore] = useState(0)
    const [direction, setDirection] = useState('up')

    useEffect(() => {
        let lastscroll = window.scrollY;
        const listen = () => {
            let currentscroll = window.scrollY;
            if (currentscroll < lastscroll) {
                setDirection('up')
            }else{
                setDirection('down')
            }
            lastscroll = currentscroll
        }
        window.addEventListener('scroll', listen)

        return () => { window.removeEventListener('scroll', listen) }
    }, [])

    return (
        <div className={inter.className}>
            <div className={`${direction=='up'?'top-0 ease-in-out duration-700':on?'top-0':'-top-16 ease-in-out duration-700'} fixed z-40`}>
                <div className="grid grid-cols-2 h-16 w-screen bg-[#CA9271]">
                    <div className="flex items-center md:ml-14 sm:ml-14 ml-4">
                        <Image src={"/images/logo.jpeg"} alt={"logo"} width={50} height={50} />
                        <Link href={"/"}><p className="md:text-xl sm:text-xl text-base font-bold m-auto text-white">Langkahsana</p></Link>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="md:hidden sm:hidden xl:hidden block" onClick={(e) => setOn(!on)}>
                            <div className="mr-5">
                                <div className="w-6 h-1 bg-white mb-1 rounded-sm"></div>
                                <div className="w-6 h-1 bg-white mb-1 rounded-sm"></div>
                                <div className="w-6 h-1 bg-white mb-1 rounded-sm"></div>
                            </div>
                        </div>
                        <div className="md:inline-block sm:block xl:block hidden w-full justify-end ">
                            <div className="flex justify-end">
                                <div className="grid md:grid-cols-4 sm:grid-cols-4 md:gap-5 md:justify-items-center items-center md:w-8/12 sm:w-10/12 w-8/12 mr-14">
                                    <Link href={"/"}><p className="text-white  md:text-base  sm:text-sm text-base px-7 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:text-gray-400">Home</p></Link>
                                    <Link href={"/"}><p className="text-white md:text-base  sm:text-sm text-base  px-7 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:text-gray-400">Journal</p></Link>
                                    <Link href={"/"}><p className="text-white md:text-base  sm:text-sm text-base  px-7 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:text-gray-400">About</p></Link>
                                    <Link href={"/"}><p className="text-white md:text-base  sm:text-sm text-base  px-7 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:text-gray-400">Contact</p></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={` md:hidden sm:hidden xl:hidden fixed z-30 ${on ? "top-[60px] fadein" : "ease-in top-[-200px] duration-700"} w-screen  bg-[#CA9271]`}>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 justify-items-center items-center">
                        <Link href={"/"}><p className="border-b-[1px] hover:text-gray-400 py-2 w-screen text-center text-white text-base [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Home</p></Link>
                        <Link href={"/"}><p className="border-b-[1px] hover:text-gray-400 py-2 w-screen text-center text-white text-base [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Journal</p></Link>
                        <Link href={"/"}><p className="border-b-[1px] hover:text-gray-400 py-2 w-screen text-center text-white text-base [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">About</p></Link>
                        <Link href={"/"}><p className=" hover:text-gray-400 py-2 w-screen text-center text-white text-base [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Contact</p></Link>
                    </div>
                </div>

            </div>
        </div>
    )
} 