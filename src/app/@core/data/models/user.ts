export interface User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string; 
    birthDay?: Date;
    phone?: string;
}
