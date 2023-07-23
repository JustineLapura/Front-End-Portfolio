"use client";
import { AppointmentContext } from "@/context/DentalClinicContext/AppointmentContext";
import React, { useContext } from "react";
import { AppointmentType } from "../page";
import Link from "next/link";

const Page = () => {
  const { appointments } = useContext(AppointmentContext);

  const displayedAppointments = appointments.filter(
    (appointment: AppointmentType) => appointment.name === "User"
  );
  return (
    <div className="relative flex flex-col gap-8 justify-center items-center">
      <Link href="/crypto/demo-1/appointments">
        <button className="absolute left-4 top-[100px] py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-800 border-none text-sm text-white font-bold hover:shadow-xl">
          Go back
        </button>
      </Link>
      <h3 className="text-xl md:text-2xl font-bold pt-36">My Appointments</h3>
      <div className="w-full max-w-4xl mx-auto py-4 px-6">
        <div className="overflow-x-auto">
          <table className="w-full text-md bg-gray-100 shadow-xl rounded mb-4 p-6">
            <thead>
              <tr className="border-b">
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedAppointments &&
                displayedAppointments.map(
                  (appointment: AppointmentType, index: number) => (
                    <tr key={appointment.id}>
                      <td className="p-3 px-5">{index + 1}</td>
                      <td className="p-3 px-5">
                        {new Date(appointment.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
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
  );
};

export default Page;
