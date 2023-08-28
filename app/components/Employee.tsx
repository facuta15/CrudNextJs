"use client";

import { IEmployee } from "@/types/employees";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editEmployee } from "@/api";

interface EmployeeProps {
  employee: IEmployee;
}
const Employee: React.FC<EmployeeProps> = ({ employee }) => {
  const router = useRouter()
  const [modalOpenEdit, setModalEditOpen] = useState<boolean>(false);
  const [modalOpenDelete, setModalDeleteOpen] = useState<boolean>(false);
  const [employeeEdit, setEmployeeEdit] = useState<IEmployee>({
    id: employee.id,
    name: employee.name,
    age: employee.age,
    job: employee.job,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editEmployee(employeeEdit);
    
    setModalEditOpen(false)
    router.refresh()
  };

  return (
    <tr key={employee.name}>
      <td>{employee.name}</td>
      <td>{employee.job}</td>
      <td>{employee.age}</td>
      <td className="flex gap-5">
        <button onClick={()=>{
          setModalEditOpen(true)
        }}>
          <AiFillEdit className="text-blue-500" size={25} />
        </button  >
        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalEditOpen}>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Add new employee</h3>

            <div className="form-control w-full max-w-xs modal-action p-5">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                value={employeeEdit.name}
                onChange={(e) =>
                  setEmployeeEdit({ ...employeeEdit, name: e.target.value })
                }
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs modal-action p-5">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                value={employeeEdit.age}
                onChange={(e) =>
                  setEmployeeEdit({ ...employeeEdit, age: e.target.value })
                }
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs modal-action p-5">
              <label className="label">
                <span className="label-text">Job</span>
              </label>
              <input
                value={employeeEdit.job}
                onChange={(e) =>
                  setEmployeeEdit({ ...employeeEdit, job: e.target.value })
                }
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </Modal>
        <button>
          <AiOutlineDelete className="text-red-500" size={25} />
        </button>
      </td>
    </tr>
  );
};

export default Employee;
