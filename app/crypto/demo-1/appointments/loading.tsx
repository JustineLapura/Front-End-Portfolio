import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-10 h-10 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default loading;
