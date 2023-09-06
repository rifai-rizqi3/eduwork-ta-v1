import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsChevronDown, BsSearch } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="max-w-screen-2xl md:justify-between md:flex p-5 mx-auto">
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
        <li>Home</li>
        <li>New</li>
        <li>Gaming</li>
        <li>Accesories</li>
        <li>Sale</li>
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
