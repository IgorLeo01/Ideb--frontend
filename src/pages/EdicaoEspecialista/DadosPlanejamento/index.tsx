import React, { useState } from "react";
import Navbar from '../../../components/Navbar/navbar';

import SideBar from "../../../components/EspecialistaConta/SideBar";

import MainContainer from "../../../components/EspecialistaConta/MainContainer";
import { BodyContainer } from "../../../components/EspecialistaConta/MainContainer/style";

import DataContainer from "../../../components/EspecialistaConta/DataContainer";
import { DataHeader } from "../../../components/EspecialistaConta/DataContainer/style";

import { SideBarContainer, BankInfoContainer, PlanningInfoContainer, CheckboxContainer, SelectorClusterContainer,DataSelectorContainer,
    LeftSideContainer, AccountContainer, RightSideContainer, PIXInputContainer, PIXSelectorContainer, PJSelector, 
    SaveButton, CancelButton } from "./style";

const EspecialistaDadosPlanejamento = () => {
    const [perfilPreenchido, setPerfilPreenchido] = useState(false);

    return (
        <MainContainer>            
            <BodyContainer>
            <SideBar perfilPreenchido={perfilPreenchido} />
                <DataContainer name="PIF">
                    <DataHeader>
                        <h1>Plano e sessão</h1>
                        <h2>Configurações de sessões particulares e corporativas aplicadas em atendimento online e presencial.</h2>
                    </DataHeader>
                    <PlanningInfoContainer>
                        <CheckboxContainer>
                            <h1>Configurações gerais</h1>
                            <div>
                                <input type="checkbox" form="PIF" id="newclientswitch"/>
                                <label htmlFor="newclientswitch">Aceito receber novos clientes (corporativo e particular)</label>
                            </div>
                        </CheckboxContainer>
                        <SelectorClusterContainer>
                            <DataSelectorContainer>
                                <h1>Antecedência para agendamentos</h1>
                                <div>
                                    <select name="agendamento" id="agendamento">

                                    </select>
                                    <label htmlFor="agendamento">Tempo de antecedência</label>
                                </div>
                            </DataSelectorContainer>
                            <DataSelectorContainer>
                                <h1>Antecedência para reagendamentos</h1>
                                <div>
                                    <select name="reagendamento" id="reagendamento">

                                    </select>
                                    <label htmlFor="reagendamento">Tempo de antecedência</label>
                                </div>
                            </DataSelectorContainer>
                            <DataSelectorContainer>
                                <h1>Fuso horário do atendimento</h1>
                                <div>
                                    <select name="fuso" id="fuso">

                                    </select>
                                    <label htmlFor="fuso">Fuso Horário</label>
                                </div>
                            </DataSelectorContainer>
                        </SelectorClusterContainer>
                        <CheckboxContainer>
                            <div>
                                <input type="checkbox" form="PIF" id="oclockswitch"/>
                                <label htmlFor="oclockswitch">Desejo atender somente em horas fechadas (ex.: 12h00, 13h00, 14h00)</label>
                            </div>
                        </CheckboxContainer>
                        <SaveButton>SALVAR</SaveButton>
                    </PlanningInfoContainer>
                </DataContainer>
                <SideBarContainer></SideBarContainer>
            </BodyContainer>
            
        </MainContainer>
    );
};
  
export default EspecialistaDadosPlanejamento;