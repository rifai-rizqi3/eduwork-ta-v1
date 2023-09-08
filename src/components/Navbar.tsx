import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="max-w-screen-2xl md:justify-between md:flex p-5 mx-auto"
    >
      <div>
        <img src="/bebo logo.png" alt="" />
      </div>
      <ul className="gap-7 flex">
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
      <div>
        <ul className="gap-7 flex items-center">
          <li>
            <BsSearch />
          </li>
          <li className="font-bold">Login</li>
        </ul>
      </div>
    </div>
  );
};
