"use client";
import { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isInvalidDate, setIsInvalidDate] = useState(false);
  const [isInvalidTime, setIsInvalidTime] = useState(false);
  const [appointments, setAppointments] = useState(() => {
    let storedAppointments = null;

    if (typeof window !== "undefined") {
      storedAppointments = localStorage.getItem("appointments");
    }

    return storedAppointments
      ? JSON.parse(storedAppointments)
      : [
          // Initial appointments data...
          {
            id: nanoid(),
            name: "John Smith",
            date: "April 28, 2023",
            time: "10:30 AM",
            service: "Check-up",
            status: "Confirmed",
          },
          {
            id: nanoid(),
            name: "Jane Dove",
            date: "May 2, 2023",
            time: "2:00 PM",
            service: "Cleaning",
            status: "Pending",
          },
          {
            id: nanoid(),
            name: "Pedro Penduco",
            date: "May 8, 2023",
            time: "9:30 AM",
            service: "Filling",
            status: "Cancelled",
          },
        ];
  });

  // Save appointments to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    }
  }, [appointments]);


  const handleBookAppointment = (e) => {
    e.preventDefault();

    // Check if the selected date and time already exist in the appointments array
    const isDuplicate = appointments.some(
      (appointment) => appointment.date === date && appointment.time === time
    );

    if (isDuplicate) {
      setErrorMessage(
        "This appointment date and time is already taken. Please choose a different date and time."
      );
    } else if (
      date !== "" &&
      time !== "" &&
      service !== "" &&
      !isInvalidDate &&
      !isInvalidTime
    ) {
      const newAppointment = {
        id: nanoid(),
        name: `${selectedUser.firstName} ${selectedUser.lastName}`,
        date,
        time,
        status: "Pending",
        service,
      };

      // Update only the new appointment status to "Pending" and keep the existing appointments' statuses intact
      const updatedAppointments = [newAppointment, ...appointments];

      setAppointments(updatedAppointments);
    } else {
      setErrorMessage("Please fill the form correctly!");
    }
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setService(selectedService);
  }


  return (
    <AppointmentContext.Provider
      value={{
        date,
        time,
        service,
        errorMessage,
        isInvalidDate,
        isInvalidTime,
        setDate,
        setIsInvalidDate,
        setTime,
        setIsInvalidTime,
        setErrorMessage,
        appointments,
        setAppointments,
        handleServiceChange
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
