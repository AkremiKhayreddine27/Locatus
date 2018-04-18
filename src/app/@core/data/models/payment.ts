import { Provider } from './provider';
export interface Payment{
    amount: number;
    status: string;
    type: string;
    date: Date;
    payer: Provider;
}