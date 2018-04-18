import { Provider } from './provider';
export interface Service {
    id: number;
    name: string;
    icon?: string;
    img?: string;
    provider?: Provider; 
}
