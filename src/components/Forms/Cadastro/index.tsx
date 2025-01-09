import React, { useState } from 'react';
import {CadastroFormContainer, FormTitle, FormLabel, FormInput, FormButton} from './style';

const CadastroForm : React.FC<any> = ({ onRegister }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cpf, setCPF] = useState('');
  const [pNumber, setPNumber] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword || !birthdate || !cpf || !pNumber) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    //Requisição pro Back a ser implementada
    onRegister({
      nome,
      email,
      password,
      birthdate,
      cpf,
      pNumber,
    });
  };

  return (
    <div>
      <CadastroFormContainer>
        <FormTitle>Suas informações</FormTitle>
        <FormInput
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <FormInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <FormInput
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <FormInput
          type="date"
          placeholder="Data de Nascimento"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <br />
        <FormInput
          type="text"
          placeholder="Seu CPF"
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
        />
        <br />
        <FormInput
          type="text"
          placeholder="(xx) zyyyy-yyyy"
          value={pNumber}
          onChange={(e) => setPNumber(e.target.value)}
        />
        <br />
        <FormButton onClick={handleRegister}>Cadastrar</FormButton>
      </CadastroFormContainer>
    </div>
  );
};

export default CadastroForm;