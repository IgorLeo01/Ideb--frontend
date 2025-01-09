import styled from "styled-components";

const mobile = `@media (max-width: 667px)`;

export const EspecialistaCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  min-width: 65%;
  margin-top: 40px;  
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  ${mobile} {
    flex-direction: column;
    width: 95%;
    padding: 5px 0;
  }

  img {
    max-width: 100%;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
`;

export const CalendarContainer = styled.div`
  width: auto;
  padding: 15px;
  button {
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;    
  }
`;