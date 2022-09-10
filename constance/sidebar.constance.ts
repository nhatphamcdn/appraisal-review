import { SidebarItem } from "~/@types/sidebar";

export const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    id: "group-test",
    name: "Group Test",
    children: [
      {
        name: "Dashboardssss",
        link: "/#",
      },
    ],
  },
];
