import { PrimeIcons } from "primereact/api";
import { MenuItem } from "primereact/menuitem";
import { Link } from "react-router-dom";

const itemLink = (item: MenuItem) => {
  if (item?.url) {
    return (
      <Link to={item.url} className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
      </Link>
    );
  }
};

export const EmployeeItems: MenuItem[] = [
  {
    label: "Dashboard",
    url: "employee/dashboard",
    template: itemLink,
  },
  {
    label: "Tasks",
    items: [
      {
        label: "Add Task",
        icon: PrimeIcons.PLUS,
        url: "employee/create-task",
        template: itemLink,
      },
      {
        label: "All Tasks",
        icon: PrimeIcons.LIST,
        url: "employee/task",
        template: itemLink,
      },
    ],
  },
];
