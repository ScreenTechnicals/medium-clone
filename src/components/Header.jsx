import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white border-b px-10 py-3 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={"/"}>
          <Image src={"/images/logo.webp"} alt="" width={50} height={50} />
        </Link>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full pl-4 pr-8 py-2 outline-none focus:border-[#b4b4b4]"
            required
          />
          <button className="absolute right-2 text-xl">
            <GoSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link href={"/write-post"}>
          <button className="text-base flex items-center gap-1 text-gray-600 font-[300]">
            <FaRegEdit size={30} />
            <span>Write</span>
          </button>
        </Link>
        <button className="bg-black text-white px-6 py-2 rounded-md">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
