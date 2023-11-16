"use client"
import React from "react"
import { useState } from "react"
import { Link as _link } from "react-scroll/modules"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
    {
        label: "Games",
        page: "games"
    },
    {
        label: "Spotify",
        page: "spotify"
    }
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)

    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between">
                        <_link to="home">
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <h2 className='text-2xl font-bold'>August Muenzenmay</h2>
                            </div>
                        </_link>
                        <div className="md:hidden">
                            <button onClick={() => setNavbar(!navbar)}>
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}>
                        <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                            {NAV_ITEMS.map((item, idx) => {
                                if (item.label === 'About' || item.label === 'Projects') {
                                    // return (
                                    //     <_link
                                    //         key={idx}
                                    //         to={item.page}
                                    //         className={
                                    //             "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                                    //         }
                                    //         activeClass="active"
                                    //         spy={true}
                                    //         smooth={true}
                                    //         offset={-100}
                                    //         duration={500}
                                    //         onClick={() => setNavbar(!navbar)}
                                    //     >
                                    //         {item.label}
                                    //     </_link>
                                    // )
                                } else {
                                    return (
                                        <Link key={item.label} href={item.page}
                                            className={
                                                "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                                            }
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                }
                            })}
                            {currentTheme === "dark" ? (
                                <button
                                    onClick={() => setTheme("light")}
                                    className="bg-slate-100 p-2 rounded-xl"
                                >
                                    <RiSunLine size={25} color="black" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="bg-slate-100 p-2 rounded-xl"
                                >
                                    <RiMoonFill size={25} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Navbar