import { styled } from "styled-components";
import relogio from "../../assets/culture.png";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background: linear-gradient(30deg, #c0d9f9, #c7ecea, #cffddb);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  
  width: 100%;
  padding-right: 2%;

  h1 {
    font-size: 2em;
    padding: 0;
    color: black;
    text-align: left;
  }
  p {
    font-size: 1em;
    text-align: center;
    color: black;
  }
  .Ponto {
    width: 15%;
  }

  .gotour-span{
    font-weight: bold;
    color: #16a5c1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;  
  padding: 0 60px 20px;      
`;
