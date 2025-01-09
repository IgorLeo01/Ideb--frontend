import React, { useState, ChangeEvent } from "react";
import Navbar from '../../../components/Navbar/navbar';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../app/store";
import { updateFinancialData } from "../../../redux/thunks";
import SideBar from "../../../components/EspecialistaConta/SideBar";

import MainContainer from "../../../components/EspecialistaConta/MainContainer";
import { BodyContainer } from "../../../components/EspecialistaConta/MainContainer/style";

import DataContainer from "../../../components/EspecialistaConta/DataContainer";
import { DataHeader } from "../../../components/EspecialistaConta/DataContainer/style";

import { SideBarContainer, BankInfoContainer, 
    LeftSideContainer, AccountContainer, RightSideContainer, PIXInputContainer, PIXSelectorContainer, PJSelector, 
    SaveButton, CancelButton } from "./style";

const EspecialistaDadosFinanceiros = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [perfilPreenchido, setPerfilPreenchido] = useState(false);
    const [financeiroData, setFinanceiroData] = useState({
        banco: "",
        agencia: "",
        conta: "",
        digito: "",
        pix: "",
        hasPix: false
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFinanceiroData({
            ...financeiroData,
            [name]: value
        });
    };

    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setFinanceiroData({
            ...financeiroData,
            hasPix: checked
        });
    };


    const handleSave = () => {
        //dispatch(updateFinancialData(formData));
    };

    return (
        <MainContainer>
            
            <BodyContainer>
            <SideBar perfilPreenchido={perfilPreenchido} />
                <DataContainer name="FIC">
                    <DataHeader>
                        <h1>Financeiro</h1>
                        <h2>Dados de pagamento, faturamento e rendimento</h2>
                    </DataHeader>
                    <BankInfoContainer>
                        <h1>Dados bancários</h1>
                        <LeftSideContainer>                            
                            <div>
                                <select name="banco" id="banco">

                                </select>
                                <label htmlFor="banco">Selecione seu banco</label>

                                <input type="number" name="agencia" id="agencia"/>
                                <label htmlFor="agencia">Agência</label>
                            </div>
                            <AccountContainer>
                                <input type="number" name="conta" id="conta"/>
                                <input type="number" name="digito" id="digito"/>

                                <label htmlFor="conta">Conta</label>
                                <label htmlFor="digito">Dígito</label>
                            </AccountContainer>
                        </LeftSideContainer>
                        <RightSideContainer>
                            <div>
                                <span>
                                    <h1>Cadastre seu PIX</h1>
                                    <h2>Para receber mais rapidamente, insira a chave da sua conta bancária cadastrada.</h2>
                                </span>
                                <PIXInputContainer>
                                    <select name="pix" id="pix">

                                    </select>
                                    <label htmlFor="pix">Tipo de chave</label>
                                </PIXInputContainer>
                                <PIXSelectorContainer>
                                    <input type="radio" id="pixradio"/>
                                    <label htmlFor="pixradio">Não tenho PIX</label>
                                </PIXSelectorContainer>
                            </div>
                            <CancelButton>CANCELAR</CancelButton>
                            <SaveButton onClick={handleSave}>SALVAR</SaveButton>                        </RightSideContainer>
                        <PJSelector>
                            <div>
                                <input type="radio" />
                                <h2>Pessoa Jurídica</h2>
                            </div>
                            <h3>Para definir o padrão de atuação PJ, preencha os dados e envie os documentos solicitados abaixo</h3>
                        </PJSelector>
                    </BankInfoContainer>
                </DataContainer>
                <SideBarContainer></SideBarContainer>
            </BodyContainer>
            
        </MainContainer>
    );
};
  
export default EspecialistaDadosFinanceiros;