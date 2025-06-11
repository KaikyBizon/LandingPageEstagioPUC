export default function PQFEstagio() {
  return (
    <section className="flex flex-col items-center pt-10 px-4">
      <h1 className="text-[#002776] drop-shadow-md text-3xl sm:text-4xl font-bold text-center mb-10">
        POR QUE FAZER UM ESTÁGIO?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="bg-[#002776] p-6 rounded-2xl shadow-2xl text-center text-white transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold mb-3">Conecte-se com empresas</h3>
          <p>
            Descubra oportunidades de estágio em empresas parceiras e comece a
            construir sua rede profissional desde a graduação.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#002776] p-6 rounded-2xl shadow-2xl text-center text-white transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold mb-3">Experiência real</h3>
          <p>
            Ganhe experiência prática em ambientes corporativos, aprenda com
            profissionais da área e desenvolva habilidades que vão além da sala
            de aula.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#002776] p-6 rounded-2xl shadow-2xl text-center text-white transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold mb-3">Destaque no currículo</h3>
          <p>
            Estágios enriquecem seu currículo e aumentam significativamente suas
            chances de conseguir um emprego após a formatura.
          </p>
        </div>
      </div>
    </section>
  );
}
