import { IEmployee } from "./types/employees"

const baseURL = "http://localhost:3001/employees"

export const getAll = async (): Promise<IEmployee[]> =>{
    const res = (await fetch(`${baseURL}`)).json()
    return res;
}