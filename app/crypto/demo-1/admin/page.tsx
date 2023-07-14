"use client"
import React, { useContext } from "react";
import { AppointmentContext } from "@/context/DentalClinicContext/AppointmentContext";
import { AppointmentType } from "../appointments/page";

const page = () => {
  const { appointments, setAppointments } = useContext(AppointmentContext);
  return (
    <div className="h-screen w-full text-gray-900 pt-[100px]">
      <div className="p-4 flex justify-center">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <div className="w-[350px] sm:w-full max-w-4xl">
          <div className="overflow-x-auto">
            <table className="w-full text-md bg-gray-100 shadow-xl rounded mb-4 p-6">
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
                {appointments.map(
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

export default page;
