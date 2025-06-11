import "./App.css";
import { useEffect, useState } from "react";
import HeaderLp from "./components/HeaderLP";
import PQFEstagio from "./components/PQFEstagio";
import FaleCQEntende from "./components/FaleCQEntende";
import TypeEstagio from "./components/TypeEstagioLP";
import CardsInfo from "./components/CardsInfoLP";
import DocumentacaoObrigatoria from "./components/DocumentacaoObrigatoriaLP";
import MaisInformacoes from "./components/MaisInformacoesLP";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Função a ser executada quando a janela e todos os seus recursos carregarem
    const handleLoad = () => {
      setIsLoading(false); // Define o estado de carregamento como falso
    };

    // Adiciona o event listener para o evento 'load' no objeto window
    window.addEventListener('load', handleLoad);

    // Limpeza: Remove o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // O array vazio [] garante que o useEffect seja executado apenas uma vez, no montagem do componente


  return (
    <div className="font-poppins">
      {isLoading && (
        // Preloader/Spinner - Visível enquanto isLoading for true
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          {/* Você pode adicionar um texto ou outro elemento de carregamento aqui */}
        </div>
      )}
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
