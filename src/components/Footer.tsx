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
                        <div className="text-white  md:ml-0 sm:ml-0 ml-[-3px]">
                            <div className="flex items-center">
                            <Image src={"/images/logo.jpeg"} alt={"logo"} width={60} height={60} />
                            <Link href={"/"}><p className="md:text-xl sm:text-xl text-base font-bold m-auto text-white">Langkahsana</p></Link>
                            </div>
                           <p className="px-1 md:mt-4 sm:mt-4 mt-1 mb-10 md:w-7/12 sm:w-7/12 w-full md:text-base sm:text-base text-sm [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Langkahsana siap bawa kamu jalan-jalan ke alam bareng strangers. Siapin diri kalian karena bakal seru banget!</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="Navigation" className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" />
                                <Footer.LinkGroup col>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="/">Home</Footer.Link>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="/journal">Journal</Footer.Link>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="/about">About</Footer.Link>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="/contact">Contact</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"/>
                                <Footer.LinkGroup col>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="#">Instagram</Footer.Link>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="#">Tiktok</Footer.Link>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="#">Whatsapp</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"/>
                                <Footer.LinkGroup col>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between justify-center">
                        <div className="flex md:justify-start sm:justify-start justify-center w-full">
                        <Footer.Copyright href="/" by="Langkahsana™" year={2024} className="text-center"/>
                        </div>
                        
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"/>
                            <Footer.Icon href="#" icon={BsInstagram} className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"/>
                            <Footer.Icon href="#" icon={BsTwitter} className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"/>
                            <Footer.Icon href="#" icon={BsGithub} className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"/>
                            <Footer.Icon href="#" icon={BsDribbble} className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"/>
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
}
