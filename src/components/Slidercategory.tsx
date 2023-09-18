import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useCallback, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export const Slidercategory = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProductList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://sistemtoko.com/public/demo/product"
      );
      console.log(response);
      setProducts(response.data.aaData.slice(0, 1));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProductList();

    return () => {};
  }, [getProductList]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:max-w-screen-2xl p-7 md:gap-5 flex items-center mx-auto">
      <span>
        <MdArrowBackIos />
      </span>
      <Swiper
        loop={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index}>
                  <img
                    className="w-[60%] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </SwiperSlide>
      </Swiper>

      <span>
        <MdArrowForwardIos />
      </span>
    </div>
  );
};
