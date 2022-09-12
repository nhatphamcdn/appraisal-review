import { SidebarItem } from "~/@types/sidebar";

export const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    id: "settings",
    name: "Settings",
    children: [
      {
        name: "360 Templates",
        link: "/settings/templates",
      },
    ],
  },
];
