import { useState, useEffect } from "react";

export default function TypeEstagio() {
  // Constantes com o texto explicando cada um dos estágios
  const EstagioObrigatorio = `O estágio obrigatório é uma atividade prevista no Projeto Pedagógico do Curso e é necessária para a obtenção do diploma.
    Ele funciona como uma disciplina com plano de ensino, carga horária definida e avaliação semestral, sendo acompanhado por um professor responsável.
    A empresa pode, ou não, oferecer bolsa-auxílio e transporte, mas o seguro contra acidentes pessoais é obrigatório.
    A experiência deve respeitar a carga horária exigida pelo curso e seguir os critérios estabelecidos pelo regulamento de estágio da faculdade.
    Esse tipo de estágio conecta o aluno ao ambiente profissional, promovendo o desenvolvimento de competências práticas em consonância com sua formação acadêmica.`;

  const EstagioNaoObrigatorio = `O estágio não obrigatório é uma atividade opcional, complementar à formação do estudante.
    Ele não é exigido para a conclusão do curso, mas contribui de forma significativa para a vivência profissional e o fortalecimento do currículo.
    Nesse tipo de estágio, a empresa é obrigada a conceder bolsa-auxílio, auxílio-transporte e seguro contra acidentes pessoais, pois não se trata de uma atividade voluntária.
    O aluno deve ser acompanhado por um professor orientador e por um supervisor na empresa.
    Essa modalidade é ideal para quem deseja antecipar o contato com o mercado de trabalho e adquirir experiência prática além das exigências curriculares.`;

  // const que recebe o tipo de estágio selecionado pela pessoa
  const [interpretaValorButton, setInterpretaValorButton] = useState("");
  //console.log("Valor selecionado: ", interpretaValorButton)

  //Função que mostra o texto relativo a escolha do usuário: Estágio Obrigatório ou Estágio Não Obrigatório
  const [textoASerExibido, setTextoASerExibido] = useState(null);
  useEffect(() => {
    if (interpretaValorButton === "estagio_obrigatorio") {
      setTextoASerExibido(EstagioObrigatorio);
    } else if (interpretaValorButton === "estagio_nao_obrigatorio") {
      setTextoASerExibido(EstagioNaoObrigatorio);
    } else {
      setTextoASerExibido(null);
    }
  }, [interpretaValorButton]);

  return (
    <section className="h-auto w-full flex flex-col items-center justify-center p-3 bg-[#4e77b8d5]">
      <h1 className="text-4xl font-semibold py-[20px] text-[#D4A23F] drop-shadow-[0_2px_3px_rgba(0,0,0,1)]">TIPOS DE ESTÁGIO</h1>
      {/* Div com todos os itens da section */}
      <div className="w-9/10 h-auto mb-2 flex-col sm:w-3/4 sm:h-2/3 sm:flex-col rounded-xl flex bg-[#003383] lg:w-3/5 shadow-2xl">
        {/* Div dos botoes para selecionar o tipo de estagio */}
        <div className="w-full h-[80px] rounded-xl flex sm:justify-around sm:flex-row sm:w-full sm:h-[120px] bg-blue-600 p-2">
          {/* botoes para a pessoa clicar e ver o texto de estagio obrigatorio ou estagio nao obrigatorio */}
          <button
            value="estagio_obrigatorio"
            onClick={(e) => setInterpretaValorButton(e.target.value)}
            className={`h-3/4 text-center text-xl ${interpretaValorButton === 'estagio_obrigatorio' ? 'text-[#D4A23F]' : 'text-white'}`}
          >
            Estágio Obrigatório
          </button>
          <button
            value="estagio_nao_obrigatorio"
            onClick={(e) => setInterpretaValorButton(e.target.value)}
            className={`h-3/4 text-center text-xl ${interpretaValorButton === 'estagio_nao_obrigatorio' ? 'text-[#D4A23F]' : 'text-white'}`}
          >
            Estágio Não Obrigatório
          </button>
        </div>
        {/* Div que mostra o texto selecionado */}
        <div className="text-white text-[18px] flex items-center justify-center w-full h-full p-4">
          <p>{textoASerExibido || "Escolha uma opção ao lado"}</p>
        </div>
      </div>
    </section>
  );
}
