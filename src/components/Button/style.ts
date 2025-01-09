import styled from "styled-components";

interface ButtonBodyProps {
  buttonColor: string;
  hoverButtonColor: string;
  hoverTextColor: string,
  textColor: string,
  buttonGradient: string
}

export const ButtonBody = styled.div<ButtonBodyProps>`
.btn {
  display: flex;
  cursor: pointer;
  width: 350px;
  height: 50px;
  margin: 5px;
  border-radius: 80px;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.buttonColor};
  background: ${props => props.buttonGradient};
  transition: all 0.2s ease;
  box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.7);

  &:hover {
    transform: scale(1.1);
    background-color: ${props => props.hoverButtonColor};

    span {
      color: ${props => props.hoverTextColor};
    }
  }
}

.btn span {
  color: ${props => props.textColor};
  font-family: Source Sans Pro,sans-serif;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  transition: all 0.2s ease;
}  
`;