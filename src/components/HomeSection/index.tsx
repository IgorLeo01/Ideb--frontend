import {
  BackgroundImage,
  BackgroundImageMobile,
  BodyContainer,
  ContainerSub,
  TestesContainer,
  AnotherContainer,
  ContainerAll,
  BackgroundImageWoman,
  BckWith,
  ContainerElements,
  ContainerAllEx,
  ContainerSubB,
  TestesContainerTwo,
  ContainerElementsTwo,
} from "./style";
import logo from "../../assets/LogoIdebATT.png";
import ButtonContact from "../Button";
import specialist from "../../assets/especialista.png";
import client from "../../assets/perfil.png";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImageMulher from "../../assets/Mulher.png";
import BackgroundImageFundoBranco from "../../assets/sombra branca.png";
import BackgroundImageM from "../../assets/backgroundMobile.png";
import backgroundImageSrc from "../../assets/Terapia on-line.png";
import sepi from "../../assets/logo-SEPI.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useEffect, useState } from "react";
import {
  CustomReactModal,
  ModalContent,
  ModalOption,
  StyledLink,
} from "../Navbar/style";
import company from "../../assets/empresa.png";
import userIcon from "../../assets/add_user.png";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { PersonAdd, SupportAgent } from "@mui/icons-material";
import { selectCurrentToken } from "../../services/auth/authSlice";
// import Popup from "../PopUp/popUp";

