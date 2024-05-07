import Image from "next/image";
import bridge from "@/app/media/bridge.jpg"
import { IoChevronForward } from "react-icons/io5";
export default function HomeAboutModule() {
    const title1 = "Buy Side Advisory";
    const title2 = "Corporate Advisory";
    const title3 = "Business Development";

    const desc1 = "";
    const desc2 = "";
    const desc3 = "";

    return (<>

        <div className=" flex flex-row justify-center items-center h-screen text-gray-50">
            <div className="flex flex-row m-5 w-full h-full justify-evenly items-center">

                <div className=" max-w-[500px] p-5 flex flex-col items-center text-2xl text-center h-[600px] bg-slate-600 rounded-md">

                    <div className="h-[450px]">
                        <Image alt="bridge" src={bridge} />
                        <h3 className="p-5">{title1}</h3>
                    </div>

                    <div className="flex flex-col h-[450px] items-center justify-start">
                        <p className="text-xl self-start">{desc1}</p>
                        <button className="flex flex-row justify-center items-center  w-fit text-white m-2 px-2 py-1 rounded-md text-[16px]"
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--slate-600), var(--slate-700)",
                            }}>
                            See More <IoChevronForward />
                        </button>
                    </div>
                </div>

                <div className=" max-w-[500px] p-5 flex flex-col justify-around items-center text-2xl text-center h-[600px] bg-slate-600 rounded-md">

                    <div className="h-[450px]">
                        <Image alt="bridge" src={bridge} />
                        <h3 className="p-5">{title2}</h3>
                    </div>

                    <div className="flex flex-col h-[450px] items-center justify-start">
                        <p className="text-xl">{desc2}</p>
                        <button className="flex flex-row justify-center items-center bg-slate-700 w-fit m-2 text-white px-2 py-1 rounded-md text-[16px]"
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--slate-600), var(--slate-700)",
                            }}>
                            Learn More <IoChevronForward />
                        </button>
                    </div>
                </div>

                <div className=" max-w-[500px] p-5 flex flex-col items-center text-2xl text-center h-[600px] bg-slate-600 rounded-md">

                    <div className="h-[450px]">
                        <Image alt="bridge" src={bridge} />
                        <h3 className="p-5">{title3}</h3>
                    </div>

                    <div className="flex flex-col h-[450px] items-center justify-start">
                        <p className="text-xl self-start">{desc3}</p>
                        <button className="flex flex-row justify-center items-center bg-slate-700 w-fit m-2 text-white px-2 py-1 rounded-md text-[16px]"
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--slate-600), var(--slate-700)",
                            }}>
                            Get In Touch <IoChevronForward />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>)
}