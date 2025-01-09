import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../app/store';
import { useLoginMutation } from '../../../services/auth/authApiSlice';
import { selectCurrentToken, setCredentials } from '../../../services/auth/authSlice';
import { FormButton, FormContainer, FormInput, FormTitle } from './style';

const LoginForm: React.FC<any> = () => {
  const dispatch = useDispatch<AppDispatch>();  
  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const isAuthenticated = useSelector(selectCurrentToken);

  const handleLogin = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('O e-mail fornecido não está em um formato válido.');
        return;
      }
    
      const userData = await login({
        email,
        senha
      }).unwrap();
      
      dispatch(setCredentials(userData))
      // await dispatch(loginUser(email, senha));
      

    } catch (error) {
      if (error instanceof Error && error.message) {
        console.error('Erro ao realizar login:', error.message);
      } else {
        console.error('Erro ao realizar login:', error);
      }
    }

  };

  useEffect(() => {
    if (isAuthenticated) {
      const perfilPreenchido = localStorage.getItem('perfilPreenchido');
      if (perfilPreenchido === 'true') {
        navigate('/');
      } else {
        navigate('/dadospessoais');
      }
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div>
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <br />
        <FormInput
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
        />
        <br />
        <FormButton onClick={handleLogin}>Entrar</FormButton>
      </FormContainer>
    </div>
  );
};

export default LoginForm;
