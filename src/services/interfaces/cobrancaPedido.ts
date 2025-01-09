import { Produto } from "./produto";

export interface CobrancaoCartao{
    installments: number;
    paymentToken: string;
    pedidos: Produto[];
}
