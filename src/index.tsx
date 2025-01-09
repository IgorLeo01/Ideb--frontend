import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConveniosPage from "./pages/Convenios";
import AtendimentoParticularPage from "./pages/AtendimentoParticular";
import AtendimentoSocialPage from "./pages/AtendimentoSocial";
import ContateNosPage from "./pages/Contato";
import CadastroClientePage from "./pages/CadastroCliente";
import CadastroEspecialistaPage from "./pages/CadastroEspecialista";
import { NavbarProvider } from "./components/Contexts/navbarContext";
import { Provider } from "react-redux";
import store from "./app/store";
import LoginPage from "./pages/Login";
import TesteSection from "./pages/TesteSection";
import ConsultasPage from "./pages/Consultas";
import CadastroEmpresaPage from "./pages/CadastroEmpresa";
import LeadsForm from "./components/Forms/Leads";
import TreinamentosSection from "./pages/Treinamentos";
import Dashboard from "./pages/Dashboard";
import EspecialistaDadosPessoais from "./pages/EdicaoEspecialista/DadosPessoais";
import EspecialistaDadosProfissionais from "./pages/EdicaoEspecialista/DadosProfissionais";
import EspecialistaDadosFinanceiros from "./pages/EdicaoEspecialista/DadosFinanceiros";
import EspecialistaDadosPlanejamento from "./pages/EdicaoEspecialista/DadosPlanejamento";
import DadosSessaoOnline from "./pages/EdicaoEspecialista/SessaoOnline";
import DadosSessaoPresencial from "./pages/EdicaoEspecialista/SessaoPresencial";
import Navbar from "./components/Navbar/navbar";
import PagamentoPage from "./pages/Pagamento";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavbarProvider>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/convenios" Component={ConveniosPage} />
            <Route
              path="/atendimento-particular"
              Component={AtendimentoParticularPage}
            />
            <Route
              path="/atendimento-social"
              Component={AtendimentoSocialPage}
            />
            <Route path="/contate-nos" Component={ContateNosPage} />
            <Route path="/cadastro-cliente" Component={CadastroClientePage} />
            <Route
              path="/cadastro-especialista"
              Component={CadastroEspecialistaPage}
            />
            <Route path="/cadastro-empresa" Component={CadastroEmpresaPage} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/consultas" Component={ConsultasPage} />
            <Route path="/treinamentos" Component={TreinamentosSection} />
            <Route path="/testes/:selectedTest" Component={TesteSection} />
            <Route path="/tenhoInteresse" Component={LeadsForm} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route
              path="/dadospessoais"
              Component={EspecialistaDadosPessoais}
            />
            <Route
              path="/dadosprofissionais"
              Component={EspecialistaDadosProfissionais}
            />
            <Route
              path="/dadosfinanceiros"
              Component={EspecialistaDadosFinanceiros}
            />
            <Route
              path="/dadosplanejamento"
              Component={EspecialistaDadosPlanejamento}
            />
            <Route path="/dadossessaoonline" Component={DadosSessaoOnline} />
            <Route
              path="/dadossessaopresencial"
              Component={DadosSessaoPresencial}
            />
            <Route path="/pagamento" Component={PagamentoPage} />
          </Routes>
        </NavbarProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
