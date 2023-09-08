import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";

export const Produk = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProductList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://sistemtoko.com/public/demo/product"
      );
      console.log(response);
      setProducts(response.data.aaData);
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

  return (
    <div>
      <div>
        <div className="max-w-screen-2xl md:justify-center md:flex p-5 mx-auto text-3xl font-bold text-center">
          <h1>List Produk</h1>
        </div>
      </div>
      <div>
        <div className="max-w-screen-2xl md:justify-between grid grid-cols-4 gap-3 p-5 mx-auto">
          {products.length > 0 &&
            products.map((product) => (
              <div className="aspect-square flex flex-col justify-center w-full text-center border">
                <img className="w-[60%] mx-auto" src={product?.photo} alt="" />
                <h1 className="text-xl font-bold">{product?.name}</h1>
                <p className="text-gray-500">{product?.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="max-w-screen-2xl md:justify-center md:flex p-5 mx-auto text-center">
        <button className="p-2 border border-black rounded-lg">
          Muat Produk Lainnya
        </button>
      </div>
    </div>
  );
};
