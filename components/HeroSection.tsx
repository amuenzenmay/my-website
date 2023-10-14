"use client"

import React from "react";
import Image from "next/image";
import {Link} from "react-scroll/modules"
import {HiArrowDown} from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
                <div className="md:w-1/2 md:mt-2">
                    <Image className="rounded-full" src="/headshot.JPG" alt="" width={300} height={300}/>
                </div>
                <div className="md:w-3/5 md:mt-2">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl"> Hi, I&#39;m August!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&apos;m a{" "} 
                        <span className="font-semibold text-purple-600">
                            Full Stack Developer{" "}
                        </span>
                         at RockItCoin in Chicago, IL. 
                         {/* <span className="text-white dark:text-stone-900"> I also get paid like shit 
                            and I think that&apos;s bullshit!!
                        </span> */}
                    </p>
                    {/* <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >   
                    Projects  
                    </Link> */}
                </div>
            </div>
            <div>
            <Link
                        to="about"
                        className="flex flex-row justify-center"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >   
                    <HiArrowDown size={35} className="animate-bounce"/>  
                    </Link>
            </div>
        </section>
    )
}

export default HeroSection