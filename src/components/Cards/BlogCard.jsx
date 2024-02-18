import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href={"/posts/id"}>
      <div className="w-full border-b py-5 mb-5">
        <div className="flex items-center gap-1">
          <Image
            src={"/images/img1.png"}
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-gray-900 font-[300]">Chinmay Sa</span>
          <span className="text-gray-900 font-[300]">Dec 30, 2022</span>
        </div>
        <div className="md:flex items-center">
          <div>
            <h2 className="text-3xl font-[700]">
              React JS Best Practices From The New Docs
            </h2>
            <p className="text-base font-[300]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              aut eligendi qui suscipit! Necessitatibus error unde perferendis
              magnam facilis corporis itaque, similique, voluptas saepe deleniti
              ad consectetur deserunt, animi dolore?
            </p>
          </div>
          <div className="w-[50%] md:mt-0 mt-5">
            <Image
              src={"/images/img1.png"}
              alt=""
              width={150}
              height={150}
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2 items-center">
          <span className="font-[300] text-sm px-4 py-1 bg-[#f1f1f1] rounded-full">
            React
          </span>
          <span className="font-[300] text-sm px-4 py-1 bg-[#f1f1f1] rounded-full">
            Next JS
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
