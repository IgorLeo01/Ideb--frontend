import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Container } from "./style";
import { useGetTestResultsByEmpresaQuery } from "../../../services/healthTest/testApiSlice";

interface GraphicsContainerProps {
  selectedGraph: string;
}

interface TestResult {
  id: number;
  codEmpresa: string;
  tipoTeste: string;
  pontuacao: number;
}

const GraphicsBarsContainerEmpresa: React.FC<GraphicsContainerProps> = ({
  selectedGraph,
}: GraphicsContainerProps) => {
  const [dataItem, setDataItem] = React.useState<{ [key: string]: number[] }>(
    {}
  );
  const [totalTests, setTotalTests] = React.useState<{ [key: string]: number }>(
    {}
  );
  const { data, isLoading, isError, error } =
    useGetTestResultsByEmpresaQuery("COD123456");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (!data) return;

        const results: TestResult[] = data;

        const processData = () => {
          const newData: { [key: string]: number[] } = {};
          const newTotalTests: { [key: string]: number } = {};

          let filteredResults: TestResult[] = [];
          let testType = "";
          switch (selectedGraph) {
            case "ansiedade_empresa":
              filteredResults = results.filter(
                (result) => result.tipoTeste.toLowerCase() === "ansiedade"
              );
              testType = "ansiedade";
              break;
            case "depressao_empresa":
              filteredResults = results.filter(
                (result) => result.tipoTeste.toLowerCase() === "depressao"
              );
              testType = "depressao";
              break;
            case "estresse_empresa":
              filteredResults = results.filter(
                (result) => result.tipoTeste.toLowerCase() === "estresse"
              );
              testType = "estresse";
              break;
            default:
              return;
          }

          filteredResults.forEach((result) => {
            if (!newData[testType]) {
              newData[testType] = [0, 0, 0, 0];
              newTotalTests[testType] = 0;
            }

            if (result.pontuacao >= 0 && result.pontuacao <= 10) {
              newData[testType][0]++;
            } else if (result.pontuacao >= 11 && result.pontuacao <= 20) {
              newData[testType][1]++;
            } else if (result.pontuacao >= 21 && result.pontuacao <= 30) {
              newData[testType][2]++;
            } else if (result.pontuacao >= 31 && result.pontuacao <= 40) {
              newData[testType][3]++;
            }

            newTotalTests[testType]++;
          });

          setDataItem(newData);
          setTotalTests(newTotalTests);
        };

        processData();
      } catch (error) {
        console.error("Erro ao buscar resultados do teste:", error);
      }
    };

    fetchData();
  }, [data, selectedGraph]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const renderGraph = () => {
    return (
      <>
        {Object.keys(dataItem).map((type) => (
          <div key={type} className="BarChart-container">
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Leve", "Moderado", "Severo", "Muito Severo"],
                },
              ]}
              series={[{ data: dataItem[type] }]}
              width={500}
              height={300}
            />
          </div>
        ))}
      </>
    );
  };

  return <Container>{renderGraph()}</Container>;
};

export default GraphicsBarsContainerEmpresa;
