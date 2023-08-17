import { getAll } from "@/api";
import AddNewEmployee from "./components/AddNewEmployee";
import EmployeesList from "./components/EmployeesList";

export default async function Home() {
  const employees = await getAll();

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-y flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Admin Pannel</h1>
        <AddNewEmployee/>
        <EmployeesList employees = {employees}/>
      </div>
    </main>
  );
}
