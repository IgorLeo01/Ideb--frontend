import { Feedback } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUserId } from "../../services/auth/authSlice";
import { useSendTestResultMutation } from "../../services/healthTest/testApiSlice";
import questionsData from "./questionsData.json";
import "./style.css";

interface Answer {
  text: string;
  score: number;
}

interface Interpretations{
  topic: string,
  explanation: string
}
interface Feedback {
  minScore: number,
  maxScore: number,
  introduction: string,
  interpretations: Interpretations[],
  advice: string,
  complement: string,
  lastPhrase: string,
}

interface Question {
  text: string;
  answers: Answer[];
}

interface QuestionsData {
  [key: string]: Question[];
}

interface Props {
  selectedTest: string;
}

interface TestData {
  cliente: {
    id: number;
  };
  codEmpresa: string;
  tipoTeste: string;
  pontuacao: number;
}

export default function QuestionsContainer({ selectedTest }: Props) {
  const QuestionnaireComponent = () => {
    const [sendTestResults, {isLoading}] = useSendTestResultMutation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [progress, setProgress] = useState(0);
    const [feedback, setFeedback] = useState<Feedback>();
    const navigate = useNavigate();

    const getQuestionsForTest = (testType: string) => {
      switch (testType) {
        case "ansiedade":
          return questionsData.Ansiedade.questions;
        case "estresse":
          return questionsData.Estresse.questions;
        case "depressao":
          return questionsData.depressao.questions;
        default:
          return [];
      }
    };

    const getFeedbackForTest = (testType: string) => {
      switch (testType) {
        case "ansiedade":
          return questionsData.Ansiedade.feedbacks;
        case "estresse":
          return questionsData.Estresse.feedbacks;
        case "depressao":
          return questionsData.depressao.feedbacks;
        default:
          return [];
      }
    };

    const calculateFeedback = (feedback: Feedback[]) => {
      const relevantFeedback = feedback.find(
        (f) => score >= f.minScore && score <= f.maxScore
      );
      return relevantFeedback      
    };
    
    const currentQuestions = getQuestionsForTest(selectedTest);
    const currentFeedbacks = getFeedbackForTest(selectedTest);

    const handleAnswerSelection = (selectedScore: any) => {
      setScore(score + selectedScore);
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      const newProgress =
        ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
      setProgress(newProgress);

      if (currentQuestionIndex === currentQuestions.length - 1) {
        setFeedback(calculateFeedback(currentFeedbacks));
        handleTestCompletion();
      }

    };

    const getUserId = useSelector(selectCurrentUserId);

    const handleTestCompletion = async () => {
      try {
        const userId = getUserId || 0;
        if (userId !== undefined) {
          const testData: TestData = {
            cliente: {
              id: userId,
            },
            codEmpresa: "COD123456",
            tipoTeste: selectedTest,
            pontuacao: score,
          };

          console.log("TestData:", testData);
          const response = await sendTestResults(testData).unwrap();
          console.log(response);
        } else {
          console.error("ID do usuário não encontrado. Não é possível enviar os resultados.");
        }
      } catch (error) {
        console.error("Erro ao enviar resultados para o backend:", error);
      }
    };


    return (
      <div className="questionnaire-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>

        {currentQuestionIndex < currentQuestions.length ? (
          <>
            <p className="Text">
              {currentQuestions[currentQuestionIndex].text}
            </p>
            {currentQuestions[currentQuestionIndex].answers.map(
              (answer, index) => (
                <dl
                  key={index}
                  onClick={() => handleAnswerSelection(answer.score)}
                >
                  <button className="btn">
                    <dt className="text-Button">{answer.text}</dt>
                  </button>
                </dl>
              )
            )}
          </>
        ) : (
          <>
            <p className="Text">Questionário concluído! Pontuação: {score}</p>
            <p className="Text">{feedback?.introduction}</p>
            <div>
              <p className="Text">Resultado</p>

              <ul>
                {feedback?.interpretations.map((value, index) => (
                  <li key={index}>
                    <strong>{value.topic}</strong>: {value.explanation}
                  </li>
                ))}
              </ul>
              <p className="Text"><strong>Conselho:</strong> {feedback?.advice}</p>
              <p className="Text"><strong>Complemento Psicológico: </strong>{feedback?.complement}</p>
              <p className="Text">
                <strong>{feedback?.lastPhrase}</strong>
              </p>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div>
        <QuestionnaireComponent />
      </div>
    </>
  );
}
