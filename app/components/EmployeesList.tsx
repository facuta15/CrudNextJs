
import { IEmployee } from "@/types/employees";
import Employee from "./Employee";

interface ListProps {
  employees: IEmployee[];
}

const EmployeesList: React.FC<ListProps> = ({ employees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <Employee employee={employee}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
