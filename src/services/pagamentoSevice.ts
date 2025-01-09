import axios, { AxiosResponse } from "axios";
import EfiPay from "./payment-token-efi";
import { info } from "console";
import { CobrancaoCartao } from "./interfaces/cobrancaPedido";
import { Produto } from "./interfaces/produto";

const API_BASE_URL = "http://localhost:8080";

interface DadosdePagamentoPix {
    nome: string;
    cpf: string;
    chave: string;
    valor: string;
  }

interface DadosdePagamentoCartao {
    nome: string;
    parcelas: string;
    cvc: string;
    cartao: string;
    validade: string;
    valor: number;
    bandeira: string;
   
  }  

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",

  },
});


export const PagamentoViaPix = async (testData: DadosdePagamentoPix): Promise<any> => {
    try {
      const response: AxiosResponse = await api.post(API_BASE_URL+"/pix",testData);
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar dados para o servidor:", error);
      throw error;
    }
  };

export const PagamentoViaCartao = async (cartaoData: DadosdePagamentoCartao): Promise<any> => {
    try {
      cartaoData.bandeira = await getBandeira(cartaoData.cartao);
      let valor = await ModosdeParcelamento(cartaoData);
      let valo2 = await getPaymentTokenEfi(cartaoData);
      const pedido = {
        nome: "consulta com daniel",
        valor: 30000,
        quantidade: 1
      } as Produto;

      const cobrancaPedido = {
        installments: 2,
        paymentToken: valo2,
        pedidos: [
           pedido
        ] 
      } as CobrancaoCartao;
      
      const response: AxiosResponse = await api.post(API_BASE_URL+"/cartao/",cobrancaPedido);
      console.log("ModosdeParcelamento"+ valor);
      console.log(valo2);
      console.log(response);
      // return response!.data;
    } catch (error) {
      console.error("Erro ao enviar dados para o servidor:", error);
      throw error;
    }

};

export const ObterChavePix = async (): Promise<any> => {
try {
    const response: AxiosResponse = await api.get(API_BASE_URL+"/pix/evp/list");
    if(response.data.chaves.length === 0){
        const response: AxiosResponse = await api.get(API_BASE_URL+"/pix/evp");
        return response.data;
    }
    return response.data;
} catch (error) {
    console.error("Erro no servidor:", error);
    throw error;
}
};  
  
export const getPaymentTokenEfi = async (infocartao:DadosdePagamentoCartao) => {
  try {
    return await EfiPay.CreditCard
      .debugger(false, false)
      .setAccount('337a4f7cbe81584674886cf778cd07ad')
      .setEnvironment('production') // 'production' or 'sandbox'  
      .setCreditCardData({
        brand: infocartao.bandeira,
        number: infocartao.cartao,
        cvv: infocartao.cvc,
        expirationMonth: infocartao.validade.split('/')[0],
        expirationYear:infocartao.validade.split('/')[1],
        reuse: true
      })
      .getPaymentToken()
      .then((data: any) => data)
      .catch((err: any) => { // Adicione a tipagem para 'err'
        console.log('Código: ', err.code);
        console.log('Nome: ', err.error);
        console.log('Mensagem: ', err.error_description);
      });
  } catch (error: any) { // Adicione a tipagem para 'error'
    console.log('Código payment : ', error.code);
    console.log('Nome payment: ', error.error);
    console.log('Mensagem: ', error.error_description);
  }
};

export const ModosdeParcelamento = async (infocartao:DadosdePagamentoCartao): Promise<any> => {
  try{
 return await EfiPay.CreditCard
  .setAccount('337a4f7cbe81584674886cf778cd07ad')
  .setEnvironment('production') // 'production' or 'sandbox'
  .setBrand(infocartao.bandeira)
  .setTotal(infocartao.valor)
  .getInstallments()
  .then((installments:any) => installments)
  .catch((err:any) => {
      console.log('Código parcelas: ', err.code);
      console.log('Nome parcelas: ', err.error);
      console.log('Mensagem parcelas: ', err.error_description);
  });
  }catch(error:any){
    console.log('Código: ', error.code);
    console.log('Nome: ', error.error);
    console.log('Mensagem: ', error.error_description);
  }
}

const getBandeira = async (numeroCartao:string):Promise<any> => {
  try {
   return await EfiPay.CreditCard
      .setCardNumber(numeroCartao)
      .verifyCardBrand()
      .then((brand:string) => brand)
      .catch((err:any) => {
          console.log('Código: ', err.code);
          console.log('Nome: ', err.error);
          console.log('Mensagem: ', err.error_description);
          return '';
      });
} catch (error:any) {
  console.log('Código: ', error.code);
  console.log('Nome: ', error.error);
  console.log('Mensagem: ', error.error_description);
}
}
