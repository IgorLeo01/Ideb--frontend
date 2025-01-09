import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import { Container } from '../CadastroEspecialista/style';
import { UserDataEspecialista } from '../../components/Types/types';
import LoginForm from '../../components/Forms/Login';

const LoginPage = () => {
    return (
    <Container>      
      <div>
        <LoginForm/>
      </div>
    </Container>
  );
};

export default LoginPage;
