import Link from "next/link"
import Image from "next/image"
import { Chivo_Mono } from 'next/font/google'
const inter = Chivo_Mono({ subsets: ['latin'], weight: "400" });

export default function Navbar() {

    return (
        <div className={inter.className}>

            <div className="grid grid-cols-2 h-16 w-full bg-[#CA9271]">
                <div className="flex items-center md:ml-14 sm:ml-14 ml-5">
                    <Image src={"/images/logo.jpeg"} alt={"logo"} width={50} height={50} />
                    <Link href={"/"}><p className="md:text-xl sm:text-xl text-base font-bold m-auto text-white">Langkahsana.id</p></Link>
                </div>
                <div className="flex justify-end items-center">
                    <div className="md:hidden sm:hidden xl:hidden block">
                            <div className="mr-5">
                                <div className="w-6 h-1 bg-white mb-1 rounded-sm"></div>
                                <div className="w-6 h-1 bg-white mb-1 rounded-sm"></div>
                                <div className="w-6 h-1 bg-white mb-1 rounded-sm"></div>
                            </div>
                    </div>
                    
                    <div className="md:inline-block sm:block xl:block hidden w-full justify-end ">
                        <div className="flex justify-end">
                        <div className="grid md:grid-cols-5 md:justify-items-center items-center w-8/12 mr-14">
                            <Link href={"/"}><p className="text-white text-base">Home</p></Link>
                            <Link href={"/"}><p className="text-white text-base">About</p></Link>
                            <Link href={"/"}><p className="text-white text-base">Trip</p></Link>
                            <Link href={"/"}><p className="text-white text-base">Archive</p></Link>
                            <Link href={"/"}><p className="text-white text-base">Contact</p></Link>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
} 