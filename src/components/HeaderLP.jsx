import CarouselLP from "./CarouselLP";

export default function HeaderLp() {
  return (
    <>
      <header>
        {/* Área da logo da PUC-Campinas */}
        <div className="container-header w-full flex justify-center mt-3">
          <div className="logo-area flex flex-col md:flex-row items-center w-3/4">
            <img
              className="w-[200px] h-[107px]"
              src="/logo.jpg"
              alt="Logo PUC-Campinas"
            />
            <h2 className="text-2xl sm:text-3xl pt-4 md:pt-0 md:pl-4 font-bold text-[#002776]">ESTÁGIOS</h2>
          </div>
        </div>
      </header>
      <CarouselLP />
      <section className="intro w-full bg-[#002776] h-[400px] flex justify-center items-center">
        <div className="phrase-intro w-3/4 flex justify-center">
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
            Comece sua carreira
            <br /> antes mesmo de se
            <br /> formar.
          </h2>
        </div>
      </section>
    </>
  );
}
