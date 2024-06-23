"use client";

import MessageIcon from "@/components/icons/MessageIcon";
import NotificationIcon from "@/components/icons/NotificationIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import { HEADER_HEIGHT } from "@/constant/constant";
import { usePathname } from "next/navigation";
import TooltipWrapper from "./TooltipWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import { cn } from "@/lib/utils";

const Header = () => {
  const headerTitle = usePathname()
    ?.split("/")
    .filter((item) => item);
  const { setTheme } = useTheme();

  return (
    <div
      style={{ height: HEADER_HEIGHT }}
      className={`w-full  flex items-center px-2 sm:px-8  border-b border_light_primary justify-between bg-white z-50 `}
    >
      <h3 className="text-lg font-medium capitalize">
        {headerTitle.length ? headerTitle : "Dashboard"}
      </h3>
      <div className="flex gap-4">
        <TooltipWrapper message="Notification" className="header_menu_item">
          <NotificationIcon />
        </TooltipWrapper>
        <TooltipWrapper message="Message" className="header_menu_item">
          <MessageIcon />
        </TooltipWrapper>

        <TooltipWrapper message="Profile" className="header_menu_item">
          <ProfileIcon />
        </TooltipWrapper>

        {/* dark mood */}
        <TooltipWrapper message="Mood">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipWrapper>
      </div>
    </div>
  );
};

export default Header;
