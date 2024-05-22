import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./header.css";
import { PrimeIcons } from "primereact/api";

const Header = () => {
  const items: MenuItem[] = [
    {
      label: "Dashboard",
    },
    {
      label: "Staff",
      items: [
        {
          label: "Add Staff",
          icon: PrimeIcons.USER_PLUS,
        },
        {
          label: "All Stuff",
          icon: PrimeIcons.USERS,
        },
      ],
    },
    {
      label: "Add New",
      items: [
        {
          label: "New Project",
          icon: PrimeIcons.PLUS,
        },
        {
          label: "New Category",
          icon: PrimeIcons.PLUS,
        },
      ],
    },
    {
      label: "Projects",
    },
    {
      label: "Tasks",
      items: [
        {
          label: "Add Task",
          icon: PrimeIcons.PLUS,
        },
        {
          label: "All Tasks",
          icon: PrimeIcons.LIST,
        },
      ],
    },
  ];

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
