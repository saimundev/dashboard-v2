import { useState } from "react";
import NavItem from "./NavItem";
import { AnimatePresence, motion } from "framer-motion";
import { heightAnimate } from "@/components/animation/animation";

type NavItemProps = {
  routes: {
    name: string;
    path: string;
    icon: JSX.Element;
    subRoutes: {
      name: string;
      path: string;
      icon: JSX.Element;
    }[];
  };
  sidebarOpen: boolean;
};

const SubRoutes = ({ routes, sidebarOpen }: NavItemProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  return (
    <div className="">
      <div className="flex" onClick={() => setIsSubmenuOpen((prev) => !prev)}>
        {/* main menu item */}
        <NavItem
          NavItem={routes}
          isSubmenuOpen={isSubmenuOpen}
          subRouteIcon={true}
          sidebarOpen={sidebarOpen}
        />
      </div>
      {/* sub menu item render here*/}
      <AnimatePresence>
        {isSubmenuOpen && (
          <motion.div
            variants={heightAnimate}
            initial="hide"
            animate="show"
            exit="exit"
            className="pl-3 overflow-hidden"
          >
            {routes.subRoutes.map((subRoute) => (
              <NavItem
                key={subRoute.path}
                NavItem={subRoute}
                sidebarOpen={sidebarOpen}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubRoutes;
