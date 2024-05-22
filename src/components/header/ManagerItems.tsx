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

export const ManagerItems: MenuItem[] = [
  {
    label: "Dashboard",
    url: "manager/dashboard",
    template: itemLink,
  },
  {
    label: "Staff",
    items: [
      {
        label: "Add Staff",
        icon: PrimeIcons.USER_PLUS,
        url: "manager/create-staff",
        template: itemLink,
      },
      {
        label: "All Stuff",
        icon: PrimeIcons.USERS,
        url: "manager/staff",
        template: itemLink,
      },
    ],
  },
  {
    label: "Add New",
    items: [
      {
        label: "New Project",
        icon: PrimeIcons.PLUS,
        url: "manager/create-project",
        template: itemLink,
      },
      {
        label: "New Category",
        icon: PrimeIcons.PLUS,
        url: "manager/create-category",
        template: itemLink,
      },
    ],
  },
  {
    label: "Projects",
    url: "manager/project",
    template: itemLink,
  },
  {
    label: "Tasks",
    items: [
      {
        label: "Add Task",
        icon: PrimeIcons.PLUS,
        url: "manager/create-task",
        template: itemLink,
      },
      {
        label: "All Tasks",
        icon: PrimeIcons.LIST,
        url: "manager/task",
        template: itemLink,
      },
    ],
  },
];
