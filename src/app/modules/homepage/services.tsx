import AboutPage from "@/app/about/page";
import HomeAboutModule from "./about";
import ServiceCard from "./servicecards";
import bridge from "@/app/media/bridge.jpg";
import building from "@/app/media/building.jpg"
import Image from "next/image";

export default function ServiceList() {
    const img1 = <Image alt="Bridge at sunset" src={bridge} className="max-h-[500px] w-auto" />;
    const img2 = "";
    const img3 = "";

    const title1 = "Buy Side Advisory";
    const title2 = "Corporate Advisory";
    const title3 = "Business Development";

    const desc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis ex mi, sit amet facilisis diam viverra non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
    const desc2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis ex mi, sit amet facilisis diam viverra non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
    const desc3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis ex mi, sit amet facilisis diam viverra non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

    return (<>
        <div className="h-screen p-14 overflow-hidden flex flex-row text-black ">
            <div className=" h-full overflow-hidden w-1/2">
                <Image alt="building in new york" src={building} className=" h-full w-auto" />

            </div>
            <div className="flex flex-col justify-evenly h-full w-full">
                <div className="border-b-2 border-t-2 h-full flex flex-col justify-evenly border-slate-600">
                    <h1 className="text-4xl ">Buy Side Advisory</h1>
                    <p className="w-3/4">{desc1}</p>
                    <a href="/services" className="border-2 w-fit px-3 py-2 rounded-md hover:bg-slate-200 transition-all duration-200 hover:cursor-pointer border-slate-600">Learn More</a>
                </div>
                <div className="border-b-2 h-full flex flex-col justify-evenly border-slate-600">
                    <h1 className="text-4xl">Corporate Advisory</h1>
                    <p className="w-3/4">{desc2}</p>
                    <a href="/services" className="border-2 w-fit px-3 py-2 rounded-md hover:bg-slate-200 transition-all duration-200 hover:cursor-pointer border-slate-600">Learn More</a>
                </div>
                <div className="border-b-2 h-full flex flex-col justify-evenly border-slate-600">
                    <h1 className="text-4xl">Business Development</h1>
                    <p className="w-3/4">{desc3}</p>
                    <a href="/services" className="border-2 w-fit px-3 py-2 rounded-md hover:bg-slate-200 transition-all duration-200 hover:cursor-pointer border-slate-600">Learn More</a>
                </div>
            </div>
        </div>
    </>)
}