import styled from "styled-components";

// Media query para dispositivos móveis
const mobile = `@media (max-width: 667px)`;
const mobileMenor = `@media (max-width: 380px)`;

export const CardTestAll = styled.div`
  display: flex;
  width: 82%;
  height: 100%;
  flex-direction: column;
  // justify-content: center;
  background-color: rgba(29, 88, 132, 0.8);
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 30px;
  margin-left: 40px;
  overflow-y: auto;

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

  ${mobile} {
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
      margin-left: -20%;
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
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 15%;
    height: 10%;
    gap: 5%;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
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
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
  }

  .text-C {
    font-size: 0.9em;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 1%;
    white-space: nowrap;
  }
  .testPassword {
    display: flex;
    width: 30%;
    height: 25px;
    border-radius: 35px;
    /* border: none;     */
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
    margin-top: 10%;
  }

  ${mobile} {
    .testPassword {
    display: flex;
    width: 98%;
    height: 25px;
    border-radius: 35px;
    /* border: none;     */
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
    margin-top: 10%;
  }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100%;
  margin-top: 10%;

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

export const BackgroundImageWoman = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -3;
  width: 40%;
  height: 98%;
  margin-top: 5% !important;
  object-fit: cover;
`;
