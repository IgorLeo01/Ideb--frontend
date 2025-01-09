import { styled } from "styled-components";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

const mobile = `@media (max-width: 667px)`;
const mobileSmall = `@media (max-width: 400px)`;

export const ContainerWeb = styled.div`
  display: flex;
  align-content: center;  
  width: 100% !important;  
  height: 100%;

  .App-logo-mobile {
    width: 70%;
    height: 45%;
  }

  .rounded {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 90px;
    height: 80px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 6%;
    box-shadow: -31px 31px 51px -1px rgba(0, 0, 0, 0.44);
  }

  .Img-logo {
    display: flex;
    justify-content: end;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    background-color: #fcba0c;
    width: 10%;
    height: 100%;
    border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;
    margin-right: -50px;
    z-index: 2;
  }
  .Img-logo{
    cursor: pointer;
  } 
  .corpo {
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    margin-top: 0.6%;
    padding-right: 15px;
    width: 100%;
    height: 90%;
    background: linear-gradient(
      to left,
      rgb(112, 172, 213),
      rgb(73, 122, 154),
      rgb(38, 72, 97)
    );
    display: flex;
    justify-content: flex-end;    
    background-color: white;
    z-index: 1;
    box-shadow: 0 5px 30px #030303;

    .buttonIcon {
      cursor: pointer;
    }
  }
`;

export const ButtonsNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
  margin-right: 1%;   

  .Button-C {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    border-radius: 35px;
    border: none;
    background-color: #edaa04;
    box-shadow: inset 4px -39px 10px -40px rgba(0, 0, 0, 0.44);
    cursor: pointer;
    margin: 0 5px;
  }

  .Icon-C {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 12px 10px 18px -1px rgba(0, 0, 0, 0.44);
  }  

  .text-C {
    font-size: 1.2em;
    color: #fff;
    padding: 0px 5px 0 5px;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  align-content: center;
  width: 100% !important;
  height: 100%;

  .App-logo-mobile {
    width: 70%;
    height: 45%;
  }

  .rounded {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 66px;
    height: 62px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 6%;
    box-shadow: -31px 31px 51px -1px rgba(0, 0, 0, 0.44);
  }

  .Img-logo {
    display: flex;
    justify-content: end;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #fcba0c;
    width: 40%;
    height: 100%;
    border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;
    margin-right: -50px;
    z-index: 2;
  }

  .corpo {
    top: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 3%;
    width: 100%;
    height: 70%;
    background: linear-gradient(
      to left,
      rgb(112, 172, 213),
      rgb(73, 122, 154),
      rgb(38, 72, 97)
    );
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    z-index: 1;
    box-shadow: 0 5px 60px #030303;
    /* box-shadow:  20px 20px 60px #030303; */

    .buttonIcon {
      cursor: pointer;
    }
  }

  ${mobileSmall} {
    .corpo {
      gap: 2%;
    }
  }
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  max-width: 100%;
  scroll-behavior: smooth;
  padding-top: 30px;
  font-size: calc(10px + 1vmin);
  color: #0c8e98;

  .homeSection {
    display: flex;
    height: 100%;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  .App-logo-header {
    width: 5%;
    margin: 0 30px;
  }

  h1 {
    padding-top: 5%;
    font-size: 2em;
  }

  .App-logo {
    height: 50%;
    width: 50%;
  }

  .App-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-image: linear-gradient(30deg, #f5f7f8, #f5f7f8, #f5f7f8); */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* border-radius: 0 0 35px 35px; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    padding-top: 10px;
  }

  .Tabs-container {
    display: flex;
  }

  ${mobile} {
    .App-header {
      justify-content: space-between;
      padding-right: 10px;
      border-radius: 0px;
      background-image: none;
      box-shadow: none;
      left: none !important;
      right: none !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      padding-top: 5% !important;
    }

    .MobileMenu-icon {
      display: block;
      cursor: pointer;
      font-size: 24px;
      margin-left: 80%;
    }
  }

  .App-link {
    color: #61dafb;
  }

  .css-8atqhb {
    display: flex;
    margin-left: 2%;
  }

  .css-heg063-MuiTabs-flexContainer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-end;
  }

  .Mui-selected {
    font-weight: bold;
    color: #00003f !important;
  }
  .MuiTabs-indicator {
    background: #ffc12e;
  }

  .MuiTab-textColorPrimary {
    color: #00003f;
    font-weight: bold;
  }

  .MuiTab-textColorSecondary {
    color: pink;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CustomReactModal = styled(ReactModal)`
  position: fixed;
  top: 49%;
  left: 38%;
  transform: translate(-50%, -50%);
  border: none;
  background: transparent;
  overflow: auto;
  outline: none;
  padding: 0;

  ${mobile} {
    top: 55%;
    left: 50%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  border: 3px solid #feca1b;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;

  ${mobile} {
    flex-direction: column;
  }
`;

export const ModalOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: block;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    margin-bottom: 1em;
    align-items: center;
  }

  a {
    display: flex;
    text-decoration: none;
    color: #000;

    align-items: center;
    align-content: center;
    justify-content: center;
    width: 13em;
    flex-direction: column;
  }

  flex: 1;

  /* &:first-child {
    margin-right: 1em;
  }

  &:last-child {
    margin-left: 1em;
  } */

  ${mobile} {
    &:first-child {
      margin-right: 0%;
    }

    &:last-child {
      margin-left: 0%;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  margin-right: 10%;
`;

export {};
