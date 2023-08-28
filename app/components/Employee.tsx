import { IEmployee } from "@/types/employees";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import React from "react";

interface EmployeeProps {
  employee: IEmployee;
}
const Employee: React.FC<EmployeeProps> = ({ employee }) => {
  return (
    <tr key={employee.name}>
      <td>{employee.name}</td>
      <td>{employee.job}</td>
      <td>{employee.age}</td>
      <td>
        <div className=" inline-flex">
        <button className="btn btn-warning btn-xs ">
          <AiFillEdit />
        </button>
        <button className="btn btn-error btn-xs ">
          <AiOutlineDelete />
        </button>
        </div>
      </td>
    </tr>
  );
};

export default Employee;
