export type TMenu = {
  icon?: React.ReactNode;
  label: string;
  path: string;
  role: string[];
};

export type TNavbarMenu = {
  label?: string;
  menus: TMenu[];
};
