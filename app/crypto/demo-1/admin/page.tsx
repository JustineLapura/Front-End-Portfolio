"use client";
import React, { useContext, useState } from "react";
import { AppointmentContext } from "@/context/DentalClinicContext/AppointmentContext";
import { AppointmentType } from "../appointments/page";

interface FilteredAppointment {
  name: string;
  status: string;
  date: string;
  dateRange: {
    startDate: string;
    endDate: string;
  }
}

const Page = () => {
  const { appointments, setAppointments } = useContext(AppointmentContext);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [name, setName] = useState("");
  const [status, setStatus] = useState("All");

  const handleFilter = () => {
    let filtered = appointments;
    // Filter by date range
    if (dateRange.startDate && dateRange.endDate) {
      filtered = filtered.filter(
        (appointment: FilteredAppointment) =>
          appointment.date >= dateRange.startDate &&
          appointment.date <= dateRange.endDate
      );
    }
    // Filter by patient name
    if (name) {
      filtered = filtered.filter((appointment: FilteredAppointment) =>
        appointment.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    // Filter by status
    if (status !== "All") {
      filtered = filtered.filter(
        (appointment: FilteredAppointment) => appointment.status === status
      );
    }
    setFilteredAppointments(filtered);
  };

  return (
    <div className="h-screen w-full text-gray-900 pt-[100px]">
      <div className="flex justify-center pt-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Appointments
        </h1>
      </div>
      <div className="h-full px-3 lg:flex pt-8 gap-8">
        <div className="w-[350px] sm:w-[450px] h-[50%] lg:w-1/5 lg:ml-[100px] mx-auto mb-12 lg:mb-0 border bg-gray-100 rounded-lg flex justify-center items-center">
          <div className="w-full h-full flex flex-col p-4 justify-center items-center">
            <h5 className="text-xl font-bold">Filters:</h5>

            <label className="text-sm font-semibold">Date Range:</label>
            <input
              type="date"
              placeholder="Enter end date"
              value={dateRange.endDate}
              onChange={(e) =>
                setDateRange((prev) => ({ ...prev, endDate: e.target.value }))
              }
              className="w-full border border-gray-300 px-2 py-4 rounded-md"
            />

            <label className="text-sm font-semibold">Patient:</label>
            <input
              type="text"
              placeholder="Enter patient name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            />

            <label className="text-sm font-semibold">Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            >
              <option value="All">All</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Rescheduled">Rescheduled</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Pending">Pending</option>
            </select>
            <button
              className="my-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              onClick={handleFilter}
            >
              Filter
            </button>
          </div>
        </div>
        <div className="w-[350px] sm:w-full lg:w-4/5 max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-md bg-gray-100 shadow-lg rounded mb-4 p-6">
              <thead>
                <tr className="border-b">
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(filteredAppointments.length > 0 ? filteredAppointments : appointments).map(
                  (appointment: AppointmentType, index: number) => (
                    <tr key={appointment.id}>
                      <td className="p-3 px-5">{index + 1}</td>
                      <td className="p-3 px-5">{appointment.name}</td>
                      <td className="p-3 px-5">
                        {new Date(appointment.date).toLocaleDateString(
                          "en-US",
                          { month: "long", day: "numeric", year: "numeric" }
                        )}
                      </td>
                      <td className="p-3 px-5">
                        {new Date(
                          `2000-01-01T${appointment.time}`
                        ).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </td>
                      <td>{appointment.status}</td>
                      <td className="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
