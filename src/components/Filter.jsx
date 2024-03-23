import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const Filter = () => {
  return (
    <div className="w-full h-full bg-[#131A26] mt-5">
      <div className="text-3xl mt-10 ">
        <h5 className="text-center py-8 px-4 font-semibold	 mx-auto text-white">
          Build your brand with
          <span className="text-[#5dd1ff] px-2 ">AR</span> Marketing
        </h5>
      </div>
      <div className={"max-w-[1240px] mx-auto my-6"}>
        <p
          className={
            "max-w-[1220px] mx-auto mt-2 text-white font-semibold text-justify px-4"
          }
        >
          Instagram, Facebook, and Snapchat are best known for their lenses and
          AR filters. A growing number of users interact with filters daily.
          Companies are investing millions of dollars in marketing in such a
          platform. To keep up with this rapid evolution of marketing, we help
          brands and businesses to reach more customers and provide better user
          experiences
        </p>

        <div
          className={"max-w-[1220px] px-4 flex flex-wrap justify-center mt-2"}
        >
          <div className={"max-w-[100%] m-auto mt-10"}>
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={2}
              freeMode={true}
              pagination={false}
              loop={true}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="max-w-sm  h-[160px] m-auto  rounded overflow-hidden text-gray-600 bg-slate-300 shadow-lg mx-auto my-8">
                  <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2">
                      Utility AR filter
                    </div>
                    <p className="text-gray-600 text-base">
                      Build AR experiences that solve problems like virtual
                      try-on.
                    </p>
                  </div>
                  <div className="px-3 py-2">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #product-display
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #try-on
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #teaching
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="max-w-sm  h-[160px] m-auto  rounded overflow-hidden col-span-5 text-gray-600 bg-slate-300 shadow-lg mx-auto my-8">
                  <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2">
                      Shopping Filter
                    </div>
                    <p className="text-gray-600 text-base">
                      Build AR for shopping, fashion, and beauty.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #clothing
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #jewellery
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #branding
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="max-w-sm   h-[160px] m-auto rounded overflow-hidden col-span-5 text-gray-600 bg-slate-300 shadow-lg mx-auto my-8">
                  <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2">
                      Entertainment filter
                    </div>
                    <p className="text-gray-600 text-base">
                      Build AR for art, music, film, and culture.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #dance
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #music
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #artstudio
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="max-w-sm  h-[160px] m-auto  rounded overflow-hidden col-span-5 text-gray-600 bg-slate-300 shadow-lg mx-auto my-8">
                  <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2">
                      Self-Expression Lenses
                    </div>
                    <p className="text-gray-600 text-base">
                      Build AR for more creative communication.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #selfie
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="max-w-sm   h-[160px] m-auto rounded overflow-hidden col-span-5 text-gray-600 bg-slate-300 shadow-lg mx-auto my-8">
                  <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-2">
                      Education Lenses
                    </div>
                    <p className="text-gray-600 text-base">
                      We built AR filters and lenses for events, marketing,
                      campaigns, and functions.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #learning
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #promotions
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #events
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
