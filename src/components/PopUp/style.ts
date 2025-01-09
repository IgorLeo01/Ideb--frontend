import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

export const PopupContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: opacity 1.5s ease-in-out;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')}
  max-width: 400px; 
  width: 100%; 
  height: 100%;

  @media (min-width: 668px) {
    display: none; 
  }
`;

export const Gif = styled.img`
  width: 400px;
  max-width: 400px; 
  height: 750px;
  margin-bottom: 10px;
  object-fit: contain;
`;