import Category from "@/components/OrderingAppComponents/Category";
import Food from "@/components/OrderingAppComponents/Food";
import HeadlineCards from "@/components/OrderingAppComponents/HeadlineCards";
import Hero from "@/components/OrderingAppComponents/Hero";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      
    </div>
  );
};

export default page;
