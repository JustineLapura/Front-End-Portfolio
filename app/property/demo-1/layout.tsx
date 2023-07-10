import Navbar from "@/components/OrderingAppComponents/Navbar";
import { OrderProvider } from "@/context/OrderingAppContext/OrderContext";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrderProvider>
        {children}
      </OrderProvider>
    </div>
  );
};

export default layout;
