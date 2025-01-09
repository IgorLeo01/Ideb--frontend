import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { useGetTestResultsByEmpresaQuery } from "../../../services/healthTest/testApiSlice";

interface GraphicsContainerProps {
  selectedGraph: string;
}

interface TestResult {
  id: number;
  cliente?: {
    id: number;
    nome: string;
    email: string;
    dataTeste: number[];
    // Outros campos do cliente
  };
  codEmpresa: string;
  tipoTeste: string;
  pontuacao: number;
}

interface DataItem {
  value: number;
  relativeValue: number;
  label: string;
  id?: number;
}

const GraphicsContainer: React.FC<GraphicsContainerProps> = ({
  selectedGraph,
}) => {
  const [dataItem, setDataItem] = useState<DataItem[]>([]);
  const [healthState, setHealthState] = useState<string>("Saudável");
  const [media, setMedia] = useState<number>(0);
  const [totalTestes, setTotalTestes] = useState<number>(0);

  const calcularDistribuicao = (array: TestResult[]) => {
    const distribuicao: { [key: string]: number } = {
      leve: 0,
      moderado: 0,
      severo: 0,
      "muito severo": 0,
    };

    array.forEach((result) => {
      if (result.pontuacao >= 0 && result.pontuacao <= 10) {
        distribuicao.leve++;
      } else if (result.pontuacao >= 11 && result.pontuacao <= 20) {
        distribuicao.moderado++;
      } else if (result.pontuacao >= 21 && result.pontuacao <= 30) {
        distribuicao.severo++;
      } else if (result.pontuacao >= 31 && result.pontuacao <= 40) {
        distribuicao["muito severo"]++;
      }
    });

    const total = Object.values(distribuicao).reduce(
      (acc, curr) => acc + curr,
      0
    );

    const distribuicaoPercentual: DataItem[] = Object.entries(distribuicao).map(
      ([label, value]) => ({
        label,
        relativeValue: (value / total) * 100,
        value: value,
      })
    );

    return distribuicaoPercentual;
  };

  const { data, isLoading, isError, error } =
    useGetTestResultsByEmpresaQuery("COD123456");
  const fetchData = async () => {
    try {
      if (!data) {
        return;
      }
      const results: TestResult[] = data;

      let tipoTesteData: DataItem[] = [];

      const filteredResults = results.filter(
        (result) =>
          result.tipoTeste.toLowerCase() === selectedGraph.split("_")[0]
      );
      tipoTesteData = calcularDistribuicao(filteredResults);
      setTotalTestes(filteredResults.length);

      setDataItem(tipoTesteData);

      // Função para calcular a média baseada nas pontuações
      if (totalTestes === 0) {
        setHealthState("Sem dados");
        return;
      }

      const totalPontuacao = filteredResults.reduce(
        (acc, curr) => acc + curr.pontuacao,
        0
      );
      const mediaPontuacao = totalPontuacao / totalTestes;
      setMedia(mediaPontuacao);
      if (mediaPontuacao < 10) {
        setHealthState("Saudável");
      } else if (mediaPontuacao < 20) {
        setHealthState("Atenção");
      } else if (mediaPontuacao < 30) {
        setHealthState("Alerta");
      } else {
        setHealthState("Crítico");
      }
    } catch (error) {
      console.error("Erro ao buscar resultados do teste:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data, selectedGraph]);

  const renderGraph = () => {
    if (dataItem.length > 0) {
      return (
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.relativeValue.toFixed(1)}%`,
              data: dataItem,
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
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontWeight: "bold",
            },
          }}
        />
      );
    }
    return null;
  };

  const renderText = () => {
    return (
      <div className="text-container">
        <div className="summary">
          <h3>Sumário</h3>
          <p>
            <span className="dash-labels">Saúde Geral:</span> {healthState} (
            {media ? media.toFixed(2) : 0} pontos)
          </p>
          <p>
            <span className="dash-labels">Total de Testes:</span>{" "}
            {totalTestes || 0}
          </p>
        </div>

        <div className="data-items">
          {dataItem.map((item) => (
            <p key={item.label}>
              <span className="dash-labels">Casos {item.label}s:</span>{" "}
              {item.relativeValue
                ? item.relativeValue.toFixed(2) + "%"
                : "Sem dados"}{" "}
              ({totalTestes ? item.value : 0} casos)
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div className="PieChart-container">
        {renderText()}
        {renderGraph()}
      </div>
    </Container>
  );
};

export default GraphicsContainer;
