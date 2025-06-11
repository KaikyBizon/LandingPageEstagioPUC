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
      <section className="intro w-full bg-[#002776] h-full py-4 flex justify-center items-center">
        <div className="phrase-intro w-3/4 h-3/4 space-y-2 flex flex-col lg:flex-row justify-around items-center">
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
            Comece sua carreira
            <br /> antes mesmo de se
            <br /> formar.
          </h2>
          <div className="w-1/2 xl:w-1/3 h-fit p-4 text-[#002776] 2xl:text-lg bg-white rounded-lg">
            <p>
              O estágio é o primeiro contato direto do aluno com o mercado de trabalho, unindo a teoria da faculdade com a prática profissional. 
              Ele desenvolve habilidades e conhecimentos, alinhando a formação acadêmica à missão social da Universidade. 
              Para isso, a PUC-Campinas oferece suporte a faculdades, empresas e alunos, fornecendo informações e seguindo as leis para estágios 
              obrigatórios e não obrigatórios.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
