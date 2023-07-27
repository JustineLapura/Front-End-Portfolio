import Project from "@/components/Project";
import React from "react";
import DentalClinicImg from "/public/DentalClinic.jpg";

const Page = () => {
  return (
    <>
      <Project
        projectImg={DentalClinicImg}
        title="Dental Clinic App"
        demoUrl="/crypto/demo-1"
        codeUrl="https://github.com/JustineLapura/Dental-Clinic-Appointment-Reservation-System"
        overview="This Dental Clinic system offers a user-friendly interface that allows dental professionals to efficiently manage various aspects of their practice. From appointment scheduling and patient records management to treatment planning, the Dental Clinic System provides a seamless platform for dentists and staff to deliver high-quality dental care."
        technologies={["HTML", "CSS", "Javascript", "React"]}
      />
    </>
  );
};

export default Page;
