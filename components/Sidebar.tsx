"use client"
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

type Props = {
    open: boolean;
    setOpen(open: boolean): void;
}

interface SideItem {
    label: string
    page: string
}

const Sidebar = () => {

    return (
        <div
            className="flex flex-col justify-top bg-stone-400 sm:w-full sm:sticky sm:top-18 sm:z-0 top-0 z-20 fixed
            sm:h-[calc(100vh_-_64px)] h-full w-[300px] transition-transform .3s ease-in-out
            sm:translate-x-0 max-w-sm"
            // className={`flex flox-col justify-between bg-indigo-700 text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed
            //  md:h-[calc(100vh_-_64px)] h-full w-[300px] transition-transform .3s ease-in-out 
            //  md:translate-x-0 ${!true ? "-translate-x-full" : ""} max-w-sm`}
            //  className=

        >
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    );
}

export default Sidebar