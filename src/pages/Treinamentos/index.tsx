import {
  BackgroundImage,
  BackgroundImageMobile,
  BodyContainer,
  Card,
  CardTestAll,
  Title,
} from "./style";
import BackgroundImageMulher from "../../assets/Mulher.png";
import BackgroundImageFundoBranco from "../../assets/sombra branca.png";
import BackgroundImageM from "../../assets/backgroundMobile.png";
import backgroundImageSrc from "../../assets/Terapia on-line.png";
import { useEffect, useState } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import QuestionsContainer from "../../components/questionsContainer";
import { useParams } from "react-router-dom";

// Lista de nomes para os cards
const trainingItems = [
  "Aumente seu foco e concentração",
  "Controle a ansiedade",
  "Melhore seu nível de comunicação",
  "Persuasão e vendas",
  "Controle suas emoções",
  "Entenda seus pais",
  "Entenda seus filhos"
];

export default function TreinamentosSection() {
  const [localMobileView, setLocalMobileView] = useState(
    window.innerWidth <= 667
  );
  const [showQuestions, setShowQuestions] = useState(false);
  const { selectedTest } = useParams();

  const handleButtonClick = () => {
    setShowQuestions(true);
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
            <CardTestAll>
              <Title>Sua área de treinamento</Title>
              {trainingItems.map((item) => (
                <Card key={item}>{item}</Card>
              ))}
            </CardTestAll>
          </BodyContainer>
        </>
      ) : (
        <>
          <BackgroundImage src={backgroundImageSrc} alt="background" />
          <BodyContainer id="zero"></BodyContainer>
        </>
      )}
    </>
  );
}
