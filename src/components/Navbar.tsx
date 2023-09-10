import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { GiToggles } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="max-w-screen-2xl md:flex md:justify-between md:items-center p-5 mx-auto"
    >
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 text-xl font-bold text-gray-800">
          RNRIFAI<span style={{ color: "orange" }}>.TECH</span>
        </div>
      </div>
      <button
        className="hover:text-red-500 focus:outline-none md:hidden text-gray-600"
        onClick={toggleMobileMenu}
      >
        <span className="block w-6 h-1 mb-1 bg-gray-600"></span>
        <span className="block w-6 h-1 mb-1 bg-gray-600"></span>
        <span className="block w-6 h-1 bg-gray-600"></span>
      </button>

      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex gap-7 mt-4 md:mt-0`}
      >
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 font-semibold">
              All Category <BsChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Smartphone</DropdownMenuItem>
              <DropdownMenuItem>Laptop</DropdownMenuItem>
              <DropdownMenuItem>Gaming</DropdownMenuItem>
              <DropdownMenuItem>Camera</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <a href="#" className="hover:text-red-500 hover:font-bold text-black">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-500 hover:font-bold text-black">
            New
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-500 hover:font-bold text-black">
            Gaming
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-500 hover:font-bold text-black">
            Accessories
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-500 hover:font-bold text-black">
            Sale
          </a>
        </li>
      </ul>
      <div className=" flex items-center gap-4">
        <BsSearch className="cursor-pointer" />
        <div className="font-bold cursor-pointer">Login</div>
      </div>
    </div>
  );
};
