import Card from "@/components/Card";
import CustomCarousel from "@/components/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* CAROUSEL */}
      <CustomCarousel />
      {/* LAYANAN */}
      <h2 className="text-center md:text-3xl sm:text-2xl text-xl font-bold text-coklat-2tua md:my-10 sm:my-10 my-5">WE ARE HERE FOR</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-1 sm:gap-1 gap-6 justify-items-center w-full md:mt-16 sm:mt-16 mt-5 md:mb-14 sm:mb-14 mb-10">
        <Card src={"/images/icon/destination.png"} title={"TRIP"} subtitle={"explore nature with strangers"} />
        <Card src={"/images/icon/puzzle.png"} title={"EDUCATION"} subtitle={"education about the natural environment"} />
        <Card src={"/images/icon/marketing.png"} title={"CAMPAIGN"} subtitle={"care with the natural environment"} />
      </div>
      {/* ABOUT */}

      <div className="flex md:flex-nowrap sm:flex-nowrap flex-wrap items-start w-full">
        <div className="h-full w-full md:bg-transparent sm:bg-transparent bg-coklat-muda">
        <Image src={"/images/about_home.webp"} width={600} height={500} alt="foto" className=" polygon-md md:inline-block sm:inline-block hidden w-[100%] h-[300px]"/>
        <Image src={"/images/about_home.webp"} width={600} height={500} alt="foto" className=" polygon-xs md:hidden sm:hidden inline-block w-[100%] h-[300px]"/>
        </div>
        <div className="w-[150%] h-full">
          <div className=" md:p-10 sm:p-8 p-8 bg-coklat-muda md:h-[230px] sm:h-[230px] h-full">
            <h2 className="md:text-4xl sm:text-3xl text-2xl md:text-left sm:text-left text-center font-bold mb-5 text-coklat-tua">KITA LANGKAHSANA</h2>
            <p className="text-coklat-tua md:text-sm sm:text-sm text-sm md:text-left sm:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab rem sit nesciunt consequatur vel labore optio harum error eaque magni nobis libero modi nihil, iure totam doloribus debitis reprehenderit incidunt maxime</p>
          </div>
          <div className="w-full h-20 flex justify-center items-center">
            <Link href={"#"}>
              <div>
                <p className="md:text-2xl sm:text-xl text-lg font-semibold text-coklat-2tua">READ MORE</p>
              </div>
              <div className="md:h-1 sm:h-[2px] h-[2px] w-full bg-coklat-2tua rounded-lg"></div>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
