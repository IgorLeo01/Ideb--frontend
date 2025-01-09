import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateEspecialistMutation } from '../../../services/especialist/especialistApiSlice';
import ErrorMessage from '../../ErrorMessage/errorMessage';
import { CadastroFormContainer, FormButton, FormInput, FormSelect, FormTitle } from './style';

const CadastroForm: React.FC<any> = () => {
  const [createEspecialist, {isLoading}] = useCreateEspecialistMutation();
  const navigate = useNavigate();

  const [nome, setNome] = useState<string>('');
  const [roles, setRoles] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [celular, setCelular] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [genero, setGenero] = useState<string>('');
  const [especialidade, setEspecialidade] = useState<string>('');
  const [objetivo, setObjetivo] = useState<string>('');
  const [anoInicioAtendimentos, setAnoInicioAtendimentos] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [crp, setCrp] = useState<string>('');

  const formatarCelularField = (valor: string) =>{
    return valor
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
  };

  const formatarCpfField = (valor: string) => {
    const cpfFormatado = valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpfFormatado;
  };

  const showAlertMessage = (message: string) => {
    console.log('Antes de setShowAlert(true)');
    setAlertMessage(message);
    setShowAlert(true);
    console.log('Depois de setShowAlert(true)');
  };

  useEffect(() => {
    console.log('Erro:', error);
    if (error) {
      showAlertMessage('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
    }
  }, [error]);

  const handleRegister = async () => {
    try {
      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('O e-mail fornecido não está em um formato válido.');
        return;
      }

      const cpfSemFormato = cpf.replace(/[^\d]/g, '');

      const especialist = {
        nome,
        id: 0,
        roles: ["EMPRESA"],
        email,
        senha,
        celular,
        cpf: cpfSemFormato,
        genero,
        especialidade,
        objetivo,
        anoInicioAtendimentos: parseInt(anoInicioAtendimentos, 10) || 0,
        crp: especialidade === "Psicólogo(a)" ? crp : ""
      };    
      
      const response = await createEspecialist(especialist).unwrap();

      console.log('Cadastro efetuado com sucesso:', response);

      console.log('Roles:', roles);

      setNome('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setCelular('');
      setCpf('');
      setGenero('');
      setEspecialidade('');
      setObjetivo('');
      setAnoInicioAtendimentos('');


      
    } catch (error) {
      if (typeof error === 'string') {
        // dispatch(registerFail(error));
        console.error('Erro ao cadastrar usuário:', error);
      } else {
        // dispatch(registerFail('Erro'));
        console.error('Erro ao cadastrar usuário:', error);
      }
    }

    alert("Cadastro efetuado com sucesso")
    navigate("/login");

  };

  return (
    <div>
      <CadastroFormContainer>
        <FormTitle>Suas informações</FormTitle>
  
        <label htmlFor="nome">Nome Completo:</label>
        <FormInput
          id="nome"
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
        />
        <br />
  
        <label htmlFor="email">Email:</label>
        <FormInput
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <br />
  
        <label htmlFor="senha">Senha:</label>
        <FormInput
          id="senha"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
        />
        <br />
  
        <label htmlFor="confirmarSenha">Confirmar Senha:</label>
        <FormInput
          id="confirmarSenha"
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value)}
        />
        <br />
  
        <label htmlFor="celular">Número de Celular:</label>
        <FormInput
          id="celular"
          type="text"
          placeholder="Número de Celular"
          value={formatarCelularField(celular)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCelular(formatarCelularField(e.target.value))
          }
        />
        <br />
  
        <label htmlFor="cpf">CPF:</label>
        <FormInput
          id="cpf"
          type="text"
          placeholder="CPF"
          value={formatarCpfField(cpf)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCpf(formatarCpfField(e.target.value))
          }
        />
        <br />
  
        <label htmlFor="genero">Gênero:</label>
        <FormSelect
          id="genero"
          value={genero}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGenero(e.target.value)}
        >
          <option value="">Selecione seu gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </FormSelect>
        <br />
  
        <label htmlFor="especialidade">Especialidade:</label>
        <FormSelect
          id="especialidade"
          value={especialidade}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEspecialidade(e.target.value)}
        >
          <option value="">Selecione sua Especialidade</option>
          <option value="Psicólogo(a)">Psicólogo(a)</option>
          <option value="Psicanalista">Psicanalista</option>
          <option value="Terapeuta">Terapeuta</option>
          <option value="Coach">Coach</option>
        </FormSelect>
        <br />
        {especialidade === "Psicólogo(a)" && (
      <>
        <label htmlFor="crp">CRP:</label>
        <FormInput
        id="crp"
        type="text"
        placeholder="CRP"
        value={crp}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCrp(e.target.value)}
      />
    <br />
  </>
)}
        <label htmlFor="objetivo">Objetivo:</label>
        <FormInput
          id="objetivo"
          type="text"
          placeholder="Objetivo"
          value={objetivo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setObjetivo(e.target.value)}
        />
        <br />
  
        <label htmlFor="anoInicioAtendimentos">Ano de Início de Atendimentos:</label>
        <FormInput
          id="anoInicioAtendimentos"
          type="text"
          placeholder="Ano de Início de Atendimentos"
          value={anoInicioAtendimentos}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnoInicioAtendimentos(e.target.value)}
        />
        <br />
  
        <FormButton onClick={handleRegister} disabled={false }>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </FormButton>
        {showAlert && <ErrorMessage message={alertMessage} />}
      </CadastroFormContainer>
    </div>
  );  
};

export default CadastroForm;
