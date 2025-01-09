import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BackgroundImageM from "../../assets/backgroundMobile.png";
import BackgroundImageFundoBranco from "../../assets/sombra branca.png";
import { selectCurrentAuthState } from "../../services/auth/authSlice";
import { useGetTestResultsByEmpresaQuery } from "../../services/healthTest/testApiSlice";
import GraphicsBarsContainerEmpresa from "./ContainerBarEmpresa";
import ContainerLine from "./ContainerLine";
import GraphicsContainer from "./ContainerPie";
import GraphicsContainerEmpresa from "./ContainerPieEmpresa";
import {
  BackgroundImageMobile,
  CardContainer,
  Container,
  ContainerTop,
  Title,
} from "./style";

export default function Dashboard() {
  const [localMobileView, setLocalMobileView] = useState(
    window.innerWidth <= 667
  );
  const [numPessoasTestadas, setNumPessoasTestadas] = useState(0);
  const [mediaSaudeEmpresa, setMediaSaudeEmpresa] = useState("Saudável");

  const [selectedGraph, setSelectedGraph] = useState<string>("ansiedade");
  const [selectedGraphLine, setSelectedGraphLine] =
    useState<string>("ansiedade");

  const handleGraphButtonClick = (graphType: string) => {
    setSelectedGraph(graphType);
    setSelectedGraphLine(graphType);
  };

  const user = useSelector(selectCurrentAuthState);
  let userRoles: string[] = [];
  if (user) {
    userRoles = user.roles;
  }
  const { data, isLoading, isError, error } =
    useGetTestResultsByEmpresaQuery("COD123456");

  const fetchData = async () => {
    try {
      if(data){
        console.log(data);
        const uniqueClientes = new Set(data.map((result: any) => result.id));
        setNumPessoasTestadas(uniqueClientes.size);
  
        const totalPontuacao = data.reduce(
          (acc: number, curr: any) => acc + curr.pontuacao,
          0
        );
        const mediaSaude = totalPontuacao / data.length;
  
        // Ajuste para definir os títulos das médias de acordo com as pontuações
        if (mediaSaude <= 10) {
          setMediaSaudeEmpresa("Saudável");
        } else if (mediaSaude <= 20) {
          setMediaSaudeEmpresa("Atenção");
        } else if (mediaSaude <= 30) {
          setMediaSaudeEmpresa("Alerta");
        } else {
          setMediaSaudeEmpresa("Crítico");
        }
      }
    } catch (error) {
      console.error("Erro ao buscar os resultados dos testes:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const handleResize = () => {
      setLocalMobileView(window.innerWidth <= 667);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data, selectedGraph]);

  return (
    <>
      {localMobileView ? (
        <>
          <BackgroundImageMobile src={BackgroundImageM} alt="background" />
          <BackgroundImageMobile
            src={BackgroundImageFundoBranco}
            alt="background"
            style={{ zIndex: -1 }}
          />
          <Container>
            {user && userRoles.includes("ROLE_CLIENTE") ? (
              <>
                <ContainerTop>
                  <p className="title-head">Bem Estar</p>
                  <div className="buttons-container">
                    <button
                      className="Button-individual"
                      onClick={() => handleGraphButtonClick("ansiedade")}
                    >
                      <p className="text-button">Ansiedade</p>
                    </button>{" "}
                    <button
                      className="Button-individual"
                      onClick={() => handleGraphButtonClick("depressao")}
                    >
                      <p className="text-button">Depressão</p>
                    </button>
                    <button
                      className="Button-individual"
                      onClick={() => handleGraphButtonClick("estresse")}
                    >
                      <p className="text-button">Estresse</p>
                    </button>
                  </div>
                </ContainerTop>
                <CardContainer>
                  <GraphicsContainer selectedGraph={selectedGraph} />
                  <ContainerLine selectedGraphLine={selectedGraphLine} />
                </CardContainer>
              </>
            ) : user && userRoles.includes("ROLE_EMPRESA") ? (
              <>
                <ContainerTop>
                  {/* <p className="title-head">Bem Estar Corporativo</p> */}
                  <div className="buttons-container">
                    <button
                      className="Button-individual"
                      onClick={() =>
                        handleGraphButtonClick("ansiedade_empresa")
                      }
                    >
                      <p className="text-button">Ansiedade</p>
                    </button>{" "}
                    <button
                      className="Button-individual"
                      onClick={() =>
                        handleGraphButtonClick("depressao_empresa")
                      }
                    >
                      <p className="text-button">Depressão</p>
                    </button>
                    <button
                      className="Button-individual"
                      onClick={() => handleGraphButtonClick("estresse_empresa")}
                    >
                      <p className="text-button">Estresse</p>
                    </button>
                  </div>
                </ContainerTop>
                <GraphicsContainer selectedGraph={selectedGraph} />
              </>
            ) : user && userRoles.includes("ROLE_ESPECIALISTA") ? (
              <ContainerTop>
                <div className="Text-container">
                  <p className="text-1">Overview</p>
                  <p className="text-2">Dashboard Especialista</p>
                </div>
              </ContainerTop>
            ) : null}
          </Container>
        </>
      ) : (
        <>
          <BackgroundImageMobile src={BackgroundImageM} alt="background" />
          <Container>
            {user && userRoles.includes("ROLE_CLIENTE") ? (
              <>
                <Title>Bem Estar</Title>
                <CardContainer>
                  <p className="title-head">Ansiedade</p>
                  <div className="container-graphics">
                    <GraphicsContainer selectedGraph={"ansiedade"} />
                    <ContainerLine selectedGraphLine={"ansiedade"} />
                  </div>
                </CardContainer>
                <CardContainer>
                  <p className="title-head">Depressão</p>
                  <div className="container-graphics">
                    <GraphicsContainer selectedGraph={"depressao"} />
                    <ContainerLine selectedGraphLine={"depressao"} />
                  </div>
                </CardContainer>
                <CardContainer>
                  <p className="title-head">Estresse</p>
                  <div className="container-graphics">
                    <GraphicsContainer selectedGraph={"estresse"} />
                    <ContainerLine selectedGraphLine={"estresse"} />
                  </div>
                </CardContainer>
              </>
            ) : user && userRoles.includes("ROLE_EMPRESA") ? (
              <>
                <Title>Bem Estar Corporativo</Title>
                <CardContainer>
                  <p className="title-head">Ansiedade</p>
                  <div className="container-graphics">
                    <GraphicsContainerEmpresa
                      selectedGraph={"ansiedade_empresa"}
                    />
                    <GraphicsBarsContainerEmpresa
                      selectedGraph={"ansiedade_empresa"}
                    />
                  </div>
                </CardContainer>
                <CardContainer>
                  <p className="title-head">Depressão</p>
                  <div className="container-graphics">
                    <GraphicsContainerEmpresa
                      selectedGraph={"depressao_empresa"}
                    />
                    <GraphicsBarsContainerEmpresa
                      selectedGraph={"depressao_empresa"}
                    />
                  </div>
                </CardContainer>
                <CardContainer>
                  <p className="title-head">Estresse</p>
                  <div className="container-graphics">
                    <GraphicsContainerEmpresa
                      selectedGraph={"estresse_empresa"}
                    />
                    <GraphicsBarsContainerEmpresa
                      selectedGraph={"estresse_empresa"}
                    />
                  </div>
                </CardContainer>
              </>
            ) : user && userRoles.includes("ROLE_ESPECIALISTA") ? (
              <ContainerTop>
                <div className="Text-container">
                  <p className="text-1">Overview</p>
                  <p className="text-2">Dashboard Especialista</p>
                </div>
              </ContainerTop>
            ) : null}
          </Container>
        </>
      )}
    </>
  );
}
