import AddCategory from "../pages/category/AddCategory";
import Category from "../pages/category/Category";
import ManagerDashboard from "../pages/dashboard/ManagerDashboard";
import AddProject from "../pages/projects/AddProject";
import Projects from "../pages/projects/Projects";
import AddTask from "../pages/task/AddTask";
import AllTasks from "../pages/task/AllTasks";

export const managerRoutes = {
  path: "manager",
  children: [
    {
      path: "dashboard",
      element: <ManagerDashboard></ManagerDashboard>,
    },
    {
      path: "create-project",
      element: <AddProject></AddProject>,
    },
    {
      path: "project",
      element: <Projects></Projects>,
    },
    {
      path: "create-category",
      element: <AddCategory></AddCategory>,
    },
    {
      path: "category",
      element: <Category></Category>,
    },
    {
      path: "create-task",
      element: <AddTask></AddTask>,
    },
    {
      path: "task",
      element: <AllTasks></AllTasks>,
    },
  ],
};
