import { InfiniteMovingCards } from "../global/infinite-moving-cards";

export default function InfiniteMovingCardsHome() {

    const items = [
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin nibh at lacinia ultricies. Donec venenatis sapien ut vehicula hendrerit. Proin lacinia, lacus non vehicula ultrices, elit urna posuere ipsum, nec vehicula lorem massa vel lorem. Vestibulum vehicula placerat ipsum eu egestas.",
            name: "John Doe",
            title: "CEO"
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin nibh at lacinia ultricies. Donec venenatis sapien ut vehicula hendrerit. Proin lacinia, lacus non vehicula ultrices, elit urna posuere ipsum, nec vehicula lorem massa vel lorem. Vestibulum vehicula placerat ipsum eu egestas.",
            name: "Jane Doe",
            title: "CTO"
        },
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin nibh at lacinia ultricies. Donec venenatis sapien ut vehicula hendrerit. Proin lacinia, lacus non vehicula ultrices, elit urna posuere ipsum, nec vehicula lorem massa vel lorem. Vestibulum vehicula placerat ipsum eu egestas.",
            name: "Jane Doe",
            title: "CFO"
        },
    ];

    return (<>

        <div className="p-5 w-full ">
            <InfiniteMovingCards items={items} pauseOnHover={false} direction="right" speed="slow" />
        </div>
    </>)
}