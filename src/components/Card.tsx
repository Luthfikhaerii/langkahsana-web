import Image from "next/image"
import Link from "next/link"
import { Chivo_Mono } from 'next/font/google'
const inter = Chivo_Mono({ subsets: ['latin'], weight: "700" });

export default function Card({title,subtitle,src}:{title:String,subtitle:String,src:String}){
    return(
        <div className="md:w-8/12 sm:w-11/12 w-9/12 md:h-[300px] h-10/12 justify-items-center text-center">
            <Image src={`${src}`} width={80} height={80} alt={"icon"} className="m-auto"/>
            <div className="w-2/12 h-[3px] bg-coklat-tua rounded-lg m-auto my-5"></div>
            <p className="text-2xl font-bold text-coklat-tua">{title}</p>
            <Link href={"#"}>
            <div className="text-center text-coklat-tua md:text-lg sm:text-base text-sm">
                <p>{subtitle}</p>
            </div>
            </Link>
        </div>
    )
}