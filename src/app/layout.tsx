import { Metadata } from "next";
import "@/styles/globals.css";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import { SIDEBAR_WIDTH } from "@/constant/constant";
import StoreProvider from "@/store/StoreProvider";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "this is description section",
};

type DashboardChildrenProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });
const DashboardLayout = ({ children }: DashboardChildrenProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="orangered" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <div className="flex">
              <div className="sticky top-0">
                <Sidebar />
              </div>
              <div className="w-[calc(100%-56px)] sm:w-full">
                <div className="sticky top-0">
                  <Header />
                </div>
                <div className="px-2 sm:px-8 pt-4 ">{children}</div>
              </div>
            </div>
          </StoreProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default DashboardLayout;
