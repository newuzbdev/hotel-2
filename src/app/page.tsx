import HeroSlider from "@/components/HeroSlider";
import SecondGallery from "@/components/SecondGallery";
import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const AboutUsHoverEffects = dynamic(
  () => import("@/components/AboutUsHoverEffects")
);
const Gallery = dynamic(() => import("@/components/Gallery"));
const Roomstypes = dynamic(() => import("@/components/Roomstypes"));
const Faq = dynamic(() => import("@/components/Question"));
const HotelLocation = dynamic(() => import("@/components/HotelLocation"));
const ContactUs = dynamic(() => import("@/components/ContactUs"));

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="my-10">
        <AboutUs />
        <AboutUsHoverEffects />
      </div>
      <Gallery />
      <SecondGallery />
      <div className=" my-10">
        <Roomstypes />
        <Faq />
        <HotelLocation />
        <ContactUs />
      </div>
    </>
  );
}
