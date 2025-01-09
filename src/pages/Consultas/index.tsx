import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import EspecialistaCard from "../../components/CardEspecialista";
import FiltroBusca from "../../components/FiltroBusca";
import { useGetAllEspecialistsQuery } from "../../services/especialist/especialistApiSlice";
import { Container } from "../CadastroEspecialista/style";
import { EspecialistaList } from "./style";

const ConsultasPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError, error, refetch } =
    useGetAllEspecialistsQuery();

  const [filtro, setFiltro] = useState({
    termo: "",
    tipoEspecialista: "",
    motivo: "",
  });

  const [especialistasFiltrados, setEspecialistasFiltrados] = useState([]);

  useEffect(() => {    
    setEspecialistasFiltrados(data);
  }, [data]);

  const handleFiltrar = (termo: string) => {
    const especialistasFiltrados = data.filter((especialista: any) =>
      especialista.nome.toLowerCase().includes(termo.toLowerCase())
    );
    setEspecialistasFiltrados(especialistasFiltrados);
    setFiltro({ ...filtro, termo });
  };

  const handleTipoEspecialistaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const tipoEspecialista = event.target.value;
    const especialistasFiltrados =
      tipoEspecialista === ""
        ? data
        : data.filter(
            (especialista: any) =>
              especialista.especialidade === tipoEspecialista
          );
    setEspecialistasFiltrados(especialistasFiltrados);
    setFiltro({ ...filtro, tipoEspecialista });
  };

  const handleMotivoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const motivo = event.target.value;
    const especialistasFiltrados =
      motivo === ""
        ? data
        : data.filter(
            (especialista: any) => especialista.motivoEspecialista === motivo
          );
    setEspecialistasFiltrados(especialistasFiltrados);
    setFiltro({ ...filtro, motivo });
  };

  return (
    <Container>
      <FiltroBusca
        onFiltrar={handleFiltrar}
        onTipoEspecialistaChange={handleTipoEspecialistaChange}
        onMotivoChange={handleMotivoChange}
      />

      <EspecialistaList>
        {/* Renderize a lista de especialistas filtrados */}
        {especialistasFiltrados &&
          especialistasFiltrados.map((especialista: any) => (
            <EspecialistaCard
              key={especialista.id}
              especialista={especialista}
            />
          ))}
      </EspecialistaList>
    </Container>
  );
};

export default ConsultasPage;
