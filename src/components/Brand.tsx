import React from "react";

export const Brand = () => {
  return (
    <div>
      <div>
        <div className="max-w-screen-2xl md:justify-center p-9 mx-auto">
          <h1 className="text-3xl font-bold text-center">Brand Terkenal</h1>
          <p className="pt-5 text-center text-gray-500">
            Cek produk terbaik dari brand berikut hanya di BebooTech
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-screen-2xl md:flex md:justify-center flex-grid md:grid-cols-4 grid grid-cols-2 gap-8 pb-8 mx-auto">
          <div className="flex flex-col">
            <img className="w-auto" src="/Apple.png" alt="" />
          </div>
          <div className="flex flex-col">
            <img className="w-auto" src="/Xiaomi.png" alt="" />
          </div>
          <div className="flex flex-col">
            <img className="w-auto" src="/Wacom.png" alt="" />
          </div>
          <div className="flex flex-col">
            <img className="w-auto" src="/Asus.png" alt="" />
          </div>
        </div>
        <div className="max-w-screen-2xl md:justify-center md:flex flex-grid md:grid-cols-4 grid grid-cols-2 gap-8 pb-8 mx-auto">
          <div className="flex flex-col">
            <img className="w-auto" src="/Sony.png" alt="" />
          </div>
          <div className="flex flex-col">
            <img className="w-auto" src="/AMD.png" alt="" />
          </div>
          <div className="flex flex-col">
            <img className="w-auto" src="/Samsung.png" alt="" />
          </div>
          <div className="flex flex-col">
            <img className="w-auto" src="/JBL.png" alt="" />
          </div>
        </div>
      </div>

      <img className="w-full pt-10 pb-10" src="/Service.png" alt="" />
    </div>
  );
};
