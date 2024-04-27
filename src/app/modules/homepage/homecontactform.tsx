import { FaPhoneAlt } from "react-icons/fa";

export default function HomeContactForm() {

    return (<>

        <div className="h-[85vh] bg-slate-400 text-white flex flex-row justify-center items-center">
            <div className="flex flex-col">
                <h3 className="text-xl text-slate-700 font-bold">Get a Quote</h3>
                <h1 className="text-6xl">Get in Touch With Our Experts</h1>
                <h3 className=" inline-flex items-center text-2xl"><FaPhoneAlt className="mr-2" /> (562) 310 - 8312</h3>
            </div>
            <div className="w-1/2">

            </div>
        </div>

    </>)
}