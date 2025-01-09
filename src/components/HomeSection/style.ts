import styled from "styled-components";

// Media query para dispositivos móveis
const mobile = `@media (max-width: 667px)`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100%;

  .footer-mobile {
    background-color: #fcba0c;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 1;
  }

  .footer-p {
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
  }

  ${mobile} {
    justify-content: unset;

    .button {
      padding: 0;
    }
  }
`;

export const AnotherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 5%;
  /* flex-grow: 1; */

  .Button-C-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 45%;
    height: 30%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
    animation: myAnim 2s ease-out 1s 1 normal none;
  }

  .Button-C {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 45%;
    height: 30%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
  }

  @keyframes myAnim {
    0%,
    100% {
      transform: translateX(0);
    }

    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }

    20%,
    40%,
    60% {
      transform: translateX(10px);
    }

    80% {
      transform: translateX(8px);
    }

    90% {
      transform: translateX(-8px);
    }
  }
  .text-C {
    font-size: 1.2em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 1%;
    /* white-space: nowrap; */
  }

  .Icon-C {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 55px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
    margin-right: 2%;
  }
  .Icon-C-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 37px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
    margin-right: 2%;
  }
`;

export const ContainerElements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 5%;
  /* flex-grow: 1; */

  .Button-C-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 45%;
    height: 30%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
    animation: myAnim 2s ease-out 1s 1 normal none;
  }

  .Button-C {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 45%;
    height: 30%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
  }

  @keyframes myAnim {
    0%,
    100% {
      transform: translateX(0);
    }

    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }

    20%,
    40%,
    60% {
      transform: translateX(10px);
    }

    80% {
      transform: translateX(8px);
    }

    90% {
      transform: translateX(-8px);
    }
  }

  .text-C {
    font-size: 1.2em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 1%;
    /* white-space: nowrap; */
  }

  .Icon-C {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 55px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
    margin-right: 2%;
  }
  .Icon-C-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 37px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
    margin-right: 2%;
  }
`;

export const ContainerElementsTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 5%;
  /* flex-grow: 1; */

  .Button-C-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 45%;
    height: 30%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
    animation: myAnim 2s ease-out 1s 1 normal none;
    cursor: pointer;
  }

  .Button-C {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 45%;
    /* height: 30%; */
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
    cursor: pointer;
  }

  @keyframes myAnim {
    0%,
    100% {
      transform: translateX(0);
    }

    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }

    20%,
    40%,
    60% {
      transform: translateX(10px);
    }

    80% {
      transform: translateX(8px);
    }

    90% {
      transform: translateX(-8px);
    }
  }

  .text-C {
    font-size: 1.5em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-left: 3%;
  }

  .Icon-C {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 55px;
    height: 55px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
    margin-right: 2%;
  }

  .Icon-C-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 55px;
    height: 55px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
    margin-right: 2%;
  }
`;

export const TestesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  left: 0;
  right: 0;

  .LinkWithoutUnderline {
    text-decoration: none;
  }

  .LinkWithoutUnderline:hover {
    text-decoration: none;
  }

  .Button-Teste {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 60%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 15px;
    border: none;
    box-shadow: 0px 4px 9px -1px rgba(0, 0, 0, 0.44);
    background: linear-gradient(to top, #be6f15, #f38a14, #fc8b0b);
  }

  .text-teste {
    height: 100%;
    font-size: 1.2em;
    color: #fff;
    padding-top: 4%;
    padding-bottom: 4%;
    margin: -1%;
  }
`;

export const TestesContainerTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25%;
  align-items: center;

  .LinkWithoutUnderline {
    text-decoration: none;
  }

  .LinkWithoutUnderline:hover {
    text-decoration: none;
  }

  .Button-Teste {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 180%;
    gap: 2%;
    padding-right: 1%;
    padding-left: 1%;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 4px 9px -1px rgba(0, 0, 0, 0.44);
    background: linear-gradient(to top, #be6f15, #f38a14, #fc8b0b);
    cursor: pointer;
  }

  .text-teste {
    height: 100%;
    font-size: 1.8em;
    color: #fff;
    padding-top: 4%;
    padding-bottom: 4%;
    margin-top: -1%;
    margin-bottom: -1%;
  }
`;

export const ContainerSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2%;
  align-items: center;
  align-content: center;
  background: none;
  padding-bottom: 8%;

  .Button-Subscribe {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 65%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #1c5782;
  }

  .text-Subscribe {
    font-size: 1.3em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-bottom: 6%;
    margin-top: 6%;

    white-space: nowrap;
  }

  .text-Subscribe-p-1 {
    font-size: 0.8em;
    color: #fff;
    padding-top: 9%;
    margin: -3%;
  }

  .text-Subscribe-p {
    font-size: 0.8em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 3%;
    margin: 0%;
  }

  .Icon-subscribe {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 30px;
    height: 30px;
    background-color: #236aa1;
    border-radius: 50%;
    margin-right: 10%;
    /* margin-left: 1%; */
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
  }

  .conjunto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 40%;
  }

  .topo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 70%;
    height: 40%;
    margin-right: 1%;
    margin-left: 1%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: none;
    background-color: #1c5782;
    box-shadow: inset 0px -36px 27px -24px rgba(0, 0, 0, 0.44);
  }
`;
export const ContainerSubB = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2%;
  align-items: center;
  align-content: center;
  background: none;
  padding-bottom: 8%;

  .Button-Subscribe {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 65%;
    gap: 2%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 35px;
    border: none;
    background-color: #1c5782;
    cursor: pointer;
  }

  .text-Subscribe {
    font-size: 2em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-bottom: 6%;
    margin-top: 6%;

    white-space: nowrap;
  }

  .text-Subscribe-p-1 {
    font-size: 1.2em;
    color: #fff;
    padding-top: 9%;
    margin: -3%;
  }

  .text-Subscribe-p {
    font-size: 1.2em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 3%;
    margin: 0%;
  }

  .Icon-subscribe {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 60px;
    height: 60px;
    background-color: #236aa1;
    border-radius: 50%;
    margin-right: 10%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
  }

  .conjunto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 40%;
  }

  .topo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 70%;
    height: 40%;
    margin-right: 1%;
    margin-left: 1%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: none;
    background-color: #1c5782;
    box-shadow: inset 0px -36px 27px -24px rgba(0, 0, 0, 0.44);
  }
`;

export const ContainerAll = styled.div`
  flex: 35;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  .Container-Position {
    /* position: absolute; */
    margin-top: 28%;
  }

  .Container-Position-A {
    display: flex;
    margin-top: 49%;
  }
`;

export const ContainerAllEx = styled.div`
  flex: 35;
  display: flex;
  flex-direction: column;
  height: 100%;

  .Container-Position {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 5%;
    margin-left: 3%;
  }

  .Container-Position-A {
    display: flex;
    width: 50%;
    margin-top: 7%;
    margin-left: 15%;
  }

  .CustomReactModal{
    z-index: 4;
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
  z-index: -3;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BckWith = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BackgroundImageWoman = styled.img`
  position: fixed;
  /* bottom: 0; */
  width: 40%;
  height: 98%;
  padding-top: 2% !important;
  object-fit: cover;
`;

