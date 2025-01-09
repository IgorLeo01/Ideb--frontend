import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6%;
`;
export const PieChartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 1%;

  ${mobile} {
  }

  .container-graphics {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .title-head {
    font-size: 2em;
    color: #294c65;
  }
  .dash-labels{
    font-weight: bold;
  }
`;

export const Title = styled.div`
  font-size: 3em;
  color: #294c65;
`;

export const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }

  .Button-individual {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 70%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 15px;
    border: none;
    box-shadow: 0px 4px 9px -1px rgba(0, 0, 0, 0.44);
    background: linear-gradient(to top, #be6f15, #f38a14, #fc8b0b);
  }

  .text-button {
    font-size: 1.2em;
    color: #fff;
  }

  .text-1 {
    font-size: 1em;
  }
  .text-2 {
    font-size: 2em;
  }
`;
