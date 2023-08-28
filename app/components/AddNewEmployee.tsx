"use client";

import { BiAddToQueue } from "react-icons/bi";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addEmployee } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import { IEmployee } from "@/types/employees";


const AddNewEmployee = () => {

  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [newEmployee, setNewEmployee] = useState<IEmployee>({
    id: uuidv4(),
    name: '',
    age: '',
    job: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addEmployee(newEmployee);
    setNewEmployee({
      id: uuidv4(),
      name: '',
      age: '',
      job: '',
    });
    setModalOpen(false)
    router.refresh()
  };
  return (
    <div>
      <button
        className="btn btn-primary w-50"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add new employee
        <BiAddToQueue />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new employee</h3>

          <div className="form-control w-full max-w-xs modal-action p-5">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
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
              value={newEmployee.age}
              onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })}
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
              value={newEmployee.job}
              onChange={(e) => setNewEmployee({ ...newEmployee, job: e.target.value })}
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
    </div>
  );
};

export default AddNewEmployee;
