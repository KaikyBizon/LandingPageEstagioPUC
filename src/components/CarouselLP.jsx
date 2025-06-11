import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function CarouselLP() {
  const images = ["/img1LPC.jpg", "/img2LPC.jpg", "/img3LPC.jpg"];
  return (
    <section className="relative h-[600px] mt-5">
      {/* Headline dentro do Carousel na LP */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 border-black">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
          Transforme seu potencial
          <br /> em realidade.
        </h1>
        <a
          href="https://estagio.puc-campinas.edu.br/"
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg transition transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:bg-gray-300"
        >
          Saiba mais
        </a>
      </div>
      {/* Carousel da LP */}
      <div className="w-full h-[600px] px-4 sm:px-8 md:px-16">
        <div className="absolute top-1/3 left-0 right-0 w-full h-2/3 bg-[#002776] z-0"></div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-[600px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
