import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="grid grid-cols-2 h-16 w-full bg-red-400">
            <div className="flex items-center ml-10">
                <Image src={"/images/logo.jpg"} alt={"logo"} width={50} height={50}/>
                <Link href={"/"}><p className="text-2xl m-auto">Langkahsana.id</p></Link>
            </div>
            <div className="flex justify-end bg-white">
                <div className="grid grid-cols-5 justify-items-center items-center w-9/12 mr-10">
                    <Link href={"/"}><p>Home</p></Link>
                    <Link href={"/"}><p>About</p></Link>
                    <Link href={"/"}><p>Trip</p></Link>
                    <Link href={"/"}><p>Archive</p></Link>
                    <Link href={"/"}><p>Contact</p></Link>
                </div>
            </div>
        </div>
    )
} 