import { LineChart } from "@mui/x-charts";
import { Container } from "./style";
import { useGetTestResultsByEmpresaQuery } from "../../../services/healthTest/testApiSlice";
import { useEffect, useState } from "react";

interface LineContainerProps {
  selectedGraphLine: string;
}

interface TestResultAPI {
  id: number;
  cliente: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    celular: string;
    cpf: string;
    genero: string;
    roles: string[];
    codEmpresa: string;
    password: string;
    enabled: boolean;
    authorities: { authority: string }[];
    username: string;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
  };
  codEmpresa: string;
  tipoTeste: string;
  pontuacao: number;
  dataTeste: number[]; // Manter como number[]
}

export default function ContainerLine({
  selectedGraphLine,
}: LineContainerProps) {
  const [pontuacaoData, setPontuacaoData] = useState<TestResultAPI[]>([]);

  const { data, isLoading, isError, error } =
    useGetTestResultsByEmpresaQuery("COD123456");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          // Filtrar os resultados pelo tipo de teste selecionado
          const filteredData = data.filter(
            (result: TestResultAPI) =>
              result.tipoTeste.toLowerCase() === selectedGraphLine.toLowerCase()
          );
          setPontuacaoData(convertToTestResultAPI(filteredData));
        }
      } catch (error) {
        console.error("Erro ao buscar resultados do teste:", error);
      }
    };

    fetchData();
  }, [selectedGraphLine, data]);

  const convertToTestResultAPI = (results: any[]): TestResultAPI[] => {
    return results.map((result) => ({
      id: result.id,
      cliente: result.cliente,
      codEmpresa: result.codEmpresa,
      tipoTeste: result.tipoTeste,
      pontuacao: result.pontuacao,
      dataTeste: result.dataTeste, // Manter os dados como estão
    }));
  };

  const formatDataTeste = (dataTeste: number[]) => {
    const [year, month, day] = dataTeste;
    return `${day}/${month}/${year}`;
  };

  const renderGraph = () => {
    if (!pontuacaoData || pontuacaoData.length === 0) {
      return null;
    }

    const xAxisData = pontuacaoData.map((item, index) => ({
      label: formatDataTeste(item.dataTeste),
      value: index,
    }));

    const formattedData = {
      series: [
        {
          data: pontuacaoData.map((item) => item.pontuacao),
        },
      ],
    };

    return (
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={formattedData.series}
        height={300}
      />
    );
  };

  return (
    <Container>
      <div className="LineChart-container">{selectedGraphLine && renderGraph()}</div>
    </Container>
  );
}