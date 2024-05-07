interface CardProps {
    title: string;
    description: string;
    image: any;
}

export default function ServiceCard({ title, description, image }: CardProps) {

    return (<>
        <div className="w-full flex flex-row overflow-hidden text-white">
            <div className=" w-1/2 p-5 ">
                
                {image}
            </div>
            <div className="flex flex-col h-full p-5">
                <h1 className="text-4xl">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </>)
}

