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

export const AdminItems: MenuItem[] = [
  {
    label: "Dashboard",
    url: "admin/dashboard",
    template: itemLink,
  },
  {
    label: "Add New",
    items: [
      {
        label: "New Project",
        icon: PrimeIcons.PLUS,
        url: "admin/create-project",
        template: itemLink,
      },
      {
        label: "New Category",
        icon: PrimeIcons.PLUS,
        url: "admin/create-category",
        template: itemLink,
      },
    ],
  },
  {
    label: "Projects",
    url: "admin/project",
    template: itemLink,
  },
  {
    label: "Tasks",
    items: [
      {
        label: "Add Task",
        icon: PrimeIcons.PLUS,
        url: "admin/create-task",
        template: itemLink,
      },
      {
        label: "All Tasks",
        icon: PrimeIcons.LIST,
        url: "admin/task",
        template: itemLink,
      },
    ],
  },
];
