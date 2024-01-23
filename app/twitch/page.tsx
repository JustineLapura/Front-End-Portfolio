import Project from "@/components/Project";
import React from "react";
import ecommerceImg from "/public/ecommerce.jpg";

const page = () => {
  return (
    <>
      <Project
        projectImg={ecommerceImg}
        title="E-Commerce App"
        demoUrl="https://e-commerce-justinelapura.vercel.app/"
        codeUrl="https://github.com/JustineLapura/e-commerce-product-page"
        overview="An e-commerce app is a software application that enables users to access and engage with an online shopping platform. This platform provides a virtual marketplace where users can browse and purchase a variety of products. The e-commerce app facilitates a seamless shopping experience, allowing users to explore different categories, view product details, make secure transactions, and track their orders."
        technologies={["React", "Next Js", "Tailwind CSS", "Typescript"]}
      />
    </>
  );
};

export default page;
