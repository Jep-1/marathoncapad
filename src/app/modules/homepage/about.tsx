import Image from "next/image";
import bridge from "@/app/media/bridge.jpg"
import { IoChevronForward } from "react-icons/io5";
export default function HomeAboutModule() {


    return (<>

        <div className=" flex flex-row justify-center items-center h-screen">
            <div className="flex flex-row m-5 w-full h-full justify-center items-center">

                <div className=" max-w-[500px] p-5 flex flex-col items-center text-2xl text-center h-[600px] ">

                    <div className="h-[450px]">
                        <Image alt="bridge" src={bridge} />
                        <h3 className="p-5">Services</h3>
                    </div>

                    <div className="flex flex-col h-[450px] items-center justify-start">
                        <p className="text-xl self-start">Want to learn more about Marathon? Take a look at what we&apos;re able to offer to you.</p>
                        <button className="flex flex-row justify-center items-center  w-fit text-white m-2 px-2 py-1 rounded-md text-[16px]"
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--slate-600), var(--slate-700)",
                            }}>
                            See More <IoChevronForward />
                        </button>
                    </div>
                </div>

                <div className=" max-w-[500px] p-5 flex flex-col justify-around items-center text-2xl text-center h-[600px] ">

                    <div className="h-[450px]">
                        <Image alt="bridge" src={bridge} />
                        <h3 className="p-5">About Us</h3>
                    </div>

                    <div className="flex flex-col h-[450px] items-center justify-start">
                        <p className="text-xl">Find out about our organization, processes, and the full scope of our business services.</p>
                        <button className="flex flex-row justify-center items-center bg-slate-700 w-fit m-2 text-white px-2 py-1 rounded-md text-[16px]"
                            style={{
                                background:
                                    "linear-gradient(180deg, var(--slate-600), var(--slate-700)",
                            }}>
                            Learn More <IoChevronForward />
                        </button>
                    </div>
                </div>

                <div className=" max-w-[500px] p-5 flex flex-col items-center text-2xl text-center h-[600px] ">

                    <div className="h-[450px]">
                        <Image alt="bridge" src={bridge} />
                        <h3 className="p-5">Inquire</h3>
                    </div>

                    <div className="flex flex-col h-[450px] items-center justify-start">
                        <p className="text-xl self-start">Contact us today, to learn how we can assist with your company's growth objectives.</p>
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