import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateCompanyMutation } from '../../../services/company/companyApiSlice';
import ErrorMessage from '../../ErrorMessage/errorMessage';
import areasDeAtuacao from './areasDeAtuacao.json';
import { CadastroFormContainer, FormButton, FormInput, FormSelect, FormTitle } from './style';

const CadastroForm: React.FC<any> = () => {
  
  const [createCompany, {isLoading}] = useCreateCompanyMutation();
  const navigate = useNavigate();

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [celular, setCelular] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [areaAtuacao, setAreaAtuacao] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const formatarCelularField = (valor: string) =>{
    return valor
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
  };

  const formatarCnpjField = (valor: string) => {
    const cnpjFormatado = valor
      .replace(/\D/g, "") 
      .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
    return cnpjFormatado;
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

      const cnpjUnformatted = cnpj.replace(/[^\d]/g, "");
      const company = {
        nome,
        email,
        senha,
        celular,
        cnpj: cnpjUnformatted,
        areaAtuacao: areaAtuacao,
        contato: "",
        quantidadeVinculos: 100,
      };

      const response = await createCompany(company).unwrap();
      console.log(response)
      

      setNome('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setCelular('');
      setCnpj('');
      setAreaAtuacao('');

      alert("Cadastro efetuado com sucesso")
      navigate("/login");
      
    } catch (error) {
      if (typeof error === 'string') {
        // dispatch(registerFail(error));
        console.error('Erro ao cadastrar usuário:', error);
      } else {
        // dispatch(registerFail('Erro'));
        console.error('Erro ao cadastrar usuário:', error);
      }
    }


  };

  return (
    <div>
      <CadastroFormContainer>
        <FormTitle>Suas informações</FormTitle>
  
        <label htmlFor="razaoSocial">Razão social:</label>
        <FormInput
          id="razaoSocial"
          type="text"
          placeholder="Razão social"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNome(e.target.value)
          }
        />
        <br />
  
        <label htmlFor="email">Email:</label>
        <FormInput
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <br />
  
        <label htmlFor="senha">Senha:</label>
        <FormInput
          id="senha"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSenha(e.target.value)
          }
        />
        <br />
  
        <label htmlFor="confirmarSenha">Confirmar Senha:</label>
        <FormInput
          id="confirmarSenha"
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmarSenha(e.target.value)
          }
        />
        <br />
  
        <label htmlFor="numeroContato">Número para contato:</label>
        <FormInput
          id="numeroContato"
          type="text"
          placeholder="Número para contato"
          value={formatarCelularField(celular)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCelular(formatarCelularField(e.target.value))
          }
        />
        <br />
  
        <label htmlFor="cnpj">CNPJ:</label>
        <FormInput
          id="cnpj"
          type="text"
          placeholder="CNPJ"
          value={formatarCnpjField(cnpj)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCnpj(formatarCnpjField(e.target.value))
          }
        />
        <br />
  
        <label htmlFor="areaAtuacao">Área de Atuação:</label>
        <FormSelect
          id="areaAtuacao"
          value={areaAtuacao}
          onChange={(e) => setAreaAtuacao(e.target.value)}
        >
          <option value="">Selecione a área de atuação</option>
          {areasDeAtuacao.map((area) => (
            <option key={area.valor} value={area.valor}>
              {area.nome}
            </option>
          ))}
        </FormSelect>
        <br />
  
        <FormButton onClick={handleRegister} disabled={false /*loading*/}>
          {/* {loading ? "Cadastrando..." : "Cadastrar"} */}
        </FormButton>
        {showAlert && <ErrorMessage message={alertMessage} />}
      </CadastroFormContainer>
    </div>
  );  
};

export default CadastroForm;
