import AboutUs from "@/components/AboutUs";
import SwiperSlider from "@/components/HeroSliderss";

const Home: React.FC = () => {
  return (
    <>
      <SwiperSlider />
        <div className="mx-24 my-10">
          <AboutUs />
        </div>
    </>
  );
};

export default Home;
