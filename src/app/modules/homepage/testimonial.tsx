import Image from "next/image"
import skyscraper from "@/app/media/skyscraper.jpg"

export default function Testimonial() {


    const desc = "We've built an expansive network of brokers, advisors, investors, and lenders to help entrepreneurs build generational companies and achieve their vision for the problems they're looking to solve";
    // We've built a holistic startup support ecosystem to help entrepreneurs build generational companies.
    return (<>
        <div className="h-screen">
            <div className="flex flex-row h-full w-full">
                <div className="flex flex-col justify-center ml-14 w-1/2">
                    <h3>ENABLING GREATNESS</h3>
                    <h1 className="w-3/4 text-4xl">{desc}</h1>
                    <button className="border-2 border-black py-2 px-5 w-32 mt-5 rounded-md  hover:bg-slate-200  transition-all duration-300">View More</button>
                </div>
                <div className="w-1/2 overflow-hidden flex flex-col justify-center items-center h-screen ">
                    <Image alt="Picture of skyscraper" src={skyscraper} className=" h-auto p-14 w-3/4" />
                </div>
            </div>
        </div>

    </>)
}