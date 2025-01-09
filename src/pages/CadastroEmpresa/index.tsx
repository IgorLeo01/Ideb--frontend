import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import { Container } from '../CadastroEmpresa/style';
import CadastroForm from '../../components/Forms/Empresa/index';
import { UserDataEspecialista } from '../../components/Types/types';

const CadastroEmpresaPage = () => {

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

export default CadastroEmpresaPage;
