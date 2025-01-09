import { styled } from "styled-components";

// Media query para dispositivos móveis
const mobile = `@media (max-width: 667px)`;

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
  color: #0C8E98;

  .homeSection{
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

  ${mobile}{
    .App-logo-header {
      width: 15%;
      margin: 0 30px;
    }
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
    justify-content: flex-start;    
    background-image: linear-gradient(30deg, #F5F7F8, #F5F7F8, #F5F7F8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;    
    z-index: 1000; 
    border-radius: 0 0 35px 35px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
  }

 ${mobile}{
    .App-header {
      justify-content: space-between;
      padding-right: 10px; 
    }
  
    .Tabs-container {
      display: none;
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

  .css-heg063-MuiTabs-flexContainer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-end;
}

  .Mui-selected{
    font-weight: bold;
    color: #00003f !important;
  }
  .MuiTabs-indicator{    
    background: #ffc12e;
  }

  .MuiTab-textColorPrimary{
    color: #00003f;
    font-weight: bold;
  }

  .MuiTab-textColorSecondary{
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

  a {
    text-decoration: none;
  }
`;