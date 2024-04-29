"use client"
import Image from "next/image";
import NavBar from "../global/nav";
import skyline from "@/app/media/skyline.webp";
import street from "@/app/media/street-1.jpg";
import dev from "@/app/media/development.jpg";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiCheckboxBlankFill, RiCheckboxBlankLine } from "react-icons/ri";

export default function Hero() {
    const desc1: string = "Servicing PE, VC, and debt facilities";
    const desc2: string = "Fundraising at any stage of the business";
    const desc3: string = "Utilizing network to drive revenue";

    const [imageLocation, setLocation] = useState(street);
    const [text, setText] = useState('Buy Side Advisory');
    const [desc, setDesc] = useState(desc1);
    const [visible, setVisible] = useState(true);
    const [index, setIndex] = useState(0);


    const titleList = ['Buy Side Advisory', 'Corporate Advisory', 'Business Development'];
    const descList = [desc1, desc2, desc3];
    const imgList = [street, skyline, dev];

    const nextSlide = () => {
        const newIndex = (index + 1) % titleList.length;
        setVisible(false);
        setTimeout(() => {
            setIndex(newIndex);
            setText(titleList[newIndex]);
            setDesc(descList[newIndex]);
            setLocation(imgList[newIndex]);
            setVisible(true);
        }, 500);
        console.log(index);
    }
    const prevSlide = () => {
        const newIndex = (index - 1 + titleList.length) % titleList.length;
        setVisible(false);
        setTimeout(() => {
            setIndex(newIndex);
            setText(titleList[newIndex]);
            setDesc(descList[newIndex]);
            setLocation(imgList[newIndex]);
            setVisible(true);
        }, 500);

    }
    const setIndex0 = () => {
        const newIndex = 0;
        setVisible(false);
        setTimeout(() => {
            setIndex(newIndex);
            setText(titleList[newIndex]);
            setDesc(descList[newIndex]);
            setLocation(imgList[newIndex]);
            setVisible(true);
        }, 500);
    }
    const setIndex1 = () => {
        const newIndex = 1;
        setVisible(false);
        setTimeout(() => {
            setIndex(newIndex);
            setText(titleList[newIndex]);
            setDesc(descList[newIndex]);
            setLocation(imgList[newIndex]);
            setVisible(true);
        }, 500);
    }
    const setIndex2 = () => {
        const newIndex = 2;
        setVisible(false);
        setTimeout(() => {
            setIndex(newIndex);
            setText(titleList[newIndex]);
            setDesc(descList[newIndex]);
            setLocation(imgList[newIndex]);
            setVisible(true);
        }, 500);
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            nextSlide();

        }, 5000);

        return () => clearInterval(intervalID);
    }, [index]);


    return (<>
        <NavBar />
        <div key={index + 1} className={` h-screen bg-no-repeat  flex flex-col justify-center items-center overflow-hidden relative `}>
            <Image alt='Background images for scrolling hero' src={imageLocation} className={` ${visible ? ' opacity-100' : ' opacity-0'} transition-all duration-500 absolute w-full h-fit z-10 `} />
            <div className="absolute top-0 left-0 bg-slate-700 h-full w-full z-10 opacity-75" />
            <h1 className={`${visible ? ' opacity-100 scale-100 ' : ' opacity-0 scale-90 '} transition-all duration-500 text-center text-white text-8xl z-20`}>
                {text}
            </h1>
            <h3 className={`text-white ${visible ? ' opacity-100 translate-y-0 ' : ' opacity-0 translate-y-10 '} delay-75 transition-all duration-500 text-xl p-5 z-20`}>
                {desc}
            </h3>
            <a href="/services" className={` ${visible ? ' opacity-100 translate-y-0 ' : ' opacity-0 translate-y-10 '} delay-150 transition-all duration-200 rounded-sm border-white border-2 py-3 px-5 text-white hover:bg-white hover:text-black hover:cursor-pointer z-40`}>
                Learn More
            </a>
            <div className="absolute h-screen flex flex-col justify-center w-full z-20">
                <a className=" self-end"><button onClick={nextSlide} className="  text-white text-3xl mr-5"><IoIosArrowForward /></button></a>
                <a><button onClick={prevSlide} className="text-white ml-5 text-3xl"><IoIosArrowBack /> </button></a>
            </div>
            <div className=" absolute h-screen flex flex-col z-20 justify-end">
                <div className="flex flex-row items-center mb-12 text-[10px]">
                    <a onClick={setIndex0} className=" hover:cursor-pointer">
                        <span className={` text-blue-300 scale-105 `}><RiCheckboxBlankFill /></span>
                    </a>
                    <hr className=" w-16 m-1 border-white border-[0.25px] rounded-full"></hr>
                    <a onClick={setIndex1} className="h-full  flex flex-col justify-center items-center relative hover:cursor-pointer">
                        <span className={` absolute text-white `}><RiCheckboxBlankLine /></span>
                        <span className={` ${index >= 1 ? 'opacity-100  scale-105' : 'opacity-0 scale-75'} transition-all duration-500 text-blue-300`}><RiCheckboxBlankFill /></span>
                    </a>
                    <hr className="w-16 m-1 border-white border-[0.25px] rounded-full"></hr>
                    <a onClick={setIndex2} className="h-full  flex flex-col justify-center items-center relative hover:cursor-pointer">
                        <span className={` absolute text-white  `}><RiCheckboxBlankLine /></span>
                        <span className={` ${index > 1 ? 'opacity-100 scale-105' : 'opacity-0 scale-75'}  transition-all duration-500 text-blue-300 `}><RiCheckboxBlankFill />
                        </span>
                    </a>
                </div>

            </div>
        </div >
    </>)
}