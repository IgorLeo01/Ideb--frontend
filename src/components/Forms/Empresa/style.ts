import styled from 'styled-components';

const mobile = `@media (max-width: 667px)`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ffc12e;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 5%;

  ${mobile} {
    width: 100% !important;
    margin-top: 12%;
  };
`;

export const FormTitle = styled.h2`
  font-size: 1.3em;
  margin-bottom: 5%;
  width: 40%;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 30%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 1.5em;
  border: 1px solid #ccc;
  border-radius: 4px;

  ${mobile} {
    width: 90% !important;
  }
`;

export const FormButton = styled.button`
  background-color: #ffc12e;
  width: max-content;
  color: #000000;
  padding: 10px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

export const FormSelect = styled.select`
  width: 30%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 1.5em;
  border: 1px solid #ccc;
  border-radius: 4px;

  ${mobile} {
    width: 90% !important;
  }
`;

export const CadastroFormContainer = styled(FormContainer)``;



export const LoginFormContainer = styled(FormContainer)``;
