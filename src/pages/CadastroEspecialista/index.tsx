import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import { Container } from '../CadastroEspecialista/style';
import CadastroForm from '../../components/Forms/Especialista/index';
import { UserDataEspecialista } from '../../components/Types/types';

const CadastroEspecialistaPage = () => {

      const handleRegister = (userData: UserDataEspecialista) => {     
        console.log('User registration data:', userData);
      };

  return (
    <Container>    
    <div>
      <CadastroForm onRegister={handleRegister} />
    </div>
    </Container>
  );
};

export default CadastroEspecialistaPage;
