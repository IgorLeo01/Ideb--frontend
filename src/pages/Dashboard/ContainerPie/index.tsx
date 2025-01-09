import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { useGetTestResultsByEmpresaQuery } from "../../../services/healthTest/testApiSlice";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

interface GraphicsContainerProps {
  selectedGraph: string;
}

interface DataItem {
  value: number;
  label: string;
  id?: number;
}

interface TestResult {
  tipoTeste: string;
  pontuacao: number;
}

export default function GraphicsContainer({
  selectedGraph,
}: GraphicsContainerProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [media, setMedia] = useState<number>(0);
  const [healthState, setHealthState] = useState<string>("");
  const { data: results, isLoading, isError, error } = useGetTestResultsByEmpresaQuery("COD123456");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (results) {
          const filteredResults = results.filter(
            (result: { tipoTeste: string }) =>
              result.tipoTeste.toLowerCase() === selectedGraph.split("_")[0]
          );

          const average = calculateAverage(filteredResults);
          setMedia(average);
          determineHealthState(average);

          // Atualizar dados para exibir no gráfico
          updateChartData(average);
        }
      } catch (error) {
        console.error("Erro ao buscar resultados do teste:", error);
      }
    };

    fetchData();
  }, [selectedGraph, results]);

  // Função para calcular a média dos valores dos testes
  const calculateAverage = (results: TestResult[]): number => {
    if (results.length === 0) return 0;
    const totalPontuacao = results.reduce(
      (acc, curr) => acc + curr.pontuacao,
      0
    );
    return totalPontuacao / results.length;
  };

  // Função para determinar o estado de saúde com base na média
  const determineHealthState = (average: number) => {
    if (average < 10) {
      setHealthState("Saudável");
    } else if (average < 20) {
      setHealthState("Atenção");
    } else if (average < 30) {
      setHealthState("Alerta");
    } else {
      setHealthState("Crítico");
    }
  };

  // Função para atualizar dados para exibir no gráfico
  const updateChartData = (average: number) => {
    // Calcular o valor restante para preencher 100% do gráfico
    const remainingValue = 100 - average;

    // Calcular a porcentagem de cada item
    const dataWithRelativeValue = [
      { label: "Nível Atual", value: average, relativeValue: average },
      { label: "Nível Máximo", value: remainingValue, relativeValue: remainingValue },
    ];

    // Atualizar dados para exibir no gráfico
    setData(dataWithRelativeValue);
  };

  const renderGraph = () => {
    if (data.length > 0) {
      return (
        <>
          <PieChart
            series={[
              {
                data,
                innerRadius: 30,
                arcLabelMinAngle: 45,
                outerRadius: 100,
                paddingAngle: 3,
                cornerRadius: 5,
              },
            ]}
            width={400}
            height={200}
            sx={{
              [`&.${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "bold",
              },
            }}
          />
        </>
      );
    }
    return null;
  };

  const renderText = () => {
    if (data.length > 0) {
      return (
        <div className="text-container">
          <div className="summary">
            <h3>Sumário</h3>
            <p>{healthState!== "" && `Estado de Saúde: ${healthState}`}</p>
            {determineIcon(data[0].value)}
          </div>
        </div>
      );
    }
    return null;
  };

  const determineIcon = (value: number) => {
    if (value >= 0 && value <= 20) {
      return <SentimentVerySatisfiedIcon />;
    } else if (value >= 21 && value <= 31) {
      return <SentimentSatisfiedAltIcon />;
    } else if (value >= 32 && value <= 41) {
      return <SentimentNeutralIcon />;
    } else if (value >= 42 && value <= 60) {
      return <SentimentDissatisfiedIcon />;
    } else {
      return <SentimentVeryDissatisfiedIcon />;
    }
  };

  return (
    <Container>
      <div className="PieChart-container">
        {renderText()}
        {renderGraph()}
      </div>
    </Container>
  );
}