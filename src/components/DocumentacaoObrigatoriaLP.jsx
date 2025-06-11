export default function DocumentacaoObrigatoria() {
  return (
    <section className="w-full flex justify-center py-20 bg-[#ffffff]">
      <div className="w-3/4 h-full">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-[#002776] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">DOCUMENTAÇÃO OBRIGATÓRIA</h1>
          <div className="border-b-2 border-[#002776] mt-2"></div>
        </div>
        <div className="w-full h-full mt-2.5 flex justify-center">
          <div className="space-y-10 h-full text-lg">
            <p>
              📘 <strong className="text-2xl text-[#444444] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]"> Termo de Compromisso de Estágio (TCE)</strong> <br />
              É o contrato que oficializa o estágio, definindo período,
              carga horária, atividades e responsabilidades das partes
              envolvidas. Deve ser assinado pelo aluno, pela empresa concedente
              e pela PUC-Campinas, após aprovação da Diretoria da Faculdade.
            </p>
            <p>
              📝 <strong className="text-2xl text-[#444444] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">Plano de Atividades</strong> <br />
              Documento que descreve as tarefas que o estagiário irá realizar,
              sempre em conformidade com o curso e o nível de formação. Ele
              integra o TCE e garante que o estágio tenha finalidade educativa e
              compatível com a formação acadêmica.
            </p>
            <p>
              ➕ <strong className="text-2xl text-[#444444] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">Termo Aditivo</strong> <br />
              Utilizado para registrar qualquer alteração no estágio já
              aprovado, como prorrogação de prazo, mudança de horário, carga
              horária ou troca de supervisor. Deve ser emitido antes da
              alteração ocorrer e assinado pelo aluno, pela empresa e pela
              PUC-Campinas.
            </p>
            <p>
              ❌ <strong className="text-2xl text-[#444444] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">Termo de Rescisão</strong>
              <br />
              Necessário quando o estágio é encerrado antes do prazo previsto no
              TCE. Oficializa o fim do contrato e deve ser assinado pelas partes
              envolvidas para garantir o registro correto da interrupção junto à
              universidade.
            </p>
            <p>
              📊<strong className="text-2xl text-[#444444] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">Relatório de Atividades de Estágio</strong>
              <br />
              Entregue a cada 6 meses, na renovação ou ao final do estágio. Deve
              conter o resumo das atividades realizadas, carga horária cumprida,
              avaliação do supervisor e a autoavaliação do aluno. Deve estar
              compatível com o plano de atividades, ser assinado pela empresa e
              pelo estagiário, e será analisado pela faculdade. Irregularidades
              podem comprometer a validação do estágio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
