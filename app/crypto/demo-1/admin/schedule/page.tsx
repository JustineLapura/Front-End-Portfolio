"use client";
import React, { useContext } from "react";
import { TimeScheduleContext } from "@/context/DentalClinicContext/TimeScheduleContext";
import { ScheduleType } from "../../appointments/page";

const page = () => {
  const { schedule, handleScheduleUpdate, handleDayClosed } =
    useContext(TimeScheduleContext);
  return (
    <div className="container pt-[100px] px-4">
      <div className="flex flex-col justify-center items-center">
        <h3 className="my-4 text-xl font-bold">Edit Schedule</h3>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day, index) => {
          const daySchedule = schedule.find((item:ScheduleType) => item.day === day);
          const startTime = daySchedule ? daySchedule.startTime : "";
          const endTime = daySchedule ? daySchedule.endTime : "";

          return (
            <div className="flex items-center my-2" key={index}>
              <label className="w-20 font-bold">{day}</label>
              <input
                className="w-28 sm:w-36 text-center text-lg border border-gray-300 rounded py-1 px-2"
                type="time"
                value={startTime}
                onChange={(e) =>
                  handleScheduleUpdate(day, e.target.value, endTime)
                }
              />
              <input
                className="w-28 sm:w-36 text-center text-lg border border-gray-300 rounded py-1 px-2 ml-2"
                type="time"
                value={endTime}
                onChange={(e) =>
                  handleScheduleUpdate(day, startTime, e.target.value)
                }
              />
              <label className="ml-2">
                <input
                  type="checkbox"
                  className="mr-1"
                  checked={!startTime && !endTime}
                  onChange={() => handleDayClosed(day)}
                />
                Closed
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
