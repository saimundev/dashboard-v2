"use client";

import {
  HEADER_HEIGHT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_COLLAPSE,
} from "@/constant/constant";
import React, { useEffect, useState } from "react";

import NavItem from "./NavItem";
import SubRoutes from "./SubRoutes";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { routes } from "@/routes/Routes";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 890) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    });
  }, []);
  return (
    <aside className="sticky top-0">
      <motion.div
        initial={{
          width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSE,
        }}
        animate={{
          width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSE,
        }}
        transition={{ duration: 0.3 }}
        className="h-screen border-r border-gra-200 relative bg-black/95 "
      >
        <div
          style={{ height: HEADER_HEIGHT }}
          className={`flex items-center justify-center px-4  border-b border-gray-800`}
        >
          <h3
            className={cn(
              "font-bold text-3xl text-gray-400  text-center duration-300 origin-center",
              sidebarOpen ? "opacity-1 scale-1 delay-200" : "opacity-0 scale-0"
            )}
          >
            Gray <span className="text-orange-500">shop</span>
          </h3>
        </div>

        <nav className="space-y-1 px-2 pt-2 overflow-hidden">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SubRoutes
                  key={index}
                  routes={route}
                  sidebarOpen={sidebarOpen}
                />
              );
            }
            return (
              <NavItem key={index} NavItem={route} sidebarOpen={sidebarOpen} />
            );
          })}

          <div
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="absolute bottom-4 -right-5 border border-gray-800 p-2 rounded-full bg-gray-800 cursor-pointer text-white "
          >
            <RightArrowIcon
              className={cn(
                "duration-300",
                sidebarOpen ? "rotate-180" : "rotate-0"
              )}
            />
          </div>
        </nav>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
