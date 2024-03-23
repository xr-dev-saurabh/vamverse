import React from "react";
import nfc from "../assets/NFC.png";

const NFC = () => {
  return (
    <div className={"md:px-6  text-black bg-white"}>
      <div
        className={
          " max-w-[1280px] mx-auto flex flex-col md:flex-row justify-center gap-12 py-9"
        }
      >
        <img
          src={nfc}
          alt={"NFC poster"}
          className={"w-[400px] mx-auto rounded-lg"}
        />
        <div className={"my-auto max-w-[600px] mx-auto px-4"}>
          <p className={" text-justify font-semibold text-gray-600 "}>
            Near-field communication (NFC) is a set of communication protocols
            that enables communication between two electronic devices. The
            technology can be embedded in a small tag to facilitate data
            transfer between nearby mobile phones, laptops, tablets, and other
            electronics.
          </p>
          <p
            className={" text-justify font-semibold text-gray-600 mt-6 text-xl"}
          >
            Unleash the power of NFC with our smart solutions for your business.
          </p>
          <ol type={"1"} className={"text-gray-600 font-semibold"}>
            <li>1. Automate your Home appliances</li>
            <li>2. Increase in-store user experience.</li>
            <li>3. Virtual Business Cards.</li>
            <li>4. Launch a website.</li>
            <li>5. Make Payments</li>
            <li>6. Sensitive Information sharing.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default NFC;
