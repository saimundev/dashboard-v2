import AddProduct from "@/app/product/add-product/page";
import AddBannerIcon from "@/components/icons/AddBannerIcon";
import AddCouponIcon from "@/components/icons/AddCouponIcon";
import AddRoleIcon from "@/components/icons/AddRoleIcon";
import CategoryIcon from "@/components/icons/CategoryIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import OrderIcon from "@/components/icons/OrderIcon";
import ProductIcon from "@/components/icons/ProductIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import UserIcon from "@/components/icons/UserIcon";

export const routes = [
  { name: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { name: "Orders", path: "/order", icon: <OrderIcon /> },
  { name: "Users", path: "/user", icon: <UserIcon /> },
  { name: "Product", path: "/product", icon: <ProductIcon /> },
  { name: "Category", path: "/category", icon: <CategoryIcon /> },
  {
    name: "Add Banner",
    path: "/banner",
    icon: <AddBannerIcon />,
  },
  {
    name: "Add Coupon",
    path: "/coupon",
    icon: <AddCouponIcon />,
  },
  {
    name: "Add Role",
    path: "/roles",
    icon: <AddRoleIcon />,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <SettingIcon />,
    subRoutes: [
      {
        name: "Add Brand Name",
        path: "/setting/add-brand-name",
        icon: <DashboardIcon />,
      },
      {
        name: "Add Brand Logo",
        path: "/setting/add-brand-logo",
        icon: <DashboardIcon />,
      },
      {
        name: "Theme Color",
        path: "/setting/theme-color",
        icon: <DashboardIcon />,
      },
      {
        name: "Change Logo",
        path: "/dashboard/change-logo",
        icon: <DashboardIcon />,
      },
      {
        name: "Change Logo",
        path: "/dashboard/change-logo",
        icon: <DashboardIcon />,
      },
    ],
  },
];
