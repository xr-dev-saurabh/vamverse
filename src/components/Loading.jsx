import React from "react";

const Loading = () => {
  const url =
    "https://raw.githubusercontent.com/siddharth17vaishnav/vamverse/master/src/assets/loading.gif?token=GHSAT0AAAAAAB6VQEFRJRBYAOUNXF7OX3QYY7ND6SA";
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mx-auto my-auto bg-[#FFFFFF]">
      <img src={url} alt="Loading" className="w-[500px] h-[500px]" />
      <h4 className="italic">Loading.......</h4>
    </div>
  );
};

export default Loading;
