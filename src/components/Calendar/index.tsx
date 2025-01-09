import React, { useState, useEffect } from 'react';
import { CustomCalendarContainer, HeaderContainer, DaysContainer, DayItem, NavArrow, DayTimeSeparator, Spacer, TimesContainer, TimeList, TimeItem, ConfirmContainer, ConfirmDescription, ConfirmButton } from './style';
import { getDia, getMes } from './DateParser';
import { DisponibilidadeData } from '../Types/types';
import { EspecialistaOpenSchedule } from '../../redux/thunks';
import { number } from 'yup';
import { useNavigate } from 'react-router';

interface CustomCalendarProps {
  onChange: (selectedDates: Date[]) => void;
  disponibilidades: DisponibilidadeData[] | null;
  especialistaId: number;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onChange, disponibilidades, especialistaId }) => {
  const [isIterationZero, setIterationZero] = useState(true);
  const [dateIteration, setDateIteration] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const NavArrows = {
    Prev: -1,
    Next: 1,
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
    event.target.checked = true;
  };

  const handleDayCicle = (direction: number) => {
    setDateIteration(prevDateIteration => {
      const newDateIteration = prevDateIteration + direction;
      const newIsIterationZero = newDateIteration <= 0;
      setIterationZero(newIsIterationZero);
      return newDateIteration;
    });
    // console.log('dateIteration: ', dateIteration);
  };

  const renderDays = () => {
    var date1 = new Date();
    var date2 = new Date();
    var date3 = new Date();
    var date4 = new Date();
    var date5 = new Date();

    // console.log(date1.getDate());
    date1.setDate(date1.getDate() + (dateIteration*5));

    date2.setMonth(date1.getMonth());
    date2.setDate(date1.getDate() + 1);

    date3.setMonth(date1.getMonth());
    date3.setDate(date1.getDate() + 2);

    date4.setMonth(date1.getMonth());
    date4.setDate(date1.getDate() + 3);

    date5.setMonth(date1.getMonth());
    date5.setDate(date1.getDate() + 4);

    var dates = [date1, date2, date3, date4, date5];

    return (Array.from(dates, (date) => 
        <DayItem>
          <input type="radio" name='day-seleciton1' disabled/>
          <span style={{ border: selectedRadio === "dia"+(dates.indexOf(date)+1) ? '2px solid #ffc12e' : '1px solid #ddd'}}>
            <h1>{getDia(date)}</h1> 
            <h2>{date.getDate()}</h2> 
            <h3>{getMes(date)}</h3>
          </span>
        </DayItem>
      )
    );
  };

  const beginTime = 8;
  const renderTime = () => {
    let hours: string[] = [];
    let repeatedHours: string[][] = [];
  
    if (disponibilidades && disponibilidades.length > 0) {
      const disponibilidadeEspecialista = disponibilidades.find(d => {
        console.log('ID do especialista:', especialistaId);
        console.log('ID do especialista na disponibilidade:', d.especialistaId);
        return d.especialistaId === especialistaId;
      });
      if (disponibilidadeEspecialista && disponibilidadeEspecialista.disponibilidades && disponibilidadeEspecialista.disponibilidades.length > 0) {
        hours = disponibilidadeEspecialista.disponibilidades[0].horarios;
      }
    }
  

    if (hours.length === 0) {
      hours = ["", "", "", "", ""]; 
    }
  
    for (let i = 0; i < 5; i++) {
      repeatedHours.push([...hours]);
    }
  
    return (
      <TimesContainer action='' method='put' name='submitTime'>
        <Spacer/>
        {repeatedHours.map((column, columnIndex) => (
          <TimeList key={columnIndex}>
            {column.map((hour, index) => (
              <TimeItem key={index}>
                <input type="radio" name={`time-selection-${especialistaId}`} />
                <span>{hour}0</span>
              </TimeItem>
            ))}
          </TimeList>
        ))}
      </TimesContainer>
    );
  };
  const navigate = useNavigate();
  const handleRedirectPagamento = () => {
    navigate("/pagamento");
  };

  return (
    <CustomCalendarContainer>
      <HeaderContainer>
        <NavArrow type="reset" disabled={isIterationZero} onClick={() => handleDayCicle(NavArrows.Prev)}>
          {"<"}
        </NavArrow>
        <span>Agenda</span>
        <NavArrow type="reset" onClick={() => handleDayCicle(NavArrows.Next)}>
          {">"}
        </NavArrow>
      </HeaderContainer>
      <DaysContainer>
        <NavArrow type="reset" disabled={isIterationZero} onClick={() => handleDayCicle(NavArrows.Prev)}>
          {"<"}
        </NavArrow>
        {renderDays()}
        <NavArrow type="reset" onClick={() => handleDayCicle(NavArrows.Next)}>
          {">"}
        </NavArrow>
      </DaysContainer>
      <DayTimeSeparator />
      <TimesContainer action='' method='put' name='submitTime'>
          <Spacer/>
          {renderTime()}          
      </TimesContainer>
      <ConfirmContainer>
        <ConfirmDescription>
          <h1>R$ 999</h1>
          <h2>Qualquer-Feira &bull; 29/02/2024</h2>
        </ConfirmDescription>
        <ConfirmButton type='submit' form='submitTime' value={"Agendar Agora"} onClick={handleRedirectPagamento}/>
      </ConfirmContainer>
    </CustomCalendarContainer>
  );
};

export default CustomCalendar;
