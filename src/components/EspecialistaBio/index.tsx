import React, { useState } from 'react';
import { BioContainer, BioHeader, HeaderText, BioTags, BioText, 
    BioPointsContainer, FooterSeparator, BioFooter } from './style';
import { EspecialistaDTO } from '../Types/types';

interface EspecialistaBioProps {
    especialista: EspecialistaDTO
}


const EspecialistaBio: React.FC<EspecialistaBioProps> = ({ especialista }) => {

    console.log(especialista);
    const calcularAnosExperiencia = () => {
        if (especialista.anoInicioAtendimentos) {
            const anoAtual = new Date().getFullYear();
            return anoAtual - especialista.anoInicioAtendimentos;
        }
        return 0; 
    };

    return (
        <BioContainer> 
            <BioHeader>
                {especialista.perfilDTO && <img src={especialista.perfilDTO.foto} alt="Foto do especialista" />}
                <HeaderText>
                    <h1>{especialista.nome}</h1>
                    <h2>{especialista.especialidade} &bull; {calcularAnosExperiencia()} anos de experiência &bull; {especialista.perfilDTO && especialista.perfilDTO.formacao}</h2>
                    {especialista.crp && <h3>CRP: {especialista.crp}</h3>}
                    <h4>Vem me Conhecer!</h4>
                </HeaderText>
            </BioHeader>
            <BioTags>
            {especialista.perfilDTO && especialista.perfilDTO.especialidadesArea && especialista.perfilDTO.especialidadesArea.map((especialidade, index) => (
                    <span key={index}>{especialidade}</span>
                ))}
            </BioTags>
            {especialista.perfilDTO && <BioText>{especialista.perfilDTO.descricaoPessoal}</BioText>}            
            <BioPointsContainer></BioPointsContainer>
            <FooterSeparator></FooterSeparator>
            <BioFooter>
                <h1>Sessão de 90 min</h1>
                <h2>R$ 999,99</h2>
            </BioFooter>
        </BioContainer>
    );
}

export default EspecialistaBio;