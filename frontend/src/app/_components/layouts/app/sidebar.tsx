"use client";

import { Link } from "@tanstack/react-router";
import { TMenu, TNavbarMenu } from "../../types/navbar-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { useLocation } from "@tanstack/react-router";
import { NavUser } from "../../ui/nav-user";
import { useMemo } from "react";
import { useUser } from "@/app/_hooks/auth/use-user";
import { ROLE } from "@/common/enums/role-enum";
import {
  BookUserIcon,
  ClockIcon,
  FileCheckIcon,
  FileClockIcon,
  GaugeIcon,
  LandmarkIcon,
  SignalHighIcon,
  UserIcon,
} from "lucide-react";

const NavBarMenus: TNavbarMenu[] = [
  {
    label: "GENERAL",
    menus: [
      {
        label: "Dashboard HRD",
        path: "/dashboard/hrd",
        icon: <GaugeIcon />,
        role: [ROLE.HRD],
      },
      {
        label: "Dashboard Staff",
        path: "/dashboard/staff",
        icon: <GaugeIcon />,
        role: [ROLE.STAFF],
      },
    ],
  },
  {
    label: "EMPLOYEES",
    menus: [
      {
        label: "Users",
        path: "/users",
        icon: <UserIcon />,
        role: [ROLE.HRD],
      },
      {
        label: "Departments",
        path: "/departments",
        icon: <LandmarkIcon />,
        role: [ROLE.HRD],
      },
      {
        label: "Positions",
        path: "/positions",
        icon: <SignalHighIcon />,
        role: [ROLE.HRD],
      },
      {
        label: "Shifts",
        path: "/shifts",
        icon: <ClockIcon />,
        role: [ROLE.HRD],
      },
    ],
  },
  {
    label: "ATTENDANCES",
    menus: [
      {
        label: "Attendances",
        path: "/attendances",
        icon: <BookUserIcon />,
        role: [ROLE.STAFF, ROLE.HRD],
      },
      {
        label: "Attendance History",
        path: "/attendances/history",
        icon: <FileClockIcon />,
        role: [ROLE.STAFF, ROLE.HRD],
      },
      {
        label: "Attendance Report",
        path: "/attendances/reports",
        icon: <FileCheckIcon />,
        role: [ROLE.HRD],
      },
    ],
  },
];
const checkIsActive = (href: string, item: TMenu, mainNav = false) => {
  return (
    href === item.path ||
    href.split("?")[0] === item.path ||
    (mainNav &&
      href.split("/")[1] !== "" &&
      href.split("/")[1] === item.path.split("/")[1])
  );
};

export function AppSidebar() {
  const { data: user } = useUser();
  const pathName = useLocation().pathname;

  const filteredNavbarMenus = useMemo(() => {
    if (!user) return [];

    return NavBarMenus.reduce((acc: TNavbarMenu[], menu) => {
      const filteredMenus = menu.menus.filter((menuItem) =>
        menuItem.role.includes(user.role.name)
      );

      if (filteredMenus.length > 0) {
        acc.push({
          ...menu,
          menus: filteredMenus,
        });
      }

      return acc;
    }, []);
  }, [user]);

  return (
    <Sidebar collapsible="icon" variant="floating" aria-label="Main Sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"}>
              <h1 className="font-bold text-black">
                Attendance Management System
              </h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {filteredNavbarMenus.map((menu: TNavbarMenu) =>
          menu.label ? (
            <SidebarGroup key={menu.label}>
              <SidebarGroupLabel className="font-bold">
                {menu.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                {menu.menus.map((menuItem: TMenu) => (
                  <SidebarMenu key={menuItem.label}>
                    <SidebarMenuItem>
                      <Link to={menuItem.path}>
                        <SidebarMenuButton
                          isActive={checkIsActive(pathName, menuItem)}
                          tooltip={menuItem.label}
                          aria-label={menuItem.label}
                          className="data-[active=true]:bg-[#FCF3FA] data-[active=true]:font-semibold"
                        >
                          {menuItem.icon}
                          <span>{menuItem.label}</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                ))}
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            <SidebarGroupContent key={menu.label}>
              {menu.menus.map((menuItem: TMenu) => (
                <SidebarMenu key={menuItem.label}>
                  <SidebarMenuItem>
                    <Link to={menuItem.path}>
                      <SidebarMenuButton
                        aria-label={menuItem.label}
                        isActive={checkIsActive(pathName, menuItem)}
                        className="data-[active=true]:bg-[#FCF3FA] data-[active=true]:font-semibold"
                      >
                        {menuItem.icon}
                        <span>{menuItem.label}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          )
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
