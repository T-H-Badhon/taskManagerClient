import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./header.css";
import { AdminItems } from "./AdminItems";
// import { ManagerItems } from "./ManagerItems";
// import { EmployeeItems } from "./EmployeeItems";

const Header = () => {
  const role = "admin";
  let menuItems: MenuItem[] = [];

  //switch use korte hobe
  if (role == "admin") {
    menuItems = [...AdminItems];
  }
  // if (role == "manager") {
  //   menuItems = [...ManagerItems];
  // }
  // if (role == "employee") {
  //   menuItems = [...EmployeeItems];
  // }
  const items: MenuItem[] = menuItems;
  return (
    <div>
      <div className="block md:hidden">
        <h1 className="font-bold text-xl text-center my-2">Task Manager</h1>
      </div>
      <div className="headerCard px-4 flex justify-between items-center bg-blue-300">
        <div className="hidden md:block">
          <h1 className="font-bold text-xl">Task Manager</h1>
        </div>
        <div className="flex-grow md:flex-grow-0">
          <Menubar className="bg-blue-300" model={items} />
        </div>

        <div>
          <h1>bar</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