const HomeSection: React.FC<any> = ({ onOpenCreateAccountModal }) => {
  const navigate = useNavigate();
  const [isCreateAccountModalOpen, setCreateAccountModalOpen] = useState(false);

  const isAuthenticated = useSelector(selectCurrentToken);

  const openCreateAccountModal = () => {
    setCreateAccountModalOpen(true);
  };

  const closeCreateAccountModal = () => {
    setCreateAccountModalOpen(false);
  };

  const handleContactClick = () => {
    console.log("Botão de contato clicado!");
    // Adicione mais lógica conforme necessário
  };
  const [localMobileView, setLocalMobileView] = useState(
    window.innerWidth <= 667
  );

  const handleRedirectAgendarConsulta = () => {
    navigate("/consultas");
  };

  const handleRedirectTraining = () => {
    navigate("/treinamentos");
  };

  useEffect(() => {
    const handleResize = () => {
      setLocalMobileView(window.innerWidth <= 667);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {};

  return (
    <>
      {/* <Popup /> */}
      {localMobileView ? (
        <>
          <BackgroundImageMobile src={BackgroundImageM} alt="background" />{" "}
          <BackgroundImageMobile
            src={BackgroundImageMulher}
            alt="background"
            style={{ zIndex: -2, marginLeft: "20%" }}
          />{" "}
          <BackgroundImageMobile
            src={BackgroundImageFundoBranco}
            alt="background"
            style={{ zIndex: -1 }}
          />{" "}
          <BodyContainer id="zero">
            <ContainerAll>
              <div className="Container-Position-A">
                <AnotherContainer>
                  <button
                    className="Button-C-1"
                    onClick={handleRedirectAgendarConsulta}
                  >
                    <div className="Icon-C">
                      <CalendarMonthIcon sx={{ color: "#1c5985" }} />
                    </div>
                    <p className="text-C">Agende sua consulta</p>
                  </button>
                  <button className="Button-C" onClick={openCreateAccountModal}>
                    <div className="Icon-C-1">
                      <PersonAdd sx={{ color: "#1c5985" }} />
                    </div>
                    <p className="text-C">Criar Conta</p>
                  </button>
                  <button className="Button-C" onClick={handleRedirectTraining}>
                    <div className="Icon-C-1">
                      <SupportAgent sx={{ color: "#1c5985" }} />
                    </div>
                    <p className="text-C">Treinamentos</p>
                  </button>
                </AnotherContainer>
                <CustomReactModal
                  isOpen={isCreateAccountModalOpen}
                  onRequestClose={closeCreateAccountModal}
                  contentLabel="Opções de Cadastro"
                >
                  <ModalContent>
                    <ModalOption>
                      <StyledLink to="/cadastro-cliente">
                        <img src={client} alt="Client" />
                        Cliente
                      </StyledLink>
                    </ModalOption>
                    <ModalOption>
                      <StyledLink to="/cadastro-especialista">
                        <img src={specialist} alt="Specialist" />
                        Especialista
                      </StyledLink>
                    </ModalOption>
                    <ModalOption>
                      <StyledLink to="/cadastro-empresa">
                        <img src={company} alt="Company" />
                        Empresa
                      </StyledLink>
                    </ModalOption>
                  </ModalContent>
                </CustomReactModal>
              </div>
              <div className="Container-Position">
                <ContainerSub>
                  <div className="conjunto">
                    <div className="topo">
                      <>
                        <p className="text-Subscribe-p-1">Estágio</p>
                        <p className="text-Subscribe-p">Remunerado</p>
                      </>
                    </div>
                    <button className="Button-Subscribe">
                      <div className="Icon-subscribe">
                        <AdsClickIcon sx={{ color: "#fff" }} fontSize="small" />
                      </div>
                      <p className="text-Subscribe">Inscreva-se</p>
                    </button>
                  </div>
                  <div className="conjunto">
                    <div className="topo">
                      <>
                        <p className="text-Subscribe-p-1">Psicoterapia</p>
                        <p className="text-Subscribe-p">Integrativa</p>
                      </>
                    </div>
                    <button className="Button-Subscribe">
                      <div className="Icon-subscribe">
                        <WorkspacePremiumIcon
                          sx={{ color: "#fff" }}
                          fontSize="small"
                        />
                      </div>
                      <p className="text-Subscribe">Matricule-se</p>
                    </button>
                  </div>
                </ContainerSub>
                <TestesContainer>
                  {/* {isAuthenticated ? ( */}
                  <>
                    <Link
                      to="/testes/ansiedade"
                      className="LinkWithoutUnderline"
                    >
                      <button className="Button-Teste">
                        <p className="text-teste">
                          <strong>Teste</strong> de ansiedade
                        </p>
                      </button>
                    </Link>
                    <Link
                      to="/testes/depressao"
                      className="LinkWithoutUnderline"
                    >
                      <button className="Button-Teste">
                        <p className="text-teste">
                          <strong>Teste</strong> de depressão
                        </p>
                      </button>
                    </Link>
                    <Link
                      to="/testes/estresse"
                      className="LinkWithoutUnderline"
                    >
                      <button className="Button-Teste">
                        <p className="text-teste">
                          <strong>Teste</strong> de estresse
                        </p>
                      </button>
                    </Link>
                  </>
                  {/* ) : ( */}
                  {/* <>
                      <Link to="/login" className="LinkWithoutUnderline">
                        <button className="Button-Teste">
                          <p className="text-teste">
                            <strong>Teste</strong> de ansiedade
                          </p>
                        </button>
                      </Link>
                      <Link to="/login" className="LinkWithoutUnderline">
                        <button className="Button-Teste">
                          <p className="text-teste">
                            <strong>Teste</strong> de depressão
                          </p>
                        </button>
                      </Link>
                      <Link to="/login" className="LinkWithoutUnderline">
                        <button className="Button-Teste">
                          <p className="text-teste">
                            <strong>Teste</strong> de estresse
                          </p>
                        </button>
                      </Link>
                    </>
                  )} */}
                </TestesContainer>
              </div>
            </ContainerAll>
            <footer className="footer-mobile">
              {/* <p className="footer-p">OUTROS</p> */}
            </footer>
          </BodyContainer>
        </>
      ) : (
        <>
          <BackgroundImage src={BackgroundImageM} alt="background" />
          <BackgroundImageWoman
            src={BackgroundImageMulher}
            alt="background"
            style={{ zIndex: -2, marginLeft: "55%" }}
          />
          <BckWith
            src={BackgroundImageFundoBranco}
            alt="background"
            style={{ zIndex: -1 }}
          />
          <BodyContainer id="zero">
            <ContainerAllEx>
              <div className="Container-Position-A">
                <ContainerElementsTwo>
                  <button className="Button-C" onClick={handleRedirectTraining}>
                    <div className="Icon-C-1">
                      <SupportAgent sx={{ color: "#1c5985" }} />
                    </div>
                    <p className="text-C">Treinamentos</p>
                  </button>
                </ContainerElementsTwo>
                <CustomReactModal
                  isOpen={isCreateAccountModalOpen}
                  onRequestClose={closeCreateAccountModal}
                  contentLabel="Opções de Cadastro"
                  className="CustomReactModal"
                >
                  <ModalContent>
                    <ModalOption>
                      <StyledLink to="/cadastro-cliente">
                        <img src={client} alt="Client" />
                        Cliente
                      </StyledLink>
                    </ModalOption>
                    <ModalOption>
                      <StyledLink to="/cadastro-especialista">
                        <img src={specialist} alt="Specialist" />
                        Especialista
                      </StyledLink>
                    </ModalOption>
                    <ModalOption>
                      <StyledLink to="/cadastro-empresa">
                        <img src={company} alt="Company" />
                        Empresa
                      </StyledLink>
                    </ModalOption>
                  </ModalContent>
                </CustomReactModal>
              </div>
              <div className="Container-Position">
                <ContainerSubB>
                  <div className="conjunto">
                    <div className="topo">
                      <>
                        <p className="text-Subscribe-p-1">Estágio</p>
                        <p className="text-Subscribe-p">Remunerado</p>
                      </>
                    </div>
                    <button className="Button-Subscribe">
                      <div className="Icon-subscribe">
                        <AdsClickIcon sx={{ color: "#fff" }} fontSize="large" />
                      </div>
                      <p className="text-Subscribe">Inscreva-se</p>
                    </button>
                  </div>
                  <div className="conjunto">
                    <div className="topo">
                      <>
                        <p className="text-Subscribe-p-1">Psicoterapia</p>
                        <p className="text-Subscribe-p">Integrativa</p>
                      </>
                    </div>
                    <button className="Button-Subscribe">
                      <div className="Icon-subscribe">
                        <WorkspacePremiumIcon
                          sx={{ color: "#fff" }}
                          fontSize="large"
                        />
                      </div>
                      <p className="text-Subscribe">Matricule-se</p>
                    </button>
                  </div>
                </ContainerSubB>
                <TestesContainerTwo>
                  {/* {isAuthenticated ? ( */}
                  <>
                    <Link
                      to="/testes/ansiedade"
                      className="LinkWithoutUnderline"
                    >
                      <button className="Button-Teste">
                        <p className="text-teste">
                          <strong>Teste</strong> de
                        </p>
                        <p className="text-teste">ansiedade</p>
                      </button>
                    </Link>
                    <Link
                      to="/testes/depressao"
                      className="LinkWithoutUnderline"
                    >
                      <button className="Button-Teste">
                        <p className="text-teste">
                          <strong>Teste</strong> de
                        </p>
                        <p className="text-teste">depressão</p>
                      </button>
                    </Link>
                    <Link
                      to="/testes/estresse"
                      className="LinkWithoutUnderline"
                    >
                      <button className="Button-Teste">
                        <p className="text-teste">
                          <strong>Teste</strong> de
                        </p>
                        <p className="text-teste">estresse</p>
                      </button>
                    </Link>
                  </>
                  {/* ) : ( */}
                  {/* <>
                      <Link to="/login" className="LinkWithoutUnderline">
                        <button className="Button-Teste">
                          <p className="text-teste">
                            <strong>Teste</strong> de ansiedade
                          </p>
                        </button>
                      </Link>
                      <Link to="/login" className="LinkWithoutUnderline">
                        <button className="Button-Teste">
                          <p className="text-teste">
                            <strong>Teste</strong> de depressão
                          </p>
                        </button>
                      </Link>
                      <Link to="/login" className="LinkWithoutUnderline">
                        <button className="Button-Teste">
                          <p className="text-teste">
                            <strong>Teste</strong> de estresse
                          </p>
                        </button>
                      </Link>
                    </>
                  )} */}
                </TestesContainerTwo>
              </div>
            </ContainerAllEx>
          </BodyContainer>
        </>
      )}
    </>
  );
};

export default HomeSection;
