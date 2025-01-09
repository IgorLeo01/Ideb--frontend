import styled from "styled-components";

// Media query para dispositivos móveis
const mobile = `@media (max-width: 667px)`;
const mobileMenor = `@media (max-width: 380px)`;

export const Title = styled.h2`
  color: #fff; // Cor do texto
  font-size: 24px; // Tamanho da fonte
  font-weight: bold; // Peso da fonte
  text-align: center; // Alinhamento do texto
  margin: 20px 0; // Margem para separar do conteúdo abaixo
`;

export const Card = styled.div`
  background-color: #f0f0f0; // Cor de fundo do card
  border-radius: 8px; // Arredondamento das bordas
  margin: 10px 0; // Margem entre os cards
  padding: 20px; // Padding dentro do card
  color: #333; // Cor do texto
  font-size: 16px; // Tamanho da fonte
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Sombra para dar efeito elevado
  display: flex; // Usado para alinhar os itens internamente, se necessário
  justify-content: center; // Alinha os itens horizontalmente ao centro, se tiver mais de um
  align-items: center; // Alinha os itens verticalmente ao centro
  
`;

export const CardTestAll = styled.div`
  display: flex;
  width: 82%;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(29, 88, 132, 0.8);
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 30px;  

  ${mobileMenor} {  
    .Button-C-1 {
      width: 100% !important;
      height: 30px !important;
      padding-left: 15%;
    }
    .Icon-C {
      width: 32px !important;
      height: 33px !important;
    }
  }

  .content {
    padding: 30px;
  }

  .title {    
    color: #fff;
    font-weight: 700;
  }
  .Text {
    font-size: small;
    text-align: justify;
    color: #fff;
  }
  li {
    font-size: small;
    text-align: justify;
    color: #fff;
  }

  .Button-C-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 25px;        
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    padding-left: 15%;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);    
    margin-top: 10%;
  }

  .Icon-C {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 28px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: -20%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);    
  }

  .text-C {
    font-size: 0.9em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 1%;
    white-space: nowrap;    
  }
  .testPassword{
    display: flex;
    width: 98%;
    height: 25px;        
    border-radius: 35px;
    /* border: none;     */
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);    
    margin-top: 10%;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100vh;

  .footer-mobile {
    background-color: #fcba0c;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    bottom: 0;
  }

  .footer-p {
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
  }

  ${mobile} {
    flex-direction: column;
  }
`;

export const BackgroundImageMobile = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -3;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
