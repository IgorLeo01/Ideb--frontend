import React, { useState } from "react";
import Navbar from '../../../components/Navbar/navbar';

import SideBar from "../../../components/EspecialistaConta/SideBar";

import MainContainer from "../../../components/EspecialistaConta/MainContainer";
import { BodyContainer } from "../../../components/EspecialistaConta/MainContainer/style";

import DataContainer from "../../../components/EspecialistaConta/DataContainer";
import { DataHeader } from "../../../components/EspecialistaConta/DataContainer/style";

import { SideBarContainer, SessionDataInfoContainer, TextContainer, 
    PrivateSessionContainer, PrivateValueContainer, PrivateValueModal,
    CorporativeSessionContainer, CheckboxContainer,
    SaveButton } from "./style";

const DadosSessaoOnline = () => {
    const [perfilPreenchido, setPerfilPreenchido] = useState(false);

    return (
        <MainContainer>            
            <BodyContainer>
                <SideBar perfilPreenchido={perfilPreenchido} />
                <DataContainer name="OSI">
                    <DataHeader>
                        <h1>Sessão online</h1>
                        <h2>Valores de sessões particulares e corporativas no formato online.</h2>
                    </DataHeader>
                    <SessionDataInfoContainer>
                        <TextContainer>
                            <h2>Sessão particular</h2>
                            <h3>Atenda clientes que não estão vinculados a empresas.</h3>
                        </TextContainer>
                        <PrivateSessionContainer>
                            <h1>Valor da sessão de 50 minutos</h1>
                            <PrivateValueContainer>
                                <input type="number" disabled/>
                                
                                <button>Alterar</button>
                            </PrivateValueContainer>
                        </PrivateSessionContainer>
                        <TextContainer>
                            <h2>Sessão corporativa</h2>
                            <h3>Atenda colaboradores de empresas e receba uma remuneração fixa nos atendimentos realizados.</h3>
                        </TextContainer>
                        <TextContainer>
                            <h1>Valor da sessão corporativa de 50 minutos</h1>
                            <h3>Selecione os valores que você aceita receber em sessões corporativas.</h3>
                        </TextContainer>
                        <CorporativeSessionContainer>
                            <CheckboxContainer>
                                <input type="checkbox" id="opt1"/>
                                <label htmlFor="opt1">R$ 40,00</label>
                            </CheckboxContainer>
                            <h3>+428.939 colaboradores cadastrados nesse plano</h3>
                        </CorporativeSessionContainer>
                        <CorporativeSessionContainer>
                            <CheckboxContainer>
                                <input type="checkbox" id="opt2"/>
                                <label htmlFor="opt2">R$ 50,00</label>
                            </CheckboxContainer>
                            <h3>+183.019 colaboradores cadastrados nesse plano</h3>
                        </CorporativeSessionContainer>
                        <CorporativeSessionContainer>
                            <CheckboxContainer>
                                <input type="checkbox" id="opt3"/>
                                <label htmlFor="opt3">R$ 60,00</label>
                            </CheckboxContainer>
                            <h3>+10.855 colaboradores cadastrados nesse plano</h3>
                        </CorporativeSessionContainer>
                        <CorporativeSessionContainer>
                            <CheckboxContainer>
                                <input type="checkbox" id="opt4"/>
                                <label htmlFor="opt4">R$ 70,00</label>
                            </CheckboxContainer>
                            <h3>+1.539 colaboradores cadastrados nesse plano</h3>
                        </CorporativeSessionContainer>
                        <SaveButton>SALVAR</SaveButton>
                    </SessionDataInfoContainer>
                </DataContainer>
                <SideBarContainer></SideBarContainer>
            </BodyContainer>
            
        </MainContainer>
    );
};
  
export default DadosSessaoOnline;