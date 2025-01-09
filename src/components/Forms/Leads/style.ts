import styled from 'styled-components';

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const LeadsFormContainer  = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #ffc12e;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 60%;
  margin-top: 10%;
`;

export const FormTitle = styled.h2`
  font-size: 1.6em;
  margin-bottom: 3%;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;


export const FormInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const ElegantTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;


export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px solid #ffc12e;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 40%;
  margin: auto;
  margin-top: 50px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.6em;
  margin-bottom: 3%;
`;

export const ModalButton = styled.button`
  background-color: #ffc12e;
  width: max-content;
  color: #000000;
  padding: 10px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 30px;
`;

export const ModalContent = styled.p`
  margin-bottom: 20px;
`;