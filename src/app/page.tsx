import Card from "@/components/Card";
import CustomCarousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
   <main>
         <CustomCarousel/>
         <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-1 sm:gap-1 gap-6 justify-items-center w-full md:my-14 sm:my-14 my-7">
          <Card src={"/images/icon/destination.png"} title={"TRIP"} subtitle={"trip to nature with strangers"}/>
          <Card src={"/images/icon/puzzle.png"} title={"EDUCATION"} subtitle={"education about the natural environment"}/>
          <Card src={"/images/icon/marketing.png"} title={"CAMPAIGN"} subtitle={"campaign to protect nature"}/>
         </div>
   </main>
  );
}
