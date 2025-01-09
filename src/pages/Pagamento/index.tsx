import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import { Container } from '../CadastroEspecialista/style';
import { ContainerS, ContentWrapper, Box } from './style/style';
import './style/style.css'; // Importe o arquivo de estilos
import { useDispatch, useSelector } from 'react-redux';
import { selectPayment, setInputCPF, setInputValueCartao } from '../../services/payment/payloadSlice';
import { PagamentoViaCartao, PagamentoViaPix } from '../../services/pagamentoSevice';
import payloadSlice from '../../services/payment/payloadSlice';

function Accordion() {
  const dispatch = useDispatch();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const toggleInputVisibility = () => {
    setInputValueCartao({cartao:'', validade:'', cvc:''})
    setIsInputVisible(!isInputVisible)};
  const [dados, setDados] = useState({
    cartao: '',
    validade: '',
    cvc: ''
  });
 

  const handleInputChange = (event:any) => {
    const regex = /\//;
    let { name, value } = event.target;
    console.log(regex.test(value));
    if(name === 'validade'){
      console.log(value.slice(0, 1));
      if((value.length === 5 || value.length === 2) && !regex.test(value)){
        value = value + '/';
      }
      // if(event.keyCode === 8 && value.length === 2 && regex.test(value)){
      //   value = value.slice(0, 1);
      //   // console.log(value.slice(0, 1)); 
      // }
      //  if(event.keyCode === 8 && value.length === 5 && regex.test(value)){
      //   value = value.slice(0, 4); 
      //   // console.log(value);
      // }    
    }
    
    setDados((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
    dispatch(setInputValueCartao({...dados, [name]: value}));
  };

    return (
        <div>
          <button
            className={`element ${isInputVisible? 'clicked' : 'buttao'}`}
            type="button"    
            onClick={toggleInputVisibility}
          >
             <div className="d-flex">
              <span className='text-bold'>Credit card</span>
              <div>
              
                <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Visa" />
                <img src="https://i.imgur.com/W1vtnOV.png" width="30" alt="Mastercard" />
                <img src="https://i.imgur.com/35tC99g.png" width="30" alt="American Express" />
                <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Visa" />
              </div>
            </div>
          </button> 
              {isInputVisible && (
                < >
                 <div className='cartao-inputs'>
                  <div className='text-left m-10 p-b'><span>Numero do Cartão</span></div>
                  <div className="text-left p-b">
                    <input type="text" name='cartao' maxLength={16} value={dados.cartao} onChange={handleInputChange} className="m-10" placeholder="0000 0000 0000 0000" />
                    
                  </div>
                  
                  <div className="text-left m-10 p-b">
                      <span>Data de validade</span>
                      <span className="text-space">CVC/CVV</span>
                      </div>
                  <div className='d-flex p-b'>
                      <div className="text-left d-flex">
                        
                        <input type="text" name="validade" value={dados.validade} onChange={handleInputChange} className='m-10' min={4} maxLength={7} placeholder="MM/YY" />
                        <input type="text" name="cvc" value={dados.cvc} onChange={handleInputChange} className='m-10' placeholder="000"  maxLength={3} required />
                      </div>
                  </div>
                  <span><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                  </div>
                </>
              )}
        </div>
      );
    }

    function AccordionPix() {
        const dispatch = useDispatch();        
        const [isInputVisible, setIsInputVisible] = useState(false);
        const [inputValue, setInputValue] = useState('');        
        const toggleInputVisibility = () => {
          setInputValue("");
          setIsInputVisible(!isInputVisible)};
        
        const handleInputChange = (event:any) => {
          const newValue = event.target.value;
          setInputValue((prevValue) => newValue);
          dispatch(setInputCPF(newValue));
        }
        
        return (
            <div>
              <button
                className={`element ${isInputVisible? 'clicked' : 'buttao'}`}
                type="button"
                onClick={toggleInputVisibility}
              >
                <div className="d-flex">
                  <span className='text-bold'>PIX</span>
                  <div className="icons">
                    
                    <svg width={30} height={30} color='green' xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512 512">
                    <path
                     fill="#63E6BE"
                     d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"/>
                    </svg>
                  </div>
                </div>
              </button>   
                  {isInputVisible && (
                    <>
                     <div className='text-left m-10'><span>CPF</span></div>
                     
                        <div className="text-left m-10 p-b">
                            <input type="text" 
                          
                             maxLength={11}
                             placeholder="000.000.000-00"
                             required
                             value={inputValue}
                             onChange={handleInputChange} />
                        </div>
                    
                    </>
                  )}
              </div>
          );
        }
      

function PagamentoPage(){
  const payload = useSelector(selectPayment)

  async function handleRedirectPagamento()  {
    const regexNumeros = /^[0-9]+$/;
    if (payload.inputValuePix !== '') {
      if(payload.inputValuePix.length === 11 &&  regexNumeros.test(payload.inputValuePix)){   
        let data = await PagamentoViaPix({nome:"elias",
        cpf:payload.inputValuePix, 
        chave:"", valor:"0.01"})
        window.open(data!.linkVisualizacao, '_blank');              
          
      }else{
        alert('O cpf fornecido não está em um formato válido.');
      }
    }
    else{
      if(payload.inputValueCartao.cartao.length === 16 && regexNumeros.test(payload.inputValueCartao.cartao) 
        && payload.inputValueCartao.validade.length >= 4 
        && payload.inputValueCartao.cvc.length >= 3 && regexNumeros.test(payload.inputValueCartao.cvc)){

        let data = await PagamentoViaCartao(
        {nome:"elias",
        parcelas:"2",
        bandeira:"", 
        cvc:payload.inputValueCartao.cvc,
        cartao:payload.inputValueCartao.cartao,
        validade:payload.inputValueCartao.validade,
        valor:30000} // equivalente a 300.00
      )
        // window.open(data!.linkVisualizacao, '_blank'); 
      }
      else{
        alert('O Dados do Cartão fornecido não estão em um formato válido.');
      }
    }
   
   
               
  };
  
  return (
    <Container>
    <Navbar />
    <ContainerS>
      <ContentWrapper>
        <Box>
          <AccordionPix />
          <Accordion />
        </Box>
        <Box>
          <div className='content'>
            <div>
                <h3>Nome do produto</h3>
                <div className="d-flex card-top">
                      <span className="super-month">Taxa do Piscologo</span>
                      <span className="super-price">R$9.99</span>
                  </div>
                 
                  <div className="d-flex card-top">
                      <span className="super-month">Quantidade sessões</span>
                      <span className="super-price">2 sesões</span>
                  </div>  
            </div>
            <div className='card-medion'>
              <div className='d-flex'>
                Bônus de indicação
              <span>-R$2,00</span>
              </div>
            <div className='d-flex'>
                <span>total</span>
                <span>R$33,99</span>
            </div>    
            </div>
            <div className='card-botton'>
            
                  <div className="p-b">
                    <input type="text" 
                      max={11}
                      placeholder="CODIGO DE DESCONTO"
                      />
                </div>
                
                <button type='button' className='confirme-button' onClick={handleRedirectPagamento}>confirmar compra</button>
            </div>
          </div>
        </Box>
        
      </ContentWrapper>
    </ContainerS>
    </Container>
    
  );
};

export default PagamentoPage;



