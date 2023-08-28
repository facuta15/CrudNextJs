import Employee from "./app/components/Employee";
import { IEmployee } from "./types/employees"

const baseURL = "http://localhost:3001/employees"

export const getAll = async (): Promise<IEmployee[]> =>{
    const res = (await fetch(`${baseURL}`,{cache:"no-store"})).json()
    return res;
}

export const addEmployee =async (employee:IEmployee):Promise<IEmployee> =>{
    const res = await fetch(`${baseURL}`, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    const newEmployee = await res.json();
    return newEmployee
}