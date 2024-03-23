import React, { useState } from "react";
import { useEffect } from "react";
import {  useParams } from "react-router-dom";

const Model = (props) => {
  const id = useParams();
  console.log("ID:", typeof id.id);
  const [model, setModel] = useState("");
  const [ios, setIos] = useState("");
  const [placement, setPlacement] = useState("");
  const data = [
    {
      id: "1",
      model: "/model1.glb",
      ios:"/model1.usdz",
      placement:"floor"
    },
    {
      id: "2",
      model: "/model2.glb",
      ios:"/model2.usdz",
      placement:"wall"
    },
    {
      id: "3",
      model: "/model3.glb",
      ios:"/model3.usdz",
      placement:"floor"
    },
  ];

  useEffect(() => {
    data.find((item) => {
      if (item.id === id.id) {
        console.log(item.model);
        setModel(item.model);
        setIos(item.ios)
        setPlacement(item.placement)
      }
    });
  }, []);
  return (
    <div>
      <model-viewer
        src={model}
        ios-src={ios}
        alt="A monitor"
        reveal="auto"
        loading="eager"
        interaction-prompt-style="basic"
        ar
        ar-placement={placement}
        ar-scale="fixed"
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        quick-look-browsers="safari chrome"
        environment-image="neutral"
        shadow-intensity="0"
      >
        <button
          slot="ar-button"
          className="w-full bg-white border-none absolute bottom-0 "
        >
          <img
            src="https://cartmagician.com/frontend1/dist/img/assets/logos/cm-logos/SVG/open-in-AR-blk1.svg"
            alt="logo"
            className="w-[200px] mx-auto pt-6"
          />
        </button>
      </model-viewer>
    </div>
  );
};

export default Model;
