import Image from "next/image"
import skyscraper from "@/app/media/skyscraper.jpg"

export default function Testimonial() {

    return (<>
        <div className="h-screen">
            <div className="flex flex-row h-full w-full">
                <div className="flex flex-col text-center justify-center items-center w-1/2">
                    <h3>ENABLING GREATNESS</h3>
                    <h1 className="w-1/2 text-4xl">We&apos;ve built a holistic startup support ecosystem to help entrepreneurs build generational companies.</h1>
                    <button className="border-2 border-black py-2 px-5 rounded-md m-5 hover:bg-slate-200  transition-all duration-300">View More</button>
                </div>
                <div className="w-1/2 overflow-hidden flex flex-col justify-center items-center h-screen ">
                    <Image alt="Picture of skyscraper" src={skyscraper} className=" h-auto p-14 w-3/4" />
                </div>
            </div>
        </div>

    </>)
}