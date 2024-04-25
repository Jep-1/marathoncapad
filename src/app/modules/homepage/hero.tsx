"use client"
import Image from "next/image";
import NavBar from "../global/nav/nav";
import skyline from "@/app/media/skyline.webp";
import street from "@/app/media/street-1.jpg";
import dev from "@/app/media/development.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
    const desc1: string = "Servicing PE, VC, and debt facilities";
    const desc2: string = "Fundraising at any stage of the business";
    const desc3: string = "Utilizing network to drive revenue";
    const [imageLocation, setLocation] = useState(street);

    const [text, scrollingText] = useState('Buy Side Advisory');
    const [desc, setDescription] = useState(desc1);
    const [visible, setVisible] = useState(true);
    let index = 1;
    const titleList = ['Buy Side Advisory', 'Corporate Advisory', 'Business Development'];
    const descList = [desc1, desc2, desc3];
    const imgList = [street, skyline, dev];

    setTimeout(() => {
        setVisible(false);

    }, 4500)
    useEffect(() => {
        const intervalID = setInterval(() => {
            setVisible(true);
            scrollingText(titleList[index]);
            setDescription(descList[index]);
            setLocation(imgList[index]);
            index = (index + 1) % titleList.length;


            setTimeout(() => {
                setVisible(false);
            }, 4800)
        }, 5000)

        return () => clearInterval(intervalID)

    }, [])


    return (<>
        <NavBar />
        <div className={` h-screen bg-no-repeat  flex flex-col justify-center items-center  `}>
            <Image alt='Background images for scrolling hero' src={imageLocation} className={` ${visible ? ' opacity-100' : ' opacity-0'} transition-all duration-500 fixed w-full z-10 `} />
            <div className="absolute top-0 left-0 bg-slate-700 h-full w-full z-10 opacity-75" />
            <h1 className={`${visible ? ' opacity-100 scale-100 ' : ' opacity-0 scale-90 '} transition-all duration-500 text-center text-white text-8xl z-20`}>{text}</h1>
            <h3 className={`text-white ${visible ? ' opacity-100 translate-y-0 ' : ' opacity-0 translate-y-10 '} delay-75 transition-all duration-500 text-xl p-5 z-20`}>{desc}</h3>
            <button className={` ${visible ? ' opacity-100 translate-y-0 ' : ' opacity-0 translate-y-10 '} delay-150 transition-all duration-500 rounded-sm border-white border-2 py-3 px-5 text-white hover:bg-white hover:text-black z-20`}>Learn More</button>
        </div>
    </>)
}