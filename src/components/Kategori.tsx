import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Kategori = () => {
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
          <div className="aspect-square flex flex-col justify-center w-full text-center border">
            <img className="w-[50%] mx-auto" src="/HP.png" alt="" />
            <h1 className="text-xl font-bold">test</h1>
            <p className="text-gray-500">test</p>
          </div>
          <div className="flex flex-col justify-center text-center border">
            <img className="w-[50%] mx-auto" src="/HP.png" alt="" />
            <h1 className="text-xl font-bold">test</h1>
            <p className="text-gray-500">test</p>
          </div>
          <div className="flex flex-col justify-center text-center border">
            <img className="w-[50%] mx-auto" src="/HP.png" alt="" />
            <h1 className="text-xl font-bold">test</h1>
            <p className="text-gray-500">test</p>
          </div>
          <div className="flex flex-col justify-center text-center border">
            <img className="w-[50%] mx-auto" src="/HP.png" alt="" />
            <h1 className="text-xl font-bold">test</h1>
            <p className="text-gray-500">test</p>
          </div>
          <div className="flex flex-col justify-center text-center border">
            <img className="w-[50%] mx-auto" src="/HP.png" alt="" />
            <h1 className="text-xl font-bold">test</h1>
            <p className="text-gray-500">test</p>
          </div>
        </div>
      </div>
    </div>
  );
};
