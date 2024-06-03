import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/bri.jpg",
    name: "Rhea Bartolay",
    position: "System Analyst",
    message:
      "For Ms. Arlene, I really can't say anything but admire her because she is good at everything, especially when it comes to programming or development. So I believe that she can help or contribute a lot in her chosen work, more projects and innovation to come in the future. Furthermore, thank you for your knowledge and teaching us when it comes to programming during a short time and advance congratulations on your success. Thank you muah.♡♥︎",
  },
  {
    image: "/bi.jpg",
    name: "Christian Santiago",
    position: "Head Documenter",
    message:
      "Arlene is a skilled programmer and UI/UX designer whose creativity and technical prowess shine through her work. Beyond her professional talents, she is a loyal and supportive friend, always ready to lend a helping hand.",
  },
  {
    image: "/rommel.png",
    name: "Rommel Rivera",
    position: "Programmer",
    message:
      "uwu",
  },
  {
    image: "/edman.jpg",
    name: "Edman Cabote",
    position: "Programmer",
    message:
      "Arlene is an excellent programmer, reliable in all things, hardworking, and dedicated to life. One day, she will become a hacker.",
  },
  {
    image: "/lemon.jpg",
    name: "Angelo Gabriel Geulin",
    position: "Sr. Programmer",
    message:
      "Arlene is an exceptionally dedicated and reliable team member. Whenever challenges arise, she consistently goes above and beyond to exceed our expectations. Her skills and commitment make her one of the best software developers I have ever had the pleasure of working with.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
          
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
               
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                <div className="text-lg">{person.name}</div>

                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
             
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
