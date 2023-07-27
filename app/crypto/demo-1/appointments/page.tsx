"use client";
import React, { useContext } from "react";
import { AppointmentContext } from "@/context/DentalClinicContext/AppointmentContext";
import { nanoid } from "nanoid";
import TimeScheduleContext from "@/context/DentalClinicContext/TimeScheduleContext";
import ServicesContext from "@/context/DentalClinicContext/ServicesContext";
import Link from "next/link";

export type AppointmentType = {
  id: string;
  name: string;
  date: string;
  time: string;
  service: string;
  status: string;
};

export type ScheduleType = {
  day: string;
  startTime: string;
  endTime: string;
};

export type ServiceType = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const Page = () => {
  const { schedule } = useContext(TimeScheduleContext);
  const { services } = useContext(ServicesContext);
  const {
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
    handleServiceChange,
    setService,
  } = useContext(AppointmentContext);

  const displayedAppointments = appointments.filter(
    (appointment: AppointmentType) => appointment.name === "User"
  );

  const handleBookAppointment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Check if the selected date and time already exist in the appointments array
    const isDuplicate = appointments.some(
      (appointment: AppointmentType) =>
        appointment.date === date && appointment.time === time
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
        name: "User",
        date,
        time,
        status: "Pending",
        service,
      };

      // Update only the new appointment status to "Pending" and keep the existing appointments' statuses intact
      const updatedAppointments = [newAppointment, ...appointments];

      setAppointments(updatedAppointments);
      setDate("");
      setTime("");
      setService("");
      setErrorMessage(null);
    } else {
      setErrorMessage("Please fill the form correctly!");
    }
  };

  const sunday = schedule.find(
    (sched: ScheduleType) => sched.day.toLowerCase() === "sunday"
  ); // Find the schedule for Sunday
  const monday = schedule.find(
    (sched: ScheduleType) => sched.day.toLowerCase() === "monday"
  ); // Find the schedule for Monday
  const tuesday = schedule.find(
    (sched: ScheduleType) => sched.day.toLowerCase() === "tuesday"
  ); // Find the schedule for Tuesday
  const wednesday = schedule.find(
    (sched: ScheduleType) => sched.day.toLowerCase() === "wednesday"
  ); // Find the schedule for Wednesday
  const thursday = schedule.find(
    (sched: ScheduleType) => sched.day.toLowerCase() === "thursday"
  ); // Find the schedule for Thursday
  const friday = schedule.find(
    (sched: ScheduleType) => sched.day.toLowerCase() === "friday"
  ); // Find the schedule for Friday
  const saturday = schedule.find(
    (sched: ScheduleType) => sched.day.toLowerCase() === "saturday"
  ); // Find the schedule for Saturday

  const isSunday = (date: string) => {
    const day = new Date(date).getDay();
    return day === 0; // 0 corresponds to Sunday
  };

  const isMonday = (date: string) => {
    const day = new Date(date).getDay();
    return day === 1; // 1 corresponds to Monday
  };

  const isTuesday = (date: string) => {
    const day = new Date(date).getDay();
    return day === 2; // 2 corresponds to Tuesday
  };

  const isWednesday = (date: string) => {
    const day = new Date(date).getDay();
    return day === 3; // 3 corresponds to Wednesday
  };

  const isThursday = (date: string) => {
    const day = new Date(date).getDay();
    return day === 4; // 4 corresponds to Thursday
  };

  const isFriday = (date: string) => {
    const day = new Date(date).getDay();
    return day === 5; // 5 corresponds to Friday
  };

  const isSaturday = (date: string) => {
    const day = new Date(date).getDay();
    return day === 6; // 6 corresponds to Saturday
  };

  const validateDate = (date: string) => {
    const currentDate = new Date().toISOString().split("T")[0]; // Get the current date
    const isSundayValid = !sunday || !sunday.startTime || !sunday.endTime; // Check if Sunday schedule is valid
    const isMondayValid = !monday || !monday.startTime || !monday.endTime; // Check if Monday schedule is valid
    const isTuesdayValid = !tuesday || !tuesday.startTime || !tuesday.endTime; // Check if Tuesday schedule is valid
    const isWednesdayValid =
      !wednesday || !wednesday.startTime || !wednesday.endTime; // Check if Wednesday schedule is valid
    const isThursdayValid =
      !thursday || !thursday.startTime || !thursday.endTime; // Check if Thursday schedule is valid
    const isFridayValid = !friday || !friday.startTime || !friday.endTime; // Check if Friday schedule is valid
    const isSaturdayValid =
      !saturday || !saturday.startTime || !saturday.endTime; // Check if Saturday schedule is valid
    return (
      date < currentDate ||
      (isSunday(date) && isSundayValid) ||
      (isMonday(date) && isMondayValid) ||
      (isTuesday(date) && isTuesdayValid) ||
      (isWednesday(date) && isWednesdayValid) ||
      (isThursday(date) && isThursdayValid) ||
      (isFriday(date) && isFridayValid) ||
      (isSaturday(date) && isSaturdayValid)
    );
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (validateDate(selectedDate)) {
      // Handle invalid date
      setIsInvalidDate(true);
      setIsInvalidTime(false);
      setTime("");
    } else {
      setDate(selectedDate);
      setIsInvalidDate(false);
      setIsInvalidTime(false);
      setTime("");
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTime = e.target.value;
    const isValidTime = validateTime(selectedTime, date);

    setTime(selectedTime);
    setIsInvalidTime(!isValidTime);
  };

  const validateTime = (timeString: string, date: string) => {
    const selectedTime = new Date(`2000-01-01T${timeString}`);
    const day = new Date(date).getDay();

    let scheduleForDay;
    switch (day) {
      case 0:
        scheduleForDay = sunday;
        break;
      case 1:
        scheduleForDay = monday;
        break;
      case 2:
        scheduleForDay = tuesday;
        break;
      case 3:
        scheduleForDay = wednesday;
        break;
      case 4:
        scheduleForDay = thursday;
        break;
      case 5:
        scheduleForDay = friday;
        break;
      case 6:
        scheduleForDay = saturday;
        break;
      default:
        return false;
    }

    if (
      !scheduleForDay ||
      !scheduleForDay.startTime ||
      !scheduleForDay.endTime
    ) {
      // No schedule available for the selected day
      return false;
    }

    const startTime = new Date(`2000-01-01T${scheduleForDay.startTime}`);
    const endTime = new Date(`2000-01-01T${scheduleForDay.endTime}`);

    return selectedTime >= startTime && selectedTime <= endTime;
  };

  return (
    <div className="relative h-full w-full flex items-center pt-20 lg:pt-[100px]">
      {displayedAppointments.length > 0 && (
        <Link href="/crypto/demo-1/appointments/my-appointments">
          <button className="absolute right-4 top-[100px] py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-800 border-none text-sm text-white font-bold ">
            Goto My Appointments
          </button>
        </Link>
      )}
      <div className="h-full p-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 lg:m-auto items-center">
          <div className="md:col-span-1 w-[75%] md:w-[50%] lg:w-full lg:h-[75%] m-auto">
            <h1 className="text-center font-bold">Schedules:</h1>
            <table className="h-full w-full border table-fixed md:text-lg p-8 lg:text-sm bg-blue-50 text-black rounded-lg overflow-hidden ">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => {
                  const daySchedule = schedule.find(
                    (item: ScheduleType) => item.day === day
                  );
                  const startTime = daySchedule ? daySchedule.startTime : "";
                  const endTime = daySchedule ? daySchedule.endTime : "";

                  if (startTime && endTime) {
                    return (
                      <tr key={day}>
                        <td>{day}</td>
                        <td>
                          {new Date(
                            `2000-01-01T${startTime}`
                          ).toLocaleTimeString([], {
                            hour: "numeric",
                            minute: "2-digit",
                          })}{" "}
                          -{" "}
                          {new Date(`2000-01-01T${endTime}`).toLocaleTimeString(
                            [],
                            { hour: "numeric", minute: "2-digit" }
                          )}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={day}>
                      <td>{day}</td>
                      <td>Closed</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className=" md:col-span-1 text-center w-full sm:w-[75%] md:w-[50%] lg:w-full mx-auto">
            <h5 className="my-3 animate_animated animate__fadeIn">
              Hi, Justine !..
            </h5>
            <h3 className="my-3 text-primary animate__animated animate__pulse animate__delay-2s animate__infinite animate__slow">
              Book your appointment now.
            </h3>
            <form className="mx-auto border rounded-lg p-5  bg-blue-50">
              <div className="relative mb-3">
                {/* <img
                    className="absolute top-0 right-0"
                    width="55px"
                    alt="Click me GIF"
                  /> */}
                <label className="font-bold">Choose a preferred date:</label>
                <br />
                <input
                  className="cursor-pointer mb-1 w-1/2 border border-gray-400 py-2 px-4 rounded-lg text-center"
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                />
                {isInvalidDate && (
                  <div className="text-red-500">
                    Please select a date within the available schedule.
                  </div>
                )}
              </div>
              <div className="relative mb-3">
                {/* <img
                    className="absolute top-0 right-0"
                    width="55px"
                    alt="Click me GIF"
                  /> */}
                <label className="font-bold">Choose a preferred time:</label>
                <br />
                <input
                  className="cursor-pointer mb-1 w-1/2 border border-gray-400 py-2 px-4 rounded-lg text-center"
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                />
                {isInvalidTime && (
                  <div className="text-red-500">
                    Please select a time within the available schedule.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="font-bold">
                  Choose your preferred service:
                </label>
                <br />
                <select
                  className="cursor-pointer mb-1 w-1/2 mx-auto border border-gray-400 py-2 px-4 rounded-lg text-center lg:text-sm"
                  value={service}
                  onChange={handleServiceChange}
                >
                  <option value="">Select a service</option>
                  {services.map((service: ServiceType) => {
                    return (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {errorMessage && (
                <h6 className="mx-auto mt-2 text-red-500">{errorMessage}</h6>
              )}
              <div className="py-3">
                <button
                  onClick={handleBookAppointment}
                  className="btn-sm font-bold bg-red-500 text-white py-2 px-4 rounded-lg"
                  type="submit"
                >
                  Submit Appointment
                </button>
              </div>
            </form>
          </div>
          <div className="md:col-span-1 w-full sm:w-[75%] md:w-[50%] lg:w-full max-h-[450px] m-auto ">
            <h1 className="text-center font-bold">Services Offered:</h1>
            <table className="w-full table-fixed md:text-lg p-8 lg:text-sm bg-blue-50 text-black border rounded-lg overflow-hidden ">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {services.map((service: ServiceType) => (
                  <tr key={service.id}>
                    <td>{service.name}</td>
                    <td>P{service.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
