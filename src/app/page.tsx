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
        <Card src={"/images/icon/marketing.png"} title={"CAMPAIGN"} subtitle={"campaign to protect nature"} />
      </div>
      {/* ABOUT */}

      <div className="flex md:flex-nowrap sm:flex-nowrap flex-wrap h-full content-start items-start">
        <div className="h-full w-full">
        <Image src={"/images/about_home.webp"} width={600} height={600} alt="foto" className=" polygon-md "/>
        </div>
        <div>
          <div className="bg-coklat-muda md:h-[275px] sm:h-[275px] h-full md:p-14 sm:p-10 p-8">
            <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-5 text-coklat-tua">KITA LANGKAHSANA</h2>
            <p className="text-coklat-tua md:text-xl sm:text-xl text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab rem sit nesciunt consequatur vel labore optio harum error eaque magni nobis libero modi nihil, iure totam doloribus debitis reprehenderit incidunt maxime</p>
          </div>
          <div className="w-full h-20 flex justify-center items-center">
            <Link href={"#"}>
              <div>
                <p className="text-2xl font-semibold text-coklat-2tua">READ MORE</p>
              </div>
              <div className="h-1 w-full bg-coklat-2tua rounded-lg"></div>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
