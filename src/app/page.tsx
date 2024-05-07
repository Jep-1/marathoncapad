import Footer from "./modules/global/footer";
import HomeAboutModule from "./modules/homepage/about";
import Hero from "./modules/homepage/hero";
import HomeContactForm from "./modules/homepage/homecontactform";
import InfiniteMovingCardsHome from "./modules/homepage/infinitecards";
import ServiceList from "./modules/homepage/services";
import Testimonial from "./modules/homepage/testimonial";


export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <InfiniteMovingCardsHome />
      <ServiceList />
      <Footer />
    </>
  );
}
