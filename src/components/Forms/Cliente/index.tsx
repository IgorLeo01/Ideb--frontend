import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateClientMutation } from '../../../services/client/clientApiSlice';
import { CadastroFormContainer, FormButton, FormCheckbox, FormDiv, FormInput, FormLabel, FormSelect, FormTitle } from './style';

const CadastroForm: React.FC<any> = ({ onRegister }) => {
  const navigate = useNavigate();  
  const [createClient, {isLoading}] = useCreateClientMutation();
  
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [codEmpresa, setCodEmpresa] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [celular, setCelular] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [genero, setGenero] = useState<string>('');

  const [isBenefit, setIsBenefit] = useState(false);
  const handleCheckboxChange = () => {
    setIsBenefit(!isBenefit);
  };

  const formatarCelular = (input: string) => {
    const formattedInput = input
      .replace(/\D/g, '') 
      .replace(/^(\d{2})(\d)/g, '($1)$2') 
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .slice(0, 14);
    return formattedInput;
  };
  

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

      const cpfRegex = /^[0-9]{11}$/;
      if (!cpfRegex.test(cpf)) {
        alert('O CPF fornecido não é válido.');
        return;
      }          
      const client = {
        nome,
        email,
        codEmpresa,
        senha,
        celular,
        cpf,
        genero,
      };
      const response = await createClient(client).unwrap();      

      console.log('Cadastro efetuado com sucesso:', response);

      setNome('');
      setEmail('');
      setCodEmpresa('');
      setSenha('');
      setConfirmarSenha('');
      setCelular('');
      setCpf('');
      setGenero('');
            
      alert("Cadastro efetuado com sucesso")
      navigate("/login");

    } catch (error) {
        if (error instanceof Error && error.message) {
          console.error('Erro ao cadastrar usuário:', error.message);
        } else {
          console.error('Erro ao cadastrar usuário:', error);
        }
      }
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
          <FormDiv>
            <FormCheckbox
              id="codigo"
              type="checkbox"
              checked={isBenefit}
              onChange={handleCheckboxChange}
            />
            <FormLabel htmlFor="codigo"> A empresa que trabalho possui benefícios </FormLabel>
          </FormDiv>
          <br />
    
          {isBenefit &&
            (
              <div style={{ width: '100%', padding: '10px', marginTop: '-10px', marginBottom: '10px' }}>
                <label htmlFor="codEmpresa">Seu Código de Acesso:</label>
                <FormInput
                  id="codEmpresa"
                  type="text"
                  placeholder="Seu Código de Acesso"
                  value={codEmpresa}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCodEmpresa(e.target.value)}
                />
              </div>
            )
          }
    
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
    
          <label htmlFor="celular">Celular:</label>
          <FormInput
            id="celular"
            type="text"
            placeholder="Celular"
            value={celular}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCelular(formatarCelular(e.target.value))}
          />
          <br />
    
          <label htmlFor="cpf">CPF:</label>
          <FormInput
            id="cpf"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
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
    
          <FormButton onClick={handleRegister}>Cadastrar</FormButton>
        </CadastroFormContainer>
      </div>
    );
};

export default CadastroForm;
