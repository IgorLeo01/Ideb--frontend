import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .PieChart-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .text-container{
    margin-left: 20px;    
    display: flex;
    flex-direction: column;
  }
`