import Image from "next/image"
import Logo from "@/app/media/logo-white.webp"

export default function NavBar() {

    return (<>
        <div className="h-20 flex flex-row w-full p-1 absolute z-40">
            <div className="w-1/2 h-full flex flex-row items-center ">
                <Image alt="Marathon Capital Advisory Logo" src={Logo} className="ml-14" />

            </div>
            <div className="w-1/2 ">
                <ul className="flex flex-row justify-end items-center h-full text-white mr-14">
                    <a href="/" className="hover:cursor-pointer"><li className=" p-5 hover:cursor-pointer">Home</li></a>
                    <a href="/about" className="hover:cursor-pointer"><li className=" p-5 hover:cursor-pointer">About</li></a>
                    <a href="/services" className="hover:cursor-pointer"><li className=" p-5 hover:cursor-pointer">Services</li></a>
                    <a href="/contact" className="hover:cursor-pointer"><li className=" p-5 hover:cursor-pointer">Contact</li></a>
                </ul>
            </div>
        </div>
    </>)
}