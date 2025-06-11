import CardsBlue from "./CardsBlueLP";

export default function CardsInfo() {
  return (
    <section className="w-full h-full p-5 flex justify-center items-center bg-[#002776]">
      <div className="w-19/20 h-4/5 lg:h-9/10 rounded-2xl overflow-hidden justify-around items-center flex-col lg:flex-row p-4 bg-white shadow-lg grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        <CardsBlue
          title="Carga horária"
          description={
            <>
              - Máximo de 6h por dia ou 30h por semana;
              <br /> <br /> - Deve ser compatível com as atividades acadêmicas;
              <br /> <br /> - Até 2 anos na mesma empresa (exceto para pessoas
              com deficiência);
              <br /> <br /> - Estágio de 40h semanais só é permitido se estiver
              previsto no curso;
              <br /> <br /> - Estudantes têm direito a recesso remunerado de 30 dias a cada
              12 meses, ou proporcional em contratos com duração menor que 12 meses podendo ser concedido em período
              contínuo ou fracionado.
              <br /><br /> - Caso o estágio seja encerrado antes do prazo e da realização do recesso, a
              unidade concedente deverá remunerar e conceder o valor proporcional ao recesso.
            </>
          }
        />
        <CardsBlue
          title="Quem pode fazer um estágio"
          description={
            <>
              - Estudantes regularmente matriculados e frequentando as aulas;
              <br /> <br /> - Devem cumprir os critérios definidos pelo
              Regulamento de Estágio do curso;
              <br /> <br /> - O estágio só pode começar após:
              <br />
              <span className="pl-4">
                ✅ Assinatura do convênio entre a empresa e a universidade;
              </span>
              <br />
              <span className="pl-4">
                ✅ Assinatura do Termo de Compromisso de Estágio (TCE);
              </span>
              <br /> <br /> - Válido para estágio obrigatório e não obrigatório.
            </>
          }
        />
        <CardsBlue
          title="Onde encontro meu estágio"
          description={
            <>
              {" "}
              - No portal da PUC-Campinas, no Escritório de Talentos e
              Carreiras;
              <br /> <br /> - Com apoio de professores e coordenação do curso;
              <br /> <br /> - Através de agentes de integração (como CIEE e
              Nube);
              <br /> <br /> - Em feiras de estágio promovidas pela universidade;
              <br /> <br /> - Em sites de empresas e agências de emprego;
              <br /> <br /> - Nas redes sociais profissionais e grupos da área.
            </>
          }
        />
        <CardsBlue
          title="Avaliação do estagiário"
          description={
            <>
              <strong>- Estágio Obrigatório:</strong> A avaliação segue o plano
              da disciplina e influencia diretamente na nota final. O professor
              responsável acompanha o desempenho do aluno ao longo do semestre.
              <br /> <br /> <strong>- Estágio Não Obrigatório:</strong> A
              avaliação é feita pelo supervisor da empresa e inclui uma
              autoavaliação do estagiário. Ambos os relatórios são analisados
              pela faculdade. <br /><br />

              <strong>*Na PUC-Campinas, não há período de provas ou exame final, sendo a avaliação
processual. Portanto, nos dias de avaliação da aprendizagem, não está prevista
redução da jornada de estágio (cf. Regimento Geral, Capítulo VIII, artigo 85).</strong>
            </>
          }
        />
        <CardsBlue
          title="Regras do estágio"
          description={
            <>
              - O estudante deve estar matriculado e frequentando o curso;
              <br /> <br />
              - O estágio precisa estar de acordo com o Projeto Pedagógico do
              Curso;
              <br /> <br />
              - É obrigatória a assinatura do Termo de Compromisso de Estágio
              (TCE); <br /> <br />
              - A carga horária deve respeitar os limites legais (até 6h/dia ou
              30h/semana); <br /> <br />
              - Todo estágio deve contar com um supervisor na empresa e um
              professor orientador; <br /> <br />- É necessário entregar
              relatórios periódicos de atividades; <br /> <br />- O estágio não
              gera vínculo empregatício, desde que siga a lei. <br /> <br />
            </>
          }
        />
        <CardsBlue
          title="Contatos"
          description={
            <>
              <strong>Interessado em fazer um estágio?</strong><br />
              Se você se identificou com as oportunidades e quer dar o próximo passo na sua formação profissional, 
              entre em contato com o Escritório de Talentos e Carreiras da PUC-Campinas. A equipe está pronta para te orientar!<br /> <br />
              📧 E-mail: seliganotrabalho@puc-campinas.edu.br <br />
              🌐 Site: <a className="hover:opacity-75 active:opacity-30" href="https://estagio.puc-campinas.edu.br">estagio.puc-campinas.edu.br</a><br /> <br />
              📞CAA – Campus I: (19) 3343-7500 <br />
              📞CAA – Campus II: (19) 3343-6918
            </>
          }
        />
      </div>
    </section>
  );
}
