"use client"
import NavBar from "../global/nav/nav"
import { useEffect, useState } from "react"

export default function Hero() {
    const [text, scrollingText] = useState('Buy Side Advisory');
    const [index, updateIndex] = useState(0);
    const list = ['Buy Side Advisory', 'Corporate Advisory', 'Business Development'];

    useEffect(() => {
        const intervalID = setInterval(() => {

            if ((index + 1 % list.length) === 0) {
                console.log('entered!')
                updateIndex(0);
            }
            updateIndex(index + 1);

            console.log(index);

            scrollingText(list[index]);
        }, 2000)

        return () => clearInterval(intervalID)

    }, [])


    return (<>
        <NavBar />
        <div className="h-screen bg-[url('media/skyline.webp')] bg-slate-700 bg-blend-overlay flex flex-col justify-center items-center">
            <h1 className={`text-center text-white text-8xl`}>{text}</h1>
            <button className="bg-white px-3 py-2 text-black w-fit text-center rounded-full" >Next</button>
        </div>

    </>)
}