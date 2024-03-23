import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full pb-5 mt-10 px-4 overflow-hidden ">
  
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 lg:mx-[140px]">
      <div className="lg:col-span-2 my-4">
        <h1 className="md:text-3xl text-gray-600 sm:text-3xl text-2xl font-semibold py-2">
          Are you looking to excel your business.
        </h1>
        <p className="text-gray-600"> Contact us today.</p>
        <hr className="lg:hidden" />
      </div>
      <div className="my-4">
        <form
          method="POST"
          action="https://getform.io/f/4792cffe-75f1-4e26-bbd2-dc83a2850b55"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 flex w-full rounded-md text-gray-600 outline outline-2  outline-offset-2"
              type="email"
              placeholder="Enter Email"
              name="email"
              id="email"
            />
            <button
              className="bg-slate-300 text-gray-600 font-semibold rounded-md w-[200px]  ml-4 my-6 px-6 py-2"
              type="submit"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>

</div>
  );
};

export default Contact;
