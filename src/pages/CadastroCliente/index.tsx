import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import { Container } from '../CadastroCliente/style';
import CadastroForm from '../../components/Forms/Cliente';

const CadastroClientePage = () => {

    interface UserData {
      login: string;
      email: string;
      password: string;
      birthdate: string;
      cpf: number;
      pNumber: number;
    }

      const handleRegister = (userData: UserData) => {     
        //requisição
        console.log('User registration data:', userData);
      };

  return (
    <Container>    
    <div>
      <CadastroForm onRegister={handleRegister}/>
    </div>
    </Container>
  );
};

export default CadastroClientePage;
