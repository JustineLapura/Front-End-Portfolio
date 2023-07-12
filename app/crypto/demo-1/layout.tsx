import Navbar from "@/components/DentalClinicComponents/Navbar";
import React from "react";
import { AppointmentProvider } from "@/context/DentalClinicContext/AppointmentContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full">
      <AppointmentProvider>
        <Navbar />
        {children}
      </AppointmentProvider>
    </div>
  );
};

export default layout;
