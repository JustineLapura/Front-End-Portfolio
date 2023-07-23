"use client";
import ServicesContext from "@/context/DentalClinicContext/ServicesContext";
import React, { useContext } from "react";

type ServicesType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const Page = () => {
  const { services } = useContext(ServicesContext);
  return (
    <div className="relative flex flex-col gap-8 justify-center items-center">
      <h3 className="text-xl md:text-2xl font-bold pt-36">My Appointments</h3>
      <div className="md:w-[800px] lg:w-[1000px] xl:w-full max-w-4xl mx-auto py-4 px-6">
        <div className="overflow-x-auto">
          <table className="w-full text-md bg-gray-100 shadow-lg rounded mb-4 p-6">
            <thead>
              <tr className="border-b">
                <th className="text-center">#</th>
                <th className="text-center">Name</th>
                <th className="hidden lg:block text-center">Description</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service: ServicesType, index: number) => (
                <tr key={service.id}>
                  <td className="p-3 px-5 text-center">{index + 1}</td>
                  <td className="p-3 px-5 text-center">{service.name}</td>
                  <td className="p-3 px-5 text-center hidden lg:block">{service.description}</td>
                  <td className="p-3 px-5 text-center">P{service.price.toFixed(2)}</td>
                  <td className="p-3 px-5 text-center">
                    <button
                      className="mr-2 my-2 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      // onClick={() => handleEditServiceModalOpen(service.id)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"

                      // onClick={() => handleDeleteService(service.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
