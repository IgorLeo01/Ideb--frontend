import { Link } from "react-router-dom";
import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

export const Container = styled.div`
  width: 24%;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  right: 0;
  margin-top: 6%;

  ${mobile} {
    width: 100%;
    margin-top: 18%;
  }

  .Contanier-all {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .BoxContainer {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #edaa04;
    margin-left: 5%;
    border-bottom-style: solid;
    border-radius: 10px;
    border-color: #fff;
    margin-bottom: 2%;
  }

  .BoxContainer p {
    color: #fff;
    margin-left: 30%;
  }
`;

export const Linkagem = styled(Link)`
  text-decoration: none;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #edaa04;
  margin-left: 5%;
  border-bottom-style: solid;
  border-radius: 10px;
  border-color: #fff;
  margin-bottom: 2%;

  .text {
    color: #fff;
    margin-left: 30%;
  }
`;
