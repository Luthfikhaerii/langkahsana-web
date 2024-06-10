"use client";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Chivo_Mono } from 'next/font/google'
const inter = Chivo_Mono({ subsets: ['latin'], weight: "700" });

export function CustomFooter() {
    return (
        <div className={inter.className}>
            <Footer container className="bg-[#CA9271]">
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className="text-white">
                            <div className="flex items-center">
                            <Image src={"/images/logo.jpeg"} alt={"logo"} width={60} height={60} />
                            <Link href={"/"}><p className="md:text-xl sm:text-xl text-base font-bold m-auto text-white">Langkahsana</p></Link>
                            </div>
                           
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" className="text-white" />
                                <Footer.LinkGroup col>
                                    <Footer.Link className="text-white" href="">Flowbite</Footer.Link>
                                    <Footer.Link className="text-white" href="#">Tailwind CSS</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" className="text-white"/>
                                <Footer.LinkGroup col>
                                    <Footer.Link className="text-white" href="#">Github</Footer.Link>
                                    <Footer.Link className="text-white" href="#">Discord</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" className="text-white"/>
                                <Footer.LinkGroup col>
                                    <Footer.Link className="text-white" href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link className="text-white" href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} className="text-white"/>
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
}
