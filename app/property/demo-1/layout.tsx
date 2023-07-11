import Navbar from "@/components/OrderingAppComponents/Navbar";
import { OrderProvider } from "@/context/OrderingAppContext/OrderContext";
import { ThemeProvider } from "@/context/OrderingAppContext/ThemeContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrderProvider>
        <ThemeProvider>
          <Navbar/>
          {children}
          </ThemeProvider>
      </OrderProvider>
    </div>
  );
};

export default layout;
