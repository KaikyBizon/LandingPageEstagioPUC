import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function FaleCQEntende() {
  // slides do carousel do Programa Se Liga no Trabalho
  const slides = [
    {
      title: "Se Liga no Trabalho",
      text: "O programa da PUC-Campinas que conecta você ao mercado de trabalho. Evolução do antigo Escritório de Talentos e Carreiras (ETC), com ainda mais recursos para sua carreira.",
      image: "/img1SLNT.jpg",
    },
    {
      title: "Parcerias estratégicas",
      text: "Conecte-se a empresas da Região Metropolitana de Campinas e Grande SP. Acesse um banco de vagas atualizado e oportunidades reais para começar sua trajetória profissional.",
      image: "/img2SLNT.png",
    },
    {
      title: "Prepare-se para se destacar",
      text: "Participe das oficinas: Se Liga no Currículo, Se Liga na Entrevista e Se Liga nas Competências. Desenvolva habilidades e conquiste seu espaço!",
      image: "/img3SLNT.png",
    },
    {
      title: "Feira de Estágio",
      text: "Um dos maiores eventos da universidade, que aproxima você de empresas, recrutadores e oportunidades. Networking, conhecimento e portas abertas para o futuro.",
      image: "/img4SLNT.jpg",
    },
  ];

  return (
    <section className="w-full py-8 px-4 sm:px-8 md:px-16 md:mt-10 bg-[#4e77b8d5]">
      <h1 className="flex justify-center text-lg sm:text-4xl text-center font-semibold py-[20px] text-[#D4A23F] drop-shadow-[0_2px_3px_rgba(0,0,0,1)]">FALE COM QUEM ENTENDE DO ASSUNTO</h1>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          loop
          className="rounded-xl w-full bg-[#003383] drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="text-left p-4 sm:ml-20 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl max-w-xl">
                    {slide.text}
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="md:w-[600px] md:h-[500px] rounded-xl shadow-lg object-cover object-[80%_center]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
