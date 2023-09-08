import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Promo = () => {
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
        <div className="flex flex-col justify-center col-span-2 row-span-2 text-center bg-red-500">
          <img className="w-[300px] mx-auto" src="/HP.png" alt="" />
          <h1 className="text-xl font-bold">test</h1>
          <p className=" text-gray-500">test</p>
        </div>
        <div className="flex flex-col justify-center col-span-1 row-span-1 pb-3 text-center bg-blue-500">
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
        </div>
      </div>
      <div className="md:justify-center max-w-screen-2xl p-2 mx-auto">
        <img className="w-full" src="/Promo.png" alt="" />
      </div>
    </div>
  );
};
