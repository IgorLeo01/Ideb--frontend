import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import {
  LeadsFormContainer,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  FormSelect,
  ModalContainer,
  ModalButton,
  ModalContent,
  ModalTitle
} from "./style"; 
import logo from "../../../assets/LogoIdebATT.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendLead } from "../../../redux/thunks";
import { AppDispatch } from "../../../app/store";

const formatPhoneNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");

  const formattedValue =
    cleanedValue.length > 2
      ? `(${cleanedValue.substring(0, 2)})${cleanedValue.substring(2, 7)}-${
          cleanedValue.substring(7, 11)
        }`
      : cleanedValue;

  return formattedValue;
};

const LeadsForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const schema = Yup.object({
    nome: Yup.string().required("Campo obrigatório"),
    whatsapp: Yup.string().required("Campo obrigatório"),
    tipoLead: Yup.string().required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      whatsapp: "",
      tipoLead: "", 
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        await dispatch(sendLead(values));
        setIsModalOpen(true);
      } catch (error) {
        console.error("Erro ao enviar lead:", error);
      }
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const redirectToHome = () => {
      navigate("/")
  };

  return (
    <LeadsFormContainer>
      <img
        src={logo}
        alt="Logo"
        style={{ maxWidth: "100px", marginRight: "35%" }}
      />
      <FormTitle>Contate-nos</FormTitle>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel>
          Nome:
          <FormInput
            type="text"
            name="nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome && (
            <div style={{ color: "red" }}>{formik.errors.nome}</div>
          )}
        </FormLabel>
        <FormLabel>
          Whatsapp:
          <FormInput
            type="text"
            name="whatsapp"
            onChange={(e) => {
              formik.handleChange(e);
              formik.setFieldValue(
                "whatsapp",
                formatPhoneNumber(e.target.value)
              );
            }}
            onBlur={formik.handleBlur}
            value={formik.values.whatsapp}
          />
          {formik.touched.whatsapp && formik.errors.whatsapp && (
            <div style={{ color: "red" }}>{formik.errors.whatsapp}</div>
          )}
        </FormLabel>
        <FormLabel>
          Escolha:
          <FormSelect
            name="tipoLead"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tipoLead}
          >
            <option value="" label="Selecione uma opção" />
            <option value="empresa" label="Para minha empresa" />
            <option value="especialista" label="Quero atuar como especialista" />
            <option value="cliente" label="Quero ser cliente" />
          </FormSelect>
        </FormLabel>
        <FormButton type="submit">Enviar</FormButton>
      </form>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Agradecimento"
        style={{
          content: {
            maxWidth: "400px",
            margin: "auto",
            textAlign: "center",
            height: "50%"
          },
        }}
      >
        <ModalTitle>Obrigado por se cadastrar</ModalTitle>
        <ModalContent>Agradecemos pelo interesse em nossos serviços!</ModalContent>
        <ModalButton  onClick={redirectToHome}>Ir para a página principal</ModalButton >
      </Modal>
    </LeadsFormContainer>
  );
};

export default LeadsForm;
