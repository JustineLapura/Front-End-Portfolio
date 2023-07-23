import Category from "@/components/OrderingAppComponents/Category";
import Food from "@/components/OrderingAppComponents/Food";
import HeadlineCards from "@/components/OrderingAppComponents/HeadlineCards";
import Hero from "@/components/OrderingAppComponents/Hero";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      
    </div>
  );
};

export default Page;