import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import Navbar from '../../../components/Navbar/navbar';
import { updatePersonalData, fetchUserData } from "../../../redux/thunks";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../../app/store";
import SideBar from "../../../components/EspecialistaConta/SideBar";
import { estadosBrasileiros} from "./estadosBrasil";
import cameraIcon from "../../../assets/camera.png"

import MainContainer from "../../../components/EspecialistaConta/MainContainer";
import { BodyContainer } from "../../../components/EspecialistaConta/MainContainer/style";

import DataContainer from "../../../components/EspecialistaConta/DataContainer";
import { DataHeader } from "../../../components/EspecialistaConta/DataContainer/style";
import { PerfilData } from "../../../components/Types/types";
import { SideBarContainer, PublicDataContainer, VerticalSeparator, Image, PersonalInfoContainer, ModalContent, ModalCancelButton, ModalOverlay, FormGroup, ButtonGroup, FormGroupLabel, ModalSaveButton, FormInput, PasswordRequirements} from "./style";

const EspecialistaDadosPessoais = () => {
    const dispatch = useDispatch<AppDispatch>();
    const especialistaData = useSelector((state: any) => state.userData); 
    const [localidade, setLocalidade] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [especialistaId, setEspecialistaId] = useState<number | null>(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [foto, setFoto] = useState<File | null>(null);
    const [fotoUrl, setFotoUrl] = useState<string | null>(null);
    const [dadosPessoaisPreenchidos, setDadosPessoaisPreenchidos] = useState(false);
    const [perfilPreenchido, setPerfilPreenchido] = useState(false);
    
    const [formData, setFormData] = useState<any>({
        nome: "",
        genero: "",
        localidade: "",
        celular: "",
        nascimento: "",
        email: "",
      });
      
      const inputFileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const id = localStorage.getItem('id');
        console.log("ID do usuário:", id);
        dispatch(fetchUserData(Number(id))); 
        setEspecialistaId(Number(id));
    }, [dispatch]);

    useEffect(() => {
        if (especialistaData && especialistaData.data) {
            const { nome, genero, email, celular } = especialistaData.data;
            setFormData((prevState: any) => ({
                ...prevState,
                nome,
                genero,
                email,
                celular
            }));
        }
    }, [especialistaData]);

    // useEffect(() => {
    //     const perfilPreenchido = localStorage.getItem('perfilPreenchido');
    //     if (perfilPreenchido) {
    //       setDadosPessoaisPreenchidos(true);
    //     }
    //   }, []);
    

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
    
    const handleLocalidadeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setLocalidade(value);
        setFormData((prevState: any) => ({
            ...prevState,
            localidade: value 
        }));
    };
    
    const handleDataNascimentoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setDataNascimento(value);
        setFormData((prevState: any) => ({
            ...prevState,
            nascimento: value 
        }));
    };
    

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {   
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const handleSavePassword = () => {
        handleCloseModal();
    };

    const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setFoto(file); 
            const imageUrl = URL.createObjectURL(file); 
            setFotoUrl(imageUrl); 
        }
    };

    const handleClickProfileImage = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };

    const handleSave = () => {
        if (dataNascimento && localidade) {
            let fotoUrl: string | null = null; 
        if (foto) {
            fotoUrl = URL.createObjectURL(foto); 
        }
        console.log("fotoUrl:", fotoUrl);
        console.log("dataNascimento:", dataNascimento);
        console.log("localidade:", localidade);

            const updatedData: PerfilData = {
                foto: fotoUrl ?? '',
                dataNascimento: dataNascimento,
                endereco: localidade, 
                experiencia: '', 
                especialidadesArea: [], 
                descricaoPessoal: '', 
            };
    
            if (especialistaId !== null) { 
                dispatch(updatePersonalData(updatedData, especialistaId)); 
                localStorage.setItem('perfilPreenchido', 'true');
                setDadosPessoaisPreenchidos(true);
            } else {
                console.error("ID do especialista não encontrado."); 
            }
        } else {
            console.error("Por favor, preencha todos os campos obrigatórios.");
        }
    };
    
    return (
        <MainContainer>            
            <BodyContainer>
            <SideBar perfilPreenchido={perfilPreenchido}/>
                <DataContainer name="PIC">
                    <DataHeader>
                        <h1>Pessoal</h1>
                        <h2>Suas informações pessoais, e-mail e senha</h2>
                    </DataHeader>
                    <PublicDataContainer>
                        <div>
                            <h1>Sua foto de perfil</h1>
                            <h2>Esta é a foto que aparecerá no seu perfil, para seus clientes e outros profissionais</h2>
                            <div onClick={handleClickProfileImage} style={{position: 'relative', borderRadius: '50%', border: '1px solid purple', margin: 'auto', cursor: 'pointer', overflow: 'hidden', width: '8em', height: '8em'}}>
                                <img src={fotoUrl ?? especialistaData?.data?.foto ?? '/assets/default-profile-image.jpg'}alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                                <img src={cameraIcon} alt="Camera Icon" style={{position: 'absolute', bottom: '8px', right: '4px', width: '16px', height: '16px', cursor: 'pointer'}} />
                            </div>
                            <input type="file" id="inputFoto" accept="image/*" onChange={handleFotoChange} ref={inputFileRef} style={{ display: 'none' }} />
                        </div>
                        <VerticalSeparator/>
                        <div>
                            <h1>Suas Informações Públicas</h1>
                            <h2>Estas são as informações que aparecerão para seus clientes</h2>
                            <div>
                                <input name="Nome" type="text" value={formData.nome} onChange={handleInputChange} readOnly />
                                <label htmlFor="Nome">Nome completo</label>
                                <input name="Genero" id="genero" type="text" value={formData.genero} onChange={handleInputChange} readOnly></input>
                                <label htmlFor="Genero">Gênero</label>
                                <select name="Localidade" value={localidade} onChange={handleLocalidadeChange}>
                                <option value="">Selecione o estado</option>
                                {estadosBrasileiros.map((estado, index) => (
                                <option key={index} value={estado}>{estado}</option>
                                ))}
                                </select>
                                <label htmlFor="Localidade">Sua Localidade</label>
                            </div>
                        </div>

                    </PublicDataContainer>
                    <PersonalInfoContainer>
                        <h1>Dados Pessoais</h1>
                        <br />
                        <div>
                            <input name="Celular" type="text" value={formData.celular} onChange={handleInputChange} readOnly />
                            <input name="Nascimento" type="date" value={dataNascimento} onChange={handleDataNascimentoChange}/>
                            <label htmlFor="Celular">Número de Celular</label>
                            <label htmlFor="Nascimento">Data de Nascimento</label>
                        </div>
                        <div>
                            <input name="Email" type="email" placeholder="hold_place@acme.com" value={formData.email} onChange={handleInputChange} readOnly />
                            <a href="#" onClick={handleOpenModal}>Alterar Senha</a>
                            <label htmlFor="Email">Seu E-mail</label>                
                        </div>
                        <button form="PIC" onClick={handleSave}>SALVAR</button>
                    </PersonalInfoContainer>
                </DataContainer>
                <SideBarContainer></SideBarContainer>
            </BodyContainer>
            {isModalOpen && (
                            <ModalOverlay>
                            <ModalContent>
                                <h2>Alterar Senha</h2>
                                <FormGroup>
                                    <FormGroupLabel htmlFor="senhaAtual">Senha Atual</FormGroupLabel>
                                    <FormInput type="password" id="senhaAtual" />
                                </FormGroup>
                                <FormGroup>
                                    <FormGroupLabel htmlFor="novaSenha">Nova Senha</FormGroupLabel>
                                    <FormInput type="password" id="novaSenha" />
                                    <PasswordRequirements>Insira no mínimo 6 caracteres. A senha deve conter uma letra maiúscula e um caractere especial.</PasswordRequirements>
                                </FormGroup>
                                <FormGroup>
                                    <FormGroupLabel htmlFor="confirmarSenha">Confirmar Nova Senha</FormGroupLabel>
                                    <FormInput type="password" id="confirmarSenha" />
                                </FormGroup>
                                <ButtonGroup>
                                    <ModalCancelButton onClick={handleCloseModal}>Cancelar</ModalCancelButton>
                                    <ModalSaveButton onClick={handleSavePassword}>Salvar</ModalSaveButton>
                                </ButtonGroup>
                            </ModalContent>
                        </ModalOverlay>
                    )}          
        </MainContainer>
        
    );
};
  
export default EspecialistaDadosPessoais;