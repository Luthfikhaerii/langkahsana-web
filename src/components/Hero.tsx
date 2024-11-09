import Image from "next/image"

export default function Hero({src}:any){
    return(
        <div className="w-full">
         <Image src={src} alt={"foto"} width={5000} height={100} className="h-[500px] w-full"/>
        </div>
    )
}