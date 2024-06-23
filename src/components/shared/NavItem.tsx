"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  NavItem: {
    name: string;
    path: string;
    icon: JSX.Element;
  };
  subRouteIcon?: boolean;
  isSubmenuOpen?: boolean;
  sidebarOpen: boolean;
};

const NavItem = ({
  NavItem,
  subRouteIcon,
  isSubmenuOpen,
  sidebarOpen,
}: NavItemProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={NavItem.path}
      className={cn(
        "flex justify-between text-white  w-full hover:bg-gray-800 p-2 rounded duration-300 transition-all group",
        pathName === NavItem.path ? "bg-orange-700 font-semibold" : ""
      )}
    >
      <div className="flex gap-4">
        <div className="">{NavItem.icon}</div>

        <div className="group-hover:translate-x-1.5 duration-300 transition-all whitespace-nowrap">
          {NavItem.name}
        </div>
      </div>

      {/* sub menu arrow icon show */}
      {subRouteIcon && sidebarOpen && (
        <RightArrowIcon
          className={cn(
            "duration-300",
            isSubmenuOpen && subRouteIcon && "rotate-90 duration-300"
          )}
        />
      )}
    </Link>
  );
};

export default NavItem;
