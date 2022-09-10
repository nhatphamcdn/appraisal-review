export interface PItem {
  name: string;
  link?: string | object;
  icon?: string;
}

export interface SidebarItem extends PItem {
  id?: string;
  children?: Array<PItem>;
}

export interface ISidebarProps {
  width?: number;
  backgroundColor?: string;
  items: Array<SidebarItem>;
}
