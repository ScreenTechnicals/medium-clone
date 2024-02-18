import React from "react";
import Image from "next/image";

const Comment = () => {
  return (
    <div className="mb-7">
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
      <div className="p-3 bg-gray-50 rounded-md mt-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          voluptate officiis in totam magni sed nesciunt minus nihil, doloribus,
          cum voluptatem, cumque architecto tenetur doloremque perspiciatis
          necessitatibus atque dolores. Laudantium?
        </p>
      </div>
    </div>
  );
};

export default Comment;
