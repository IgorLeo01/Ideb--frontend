import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { EspecialistaOpenSchedule } from '../../redux/thunks';
import CustomCalendar from "../Calendar";
import EspecialistaBio from "../EspecialistaBio";
import { DisponibilidadeData, EspecialistaDTO } from "../Types/types";
import { CalendarContainer, EspecialistaCardContainer, InfoContainer } from "./style";

interface EspecialistaCardProps {
  especialista: EspecialistaDTO;
}

const EspecialistaCard: React.FC<EspecialistaCardProps> = ({ especialista }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [disponibilidade, setDisponibilidade] = useState<DisponibilidadeData[] | null>(null); 
  
  useEffect(() => {
    const fetchDisponibilidade = async () => {
      try {
        const data = await dispatch(EspecialistaOpenSchedule(especialista.id));        
        console.log("Final state:", data)
        setDisponibilidade(data);
      } catch (error) {
        console.error('Erro ao carregar disponibilidades:', error);
      }
    };

    fetchDisponibilidade();
  }, [dispatch, especialista]);

  useEffect(() => {
    console.log('Estado disponibilidade atualizado:', disponibilidade);
  }, [disponibilidade]);

  const handleCalendarChange = (selectedDates: Date[]) => {
    console.log('Datas selecionadas:', selectedDates);
  }

  return (
    <EspecialistaCardContainer>
      <InfoContainer>
        <EspecialistaBio especialista={especialista}/>
      </InfoContainer>
      <CalendarContainer>
        <CustomCalendar
          especialistaId={especialista.id}
          onChange={handleCalendarChange}
          disponibilidades={disponibilidade}
        />
      </CalendarContainer>
    </EspecialistaCardContainer>
  );
};

export default EspecialistaCard;