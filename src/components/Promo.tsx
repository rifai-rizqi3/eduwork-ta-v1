import React from "react";
import { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export const Promo = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProductList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://sistemtoko.com/public/demo/product"
      );
      console.log(response);
      setProducts(response.data.aaData.slice(0, 4));
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
    <div data-aos="fade-up">
      <div>
        <ul className="max-w-screen-2xl md:justify-between md:flex p-5 mx-auto">
          <li>
            <h1 className="text-3xl font-bold">Promo Untukmu</h1>
          </li>
          <li>
            <button className="p-3 border border-black rounded-lg">
              Lihat Semua
            </button>
          </li>
        </ul>
      </div>
      <div className="max-w-screen-2xl md:justify-between grid grid-cols-4 grid-rows-2 gap-3 p-2 mx-auto">
        {products.length > 0 &&
          products.map((product, index) => (
            <>
              {index === 0 && (
                <div
                  key={index}
                  className="flex flex-col justify-center col-span-2 row-span-2 text-center bg-red-500"
                >
                  <img
                    className="w-[300px] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                  <h1 className="text-xl font-bold">{product?.name}</h1>
                  <p className=" text-gray-500">{product?.description}</p>
                </div>
              )}
              {index === 1 && (
                <div className="flex flex-col justify-center col-span-1 row-span-1 pb-3 text-center bg-blue-500">
                  <img
                    className="w-[200px] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                  <h1 className="text-xl font-bold">{product?.name}</h1>
                  <p className="text-gray-500">{product?.description}</p>
                </div>
              )}
              {index === 2 && (
                <div className="flex flex-col justify-center col-span-1 row-span-1 pb-3 text-center bg-yellow-500">
                  <img
                    className="w-[200px] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                  <h1 className="text-xl font-bold">{product?.name}</h1>
                  <p className="text-gray-500">{product?.description}</p>
                </div>
              )}
              {index === 3 && (
                <div className="flex flex-col items-center justify-center col-span-2 row-span-1 pb-3 bg-orange-500">
                  <img
                    className="w-[200px] mx-auto"
                    src={product?.photo}
                    alt=""
                  />
                  <h1 className="text-xl font-bold">{product?.name}</h1>
                  <p className=" text-gray-500">{product?.description}</p>
                </div>
              )}
            </>
          ))}
        {/* <div className="flex flex-col justify-center col-span-1 row-span-1 pb-3 text-center bg-blue-500">
          <img className="w-[200px] mx-auto" src="/HP.png" alt="" />
          <h1 className="text-xl font-bold">test</h1>
          <p className="text-gray-500">test</p>
        </div>
        <div className="flex flex-col justify-center col-span-1 row-span-1 pb-3 text-center bg-yellow-500">
          <img className="w-[200px] mx-auto" src="/HP.png" alt="" />
          <h1 className="text-xl font-bold">test</h1>
          <p className="text-gray-500">test</p>
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 row-span-1 pb-3 bg-orange-500">
          <img className="w-[200px] mx-auto" src="/HP.png" alt="" />
          <h1 className="text-xl font-bold">test</h1>
          <p className=" text-gray-500">test</p>
        </div> */}
      </div>
      {/* <div className="md:justify-center max-w-screen-2xl p-2 mx-auto">
        <img className="w-full" src="/Promo.png" alt="" />
      </div> */}
    </div>
  );
};
