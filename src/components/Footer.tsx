import React from "react";

export default function Footer() {
  const Navigasi = [
    "Smartphone",
    "Laptop",
    "Gaming",
    "PC Desktop",
    "Kamera",
    "Audio",
  ];

  return (
    <>
      <div className="max-w-screen-2xl md:justify-center p-9 grid grid-cols-5 mx-auto">
        <div>
          <img src="/bebo logo.png" alt="" />
        </div>
        <div className="">
          <h3 className="text-2xl">Navigasi</h3>
          <div className="">
            {Navigasi.map((item) => (
              <div className="text-gray-500">{item}</div>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl">Navigasi</h3>
          <div className="">
            {Navigasi.map((item) => (
              <div className="text-gray-500">{item}</div>
            ))}
          </div>
          <h3 className="text-2xl">Bahasa</h3>
        </div>
        <div className="">
          <h3 className="text-2xl">Navigasi</h3>
          <div className="">
            {Navigasi.map((item) => (
              <div className="text-gray-500">{item}</div>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl">Ikuti Kami</h3>
          <div className="">
            {Navigasi.map((item) => (
              <div className="text-gray-500">{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 text-center bg-gray-200">
        <p>All Rights Reserved © 2023</p>
      </div>
    </>
  );
}
