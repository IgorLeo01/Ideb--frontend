import {
  BackgroundImage,
  BackgroundImageMobile,
  BackgroundImageWoman,
  BodyContainer,
  CardTestAll,
} from "./style";
import BackgroundImageMulher from "../../assets/Mulher.png";
import BackgroundImageFundoBranco from "../../assets/sombra branca.png";
import BackgroundImageM from "../../assets/backgroundMobile.png";
import backgroundImageSrc from "../../assets/Terapia on-line.png";
import { useEffect, useState } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import QuestionsContainer from "../../components/questionsContainer";
import { useParams } from "react-router-dom";
import { BckWith } from "../../components/HomeSection/style";
import Navbar from "../../components/Navbar/navbar";

export default function TesteSection() {
  const [localMobileView, setLocalMobileView] = useState(
    window.innerWidth <= 667
  );
  const [showQuestions, setShowQuestions] = useState(false);
  const { selectedTest } = useParams();
  const PASSWORD = "idebbrasil";
  const [passwordInput, setPasswordInput] = useState("");
  const [isPasswordPromptOpen, setIsPasswordPromptOpen] = useState(false);

  const checkPassword = () => passwordInput === PASSWORD;

  const handleButtonClick = () => {
    // setShowQuestions(true);
    setIsPasswordPromptOpen(true);
  };

  const handlePasswordSubmit = () => {
    if (checkPassword()) {
      setShowQuestions(true);
      setIsPasswordPromptOpen(false);
    } else {
      alert("Senha incorreta!");
      setPasswordInput("");
      setIsPasswordPromptOpen(false);
    }
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

  return (
    <>
      {localMobileView ? (
        <>
          <BackgroundImageMobile src={BackgroundImageM} alt="background" />
          <BackgroundImageMobile
            src={BackgroundImageMulher}
            alt="background"
            style={{ zIndex: -2, marginLeft: "20%" }}
          />
          <BackgroundImageMobile
            src={BackgroundImageFundoBranco}
            alt="background"
            style={{ zIndex: -1 }}
          />
          <BodyContainer id="zero">
            {showQuestions ? (
              <CardTestAll>
                {selectedTest ? (
                  <QuestionsContainer selectedTest={selectedTest} />
                ) : (
                  <p>Erro: Teste não selecionado</p>
                )}
              </CardTestAll>
            ) : isPasswordPromptOpen ? (
              <CardTestAll>
                <div className="content">
                  <p className="title">Digite a senha para iniciar o teste:</p>
                  <input
                    className="testPassword"
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                  />
                  <button className="Button-C-1" onClick={handlePasswordSubmit}>
                    <div className="Icon-C">
                      <FlagIcon sx={{ color: "#1c5985" }} fontSize="small" />
                    </div>
                    <p className="text-C">Começar o teste</p>
                  </button>
                </div>
              </CardTestAll>
            ) : (
              <CardTestAll>
                <div className="content">
                  <p className="title">
                    Questionário Integrativo de Avaliação de {selectedTest} (QIA
                    {selectedTest?.charAt(0).toUpperCase()})
                  </p>
                  <div>
                    <p className="Text">
                      <strong>ATENÇÃO</strong>
                    </p>
                    <p className="Text">
                      esse TESTE NÃO SUBSTITUI o diagnóstico realizado por um{" "}
                      <strong>Profissional Qualificado</strong>
                    </p>
                    <p className="Text">
                      <strong>Instruções</strong>: Responda às seguintes
                      afirmações com base em sua experiência nas últimas duas
                      semanas, utilizando a seguinte escala:
                    </p>
                    <ul>
                      <li>0 = Nunca</li>
                      <li>1 = Raramente</li>
                      <li>2 = Às vezes</li>
                      <li>3 = Frequentemente</li>
                      <li>4 = Sempre</li>
                    </ul>
                  </div>
                  <button className="Button-C-1" onClick={handleButtonClick}>
                    <div className="Icon-C">
                      <FlagIcon sx={{ color: "#1c5985" }} fontSize="small" />
                    </div>
                    <p className="text-C">Começar o teste</p>
                  </button>
                </div>
              </CardTestAll>
            )}
          </BodyContainer>
        </>
      ) : (
        <>          
          <BackgroundImageMobile src={BackgroundImageM} alt="background" />
          <BackgroundImageWoman
            src={BackgroundImageMulher}
            alt="background"
            style={{ zIndex: -2, marginLeft: "55%" }}
          />
          <BackgroundImageMobile
            src={BackgroundImageFundoBranco}
            alt="background"
            style={{ zIndex: -1 }}
          />
          <BodyContainer id="zero">
            {showQuestions ? (
              <CardTestAll>
                {selectedTest ? (
                  <QuestionsContainer selectedTest={selectedTest} />
                ) : (
                  <p>Erro: Teste não selecionado</p>
                )}
              </CardTestAll>
            ) : isPasswordPromptOpen ? (
              <CardTestAll>
                <div className="content">
                  <p className="title">Digite a senha para iniciar o teste:</p>
                  <input
                    className="testPassword"
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                  />
                  <button className="Button-C-1" onClick={handlePasswordSubmit}>
                    <div className="Icon-C">
                      <FlagIcon sx={{ color: "#1c5985" }} fontSize="small" />
                    </div>
                    <p className="text-C">Começar o teste</p>
                  </button>
                </div>
              </CardTestAll>
            ) : (
              <CardTestAll>
                <div className="content">
                  <p className="title">
                    Questionário Integrativo de Avaliação de {selectedTest} (QIA
                    {selectedTest?.charAt(0).toUpperCase()})
                  </p>
                  <div>
                    <p className="Text">
                      <strong>ATENÇÃO</strong>
                    </p>
                    <p className="Text">
                      esse TESTE NÃO SUBSTITUI o diagnóstico realizado por um{" "}
                      <strong>Profissional Qualificado</strong>
                    </p>
                    <p className="Text">
                      <strong>Instruções</strong>: Responda às seguintes
                      afirmações com base em sua experiência nas últimas duas
                      semanas, utilizando a seguinte escala:
                    </p>
                    <ul>
                      <li>0 = Nunca</li>
                      <li>1 = Raramente</li>
                      <li>2 = Às vezes</li>
                      <li>3 = Frequentemente</li>
                      <li>4 = Sempre</li>
                    </ul>
                  </div>
                  <button className="Button-C-1" onClick={handleButtonClick}>
                    <div className="Icon-C">
                      <FlagIcon sx={{ color: "#1c5985" }} fontSize="small" />
                    </div>
                    <p className="text-C">Começar o teste</p>
                  </button>
                </div>
              </CardTestAll>
            )}
          </BodyContainer>
        </>
      )}
    </>
  );
}
