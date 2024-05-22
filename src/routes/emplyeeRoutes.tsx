import EmployeeDashboard from "../pages/dashboard/EmployeeDashboard";
import AllTasks from "../pages/task/AllTasks";

export const employeeRoutes = {
  path: "employee",
  children: [
    {
      path: "dashboard",
      element: <EmployeeDashboard></EmployeeDashboard>,
    },
    {
      path: "task",
      element: <AllTasks></AllTasks>,
    },
  ],
};
