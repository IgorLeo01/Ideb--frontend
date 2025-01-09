import React from 'react';
import { ButtonBody } from './style';

interface ButtonContactProps {
  text: string;
  handleClick: () => void;
  textColor?: string;
  buttonColor?: string;
  hoverTextColor?: string;
  hoverButtonColor?: string;
  buttonGradient?: string;
}


const ButtonContact: React.FC<ButtonContactProps> = ({
  text,
  handleClick,
  textColor = '#00003e',
  buttonColor = '#ffa120',
  hoverTextColor = '#ffc12e',
  hoverButtonColor = '#00003e',
  buttonGradient = 'linear-gradient(to top, #be6f15, #f38a14, #fc8b0b)', // Valor padrão do gradiente

}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    handleClick();
  };
  
  return (
    <>
      <ButtonBody buttonColor={buttonColor} hoverButtonColor={hoverButtonColor} hoverTextColor={hoverTextColor} textColor={textColor} buttonGradient={buttonGradient}>
        <button className="btn" onClick={handleClickOpen}>
          <span>{text}</span>
        </button>
      </ButtonBody>
    </>
  );
}

export default ButtonContact;
