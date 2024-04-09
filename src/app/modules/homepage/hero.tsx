"use client"
import NavBar from "../global/nav/nav"
import { useState, useEffect, } from "react"

export default function Hero() {
    const [text, scrollingText] = useState('Buy Side Advisory');

    const list = ['Buy Side Advisory', 'Corporate Advisory', 'Business Development'];

    let index: number = 0;


    const handleClick = () => {
        scrollingText(list[index]);

        index++;

        console.log(index);
    }

    return (<>
        <NavBar />
        <div className="h-screen bg-[url('media/skyline.webp')] bg-slate-700 bg-blend-overlay flex flex-col justify-center items-ceter">
            <h1 className={`text-center text-white text-8xl`}>{text}</h1>
            <button onClick={handleClick}>Next</button>
        </div>

    </>)
}