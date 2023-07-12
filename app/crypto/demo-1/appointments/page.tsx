import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5 items-center">
          <div className="md:col-span-1 w-[75%] lg:h-[75%] m-auto">
            <h1 className="text-center font-bold">Schedules:</h1>
            <table className="h-full w-full table-fixed md:text-lg p-8 lg:text-sm bg-white text-black border rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
                <tr className="border">
                  <td>Tuesday</td>
                  <td>Closed</td>
                </tr>
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" md:col-span-1 text-center w-full sm:w-[75%] lg:w-full mx-auto">
            <h5 className="my-3 animate_animated animate__fadeIn">
              Hi, Justine !..
            </h5>
            <h3 className="my-3 text-primary animate__animated animate__pulse animate__delay-2s animate__infinite animate__slow">
              Book your appointment now.
            </h3>
            <form className="mx-auto border rounded-lg p-5 shadow-lg">
              <div className="relative mb-3">
                {/* <img
                    className="absolute top-0 right-0"
                    width="55px"
                    alt="Click me GIF"
                  /> */}
                <label className="font-bold">Choose a preferred date:</label>
                <br />
                <input
                  className="form-control mb-1 w-1/2 border border-gray-400 py-2 px-4 rounded-lg text-center"
                  type="date"
                />
                {/* <div className="text-red-500">
                    Please select a date within the available schedule.
                  </div> */}
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
                  className="form-control mb-1 w-1/2 border border-gray-400 py-2 px-4 rounded-lg text-center"
                  type="time"
                />
                {/* <div className="text-red-500">
                    Please select a time within the available schedule.
                  </div> */}
              </div>
              <div className="mb-3">
                <label className="font-bold">
                  Choose your preferred service:
                </label>
                <br />
                <select className="form-control mb-1 w-1/2 mx-auto border border-gray-400 py-2 px-4 rounded-lg text-center lg:text-sm">
                  <option value="">Select a service</option>
                  <option>Sample Service</option>
                </select>
              </div>
              {/* <h6 className="mx-auto mt-2 text-red-500">Error messge</h6> */}
              <div className="py-3">
                <button
                  className="btn-sm font-bold bg-red-500 text-white py-2 px-4 rounded-lg"
                  type="submit"
                >
                  Submit Appointment
                </button>
              </div>
            </form>
          </div>
          <div className="md:col-span-1 w-full sm:w-[75%] lg:w-full max-h-[450px] m-auto ">
          <h1 className="text-center font-bold">Services Offered:</h1>
            <table className="w-full table-fixed md:text-lg p-8 lg:text-sm bg-white text-black border rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
                <tr className="border">
                  <td>Tuesday</td>
                  <td>Closed</td>
                </tr>
                <tr className="border">
                  <td> Monday </td>
                  <td> 8:00 am - 5:00 pm </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
