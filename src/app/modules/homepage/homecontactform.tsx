import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function HomeContactForm() {

    return (<>

        <div className="h-[85vh] bg-slate-400 text-white flex flex-row justify-center items-center">
            <div className="flex flex-col">
                <h1 className="text-6xl">Get in Touch With Our Experts</h1>
                <a href="mailto:ashmit.gupta@marathoncapad.com" target="_blank" className=" inline-flex items-center text-2xl"><MdOutlineEmail className="mr-2" /> hello@marathoncapad.com</a>
            </div>
            <div className="w-1/2">

            </div>
        </div>

    </>)
}