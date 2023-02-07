import {IUser} from "@/interfaces/IUser";

export interface ILoginUser{
    token: string
    user: IUser
}

export interface ILogin{
    email: string
    password: string
}
