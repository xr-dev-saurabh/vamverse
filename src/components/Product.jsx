import React from "react";

export const Product = () => {
  return (
    <div className="w-full h-full my-6 mt-5 text-3xl bg-[#131A26]">
    <div className="text-3xl mt-10 ">
    <h5 className="text-center py-10 px-4 font-semibold	 mx-auto text-white">
    Our Products
        </h5></div>
      <div className="flex flex-wrap gap-1 lg:gap-1 md:gap-1 xl:gap-12 2xl:gap-12 place-content-center px-2">
        <div className="flex justify-between w-[60vh] lg:mb-10 md:mb-10 mb-5 flex-col rounded-xl text-gray-700 bg-slate-300 bg-clip-border shadow-lg">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl text-gray-700 font-semibold">
              VAMBOX
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit">
              India’s first free WebVR player for streaming 360* videos and
              images both online and offline. Watch all your contents without downloading any app.
            </p>
          </div>
          <div className="p-6 pt-0">
          <a href="https://vambox.live" target="_blank" rel="noreferrer">
            <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Visit Now
            </button>
            </a>
          </div>
        </div>

        <div className="flex w-[60vh] lg:mb-10 md:mb-10 mb-8 flex-col justify-between rounded-xl text-gray-700 bg-slate-300 bg-clip-border shadow-lg">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold text-gray-700 ">
              TryKaroo
            </h5>
            <p className=" block font-sans text-base font-light">
            World's first fully automated virtual try-on e-commerce platform. Scale your business 6x time faster.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
