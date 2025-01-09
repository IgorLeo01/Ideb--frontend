import React, { useState, ChangeEvent } from "react";
import Navbar from '../../../components/Navbar/navbar';
import { updateProfessionalData } from "../../../redux/thunks";
import SideBar from "../../../components/EspecialistaConta/SideBar";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../app/store";
import MainContainer from "../../../components/EspecialistaConta/MainContainer";
import { BodyContainer } from "../../../components/EspecialistaConta/MainContainer/style";

import DataContainer from "../../../components/EspecialistaConta/DataContainer";
import { DataHeader } from "../../../components/EspecialistaConta/DataContainer/style";

import { SideBarContainer, VerticalSeparator, ProfessionalInfoContainer,
    LeftSideContainer, RightSideContainer, SaveButton } from "./style";

const EspecialistaDadosProfissionais = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [perfilPreenchido, setPerfilPreenchido] = useState(false);
    const [profissionalData, setProfissionalData] = useState({
        profissao: "",
        idiomas: "",
        experiencias: "",
        especialidades: "",
        assinatura: "",
        formacao: "",
        resumo: "",
        descricao: ""
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfissionalData({
            ...profissionalData,
            [name]: value
        });
    };

    const handleSave = () => {
        //dispatch(updateProfessionalData(formData));
    };

    return (
        <MainContainer>        
            <BodyContainer>
            <SideBar perfilPreenchido={perfilPreenchido}/>
                <DataContainer name="PrIC">
                    <DataHeader>
                        <h1>Profissional</h1>
                        <h2>registros de sua formação, experiências e apresentação</h2>
                    </DataHeader>
                    <ProfessionalInfoContainer>
                        <LeftSideContainer>
                            <h1>Informações Profissionais</h1>
                            <div>
                                <select name="profissao" id="profissao" disabled>

                                </select>
                                <label htmlFor="profissao">Sua Profissão</label>

                                <select name="idiomas" id="idiomas">

                                </select>
                                <label htmlFor="idiomas">Idiomas de Fluência</label>

                                <select name="experiencias" id="experiencias">

                                </select>
                                <label htmlFor="experiencias">Experiências</label>

                                <select name="especialidades" id="especialidades">

                                </select>
                                <label htmlFor="especialidades">Especialidades</label>
                            </div>

                            <h1>Assinatura</h1>
                            <h2>Sua assinatura, que aparecerá nos recibos</h2>
                            <button>ENVIAR ASSINATURA</button>
                        </LeftSideContainer>
                        <RightSideContainer>
                            <div>
                                <h1>Formação Profissional</h1>
                                <h2>Adicione suas certificações na área da saúde mental.</h2>
                                <button>ADICIONAR FORMAÇÃO</button>
                            </div>
                            <div>
                                <h1>Resumo</h1>
                                <h2>Faça um convite aos clientes contando um pouco da sua experiência profissional e habilidades.</h2>
                                <textarea name="resumo" id="resumo" rows={5} cols={52}></textarea>
                            </div>
                            <div>
                                <h1>Descrição Pessoal</h1>
                                <h2>A descrição pessoal é exibida quando o cliente visualiza o seu perfil completo. Explique o objetivo da sua linha de atuação e sua trajetória de forma mais detalhada.</h2>
                                <textarea name="descricao" id="descricao" rows={10} cols={52}></textarea>
                            </div>
                        </RightSideContainer>
                        <SaveButton onClick={handleSave}>SALVAR</SaveButton>
                    </ProfessionalInfoContainer>
                </DataContainer>
                <SideBarContainer></SideBarContainer>
            </BodyContainer>
            
        </MainContainer>
    );
};
  
export default EspecialistaDadosProfissionais;