import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 64px;
  right: 10px; 
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const MobileMenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #00003f;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eee;
  }
`;
