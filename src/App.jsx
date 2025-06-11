import "./App.css";
import HeaderLp from "./components/HeaderLP";
import PQFEstagio from "./components/PQFEstagio";
import FaleCQEntende from "./components/FaleCQEntende";
import TypeEstagio from "./components/TypeEstagioLP";
import CardsInfo from "./components/CardsInfoLP";
import DocumentacaoObrigatoria from "./components/DocumentacaoObrigatoriaLP";
import MaisInformacoes from "./components/MaisInformacoesLP";

function App() {
  return (
    <div className="font-poppins">
      <HeaderLp />
      {/* Cards da área Porque fazer um estágio */}
      <PQFEstagio />
      {/* Contato do responsável pelos estágios na PUC-Campinas */}
      <FaleCQEntende />
      {/* Section que fala sobre os 2 tipos de estágios que podem ser feitos */}
      <TypeEstagio />
      {/* Cards com informações sobre o estágio na PUC-CAMPINAS */}
      <CardsInfo />
      {/* Section que fala sobre as regras do estágio */}
      <DocumentacaoObrigatoria />
      {/* Section que fala sobre a Cartilha do Estagiário da PUC-Campinas */}
      <MaisInformacoes />
    </div>
  );
}

export default App;
