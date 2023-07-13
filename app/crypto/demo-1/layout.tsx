import Navbar from "@/components/DentalClinicComponents/Navbar";
import React from "react";
import { AppointmentProvider } from "@/context/DentalClinicContext/AppointmentContext";
import { TimeScheduleProvider } from "@/context/DentalClinicContext/TimeScheduleContext";
import { ServiceProvider } from "@/context/DentalClinicContext/ServicesContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full">
      <AppointmentProvider>
        <TimeScheduleProvider>
          <ServiceProvider>
            <div className="h-full">
              <Navbar />
              {children}
            </div>
          </ServiceProvider>
        </TimeScheduleProvider>
      </AppointmentProvider>
    </div>
  );
};

export default layout;
