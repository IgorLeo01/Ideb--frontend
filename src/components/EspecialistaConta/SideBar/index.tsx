import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { SideBarContainer, MobileSlider } from "./style";

const SideBar = ({ perfilPreenchido }: { perfilPreenchido: boolean }) => {
    const [isMobileVisible, setIsMobileVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = (link: string) => {
        navigate(link);
    };

    const toggleMobileSideBar = () => {
        setIsMobileVisible((prev) => !prev);
    };

    useEffect(() => {
        setIsMobileVisible(!perfilPreenchido);
    }, [perfilPreenchido]);

    return (
        <>
            <SideBarContainer isMobileVisible={isMobileVisible}>
                <h1>Minha Conta</h1>
                <div>
                    <button onClick={() => handleButtonClick("/dadospessoais")} disabled={perfilPreenchido}>
                        <h2>Pessoal</h2>
                    </button>
                    <button onClick={() => handleButtonClick("/dadosprofissionais")} disabled={!perfilPreenchido}>
                        <h2>Profissional</h2>  
                    </button>
                    <button onClick={() => handleButtonClick("/dadosplanejamento")} disabled={!perfilPreenchido}>
                        <h2>Plano e Sessão</h2>
                    </button>
                    <button onClick={() => handleButtonClick("/dadossessaoonline")} disabled={!perfilPreenchido}>
                        <h2>Sessão Online</h2>
                    </button>
                    <button onClick={() => handleButtonClick("/dadossessaopresencial")} disabled={!perfilPreenchido}>
                        <h2>Sessão Presencial</h2>                    
                    </button>
                    <button onClick={() => handleButtonClick("/dadosfinanceiros")} disabled={!perfilPreenchido}>
                        <h2>Financeiro</h2>                    
                    </button>
                </div> 
            </SideBarContainer>
            <MobileSlider onClick={toggleMobileSideBar} isMobileVisible={isMobileVisible}>{">"}</MobileSlider>
        </>
    )
};

export default SideBar;
