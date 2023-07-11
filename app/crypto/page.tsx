import Project from "@/components/Project";
import React from "react";
import cryptoImg from "/public/crypto.jpg";

const page = () => {
  return (
    <>
      <Project
        projectImg={cryptoImg}
        title="Crypto App"
        url="/crypto/demo-1"
        overview="A crypto app, also known as a cryptocurrency app, is a software application designed to facilitate the buying, selling, storing, and managing of cryptocurrencies. These apps provide users with a user-friendly interface to interact with various digital currencies, such as Bitcoin, Ethereum, Litecoin, and many others."
        technologies={[
            "HTML", 
            "CSS", 
            "Javascript", 
            "React", 
            "Firebase"
        ]}
      />
    </>
  );
};

export default page;
