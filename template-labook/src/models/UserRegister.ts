//Modelos para cadastro
export interface UserRegister {
    
    name: string,
    email:string,
    password:string

};

export interface UserRegisterCreate {
    id: string;
    name: string;
    email: string;
    password: string
}