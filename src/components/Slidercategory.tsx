import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Slidercategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="md:max-w-screen-2xl p-7 md:gap-5 flex items-center mx-auto"
      data-aos="fade-up"
    >
      <span>
        <MdArrowBackIos />
      </span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // className="hover:scale-105 hover:shadow-lg transition-transform"
      >
        <SwiperSlide>
          <div className=" rounded-lg shadow-2xl">
            <ul className="flex gap-2">
              <li className="p-4 bg-gray-300 rounded-lg">
                <img src="/HP.png" alt="" />
              </li>
              <li className="flex flex-col justify-center">
                <p className="text-gray-500">Smartphone</p>
                <p className="font-bold">Samsung Galaxy S23 Ultra</p>
                <p className="text-red-500">Beli sekarang</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-lg shadow-2xl">
            <ul className="flex gap-2">
              <li className="p-4 bg-gray-300 rounded-lg">
                <img src="/HP.png" alt="" />
              </li>
              <li className="flex flex-col justify-center">
                <p className="text-gray-500">Smartphone</p>
                <p className="font-bold">Samsung Galaxy S23 Ultra</p>
                <p className="text-red-500">Beli sekarang</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-lg shadow-2xl">
            <ul className="flex gap-2">
              <li className="p-4 bg-gray-300 rounded-lg">
                <img src="/HP.png" alt="" />
              </li>
              <li className="flex flex-col justify-center">
                <p className="text-gray-500">Smartphone</p>
                <p className="font-bold">Samsung Galaxy S23 Ultra</p>
                <p className="text-red-500">Beli sekarang</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-lg shadow-2xl">
            <ul className="flex gap-2">
              <li className="p-4 bg-gray-300 rounded-lg">
                <img src="/HP.png" alt="" />
              </li>
              <li className="flex flex-col justify-center">
                <p className="text-gray-500">Smartphone</p>
                <p className="font-bold">Samsung Galaxy S23 Ultra</p>
                <p className="text-red-500">Beli sekarang</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-lg shadow-2xl">
            <ul className="flex gap-2">
              <li className="p-4 bg-gray-300 rounded-lg">
                <img src="/HP.png" alt="" />
              </li>
              <li className="flex flex-col justify-center">
                <p className="text-gray-500">Smartphone</p>
                <p className="font-bold">Samsung Galaxy S23 Ultra</p>
                <p className="text-red-500">Beli sekarang</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-lg shadow-2xl">
            <ul className="flex gap-2">
              <li className="p-4 bg-gray-300 rounded-lg">
                <img src="/HP.png" alt="" />
              </li>
              <li className="flex flex-col justify-center">
                <p className="text-gray-500">Smartphone</p>
                <p className="font-bold">Samsung Galaxy S23 Ultra</p>
                <p className="text-red-500">Beli sekarang</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
      <span>
        <MdArrowForwardIos />
      </span>
    </div>
  );
};
