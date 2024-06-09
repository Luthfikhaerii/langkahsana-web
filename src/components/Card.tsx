import Image from "next/image"
import Link from "next/link"

export default function Card({src,title}:{src : String,title: String}){
    return(
        <div>
            <Image src={""} width={20} height={20} alt={""}/>
            <p>{title}</p>
            <Link href={"#"}>
            <div>
                <p>Selengkapnya</p>
            </div>
            </Link>
        </div>
    )
}