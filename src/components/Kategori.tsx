import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Kategori = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProductList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://sistemtoko.com/public/demo/product"
      );
      console.log(response);
      setProducts(response.data.aaData.slice(0, 5));
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
            <h1 className="text-3xl font-bold">Jelajahi Kategori</h1>
          </li>
          <li>
            <button className="p-3 border border-black rounded-lg">
              Lihat Semua
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div className="max-w-screen-2xl md:justify-between grid grid-cols-5 p-5 mx-auto">
          {products.length > 0 &&
            products.map((product, index) => (
              <div
                key={index}
                className="aspect-square flex flex-col justify-center w-full text-center border"
              >
                <img className="w-[50%] mx-auto" src={product?.photo} alt="" />
                <h1 className="text-xl font-bold">
                  {product?.product_category_name}
                </h1>
                <p className="text-gray-500">test</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
