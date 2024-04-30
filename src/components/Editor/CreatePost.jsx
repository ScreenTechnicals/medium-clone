"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaImage } from "react-icons/fa6";

const CreatePost = () => {
  const fileRef = useRef(null);

  const openBrowse = async () => {
    await fileRef.current.click();
  };
  const [image, setImage] = useState(null);

  return (
    <div className="w-full">
      <div>
        <div
          onClick={openBrowse}
          className="cursor-pointer w-full h-[20vh] bg-gray-200 rounded-md flex items-center justify-center relative"
        >
          {image ? (
            <Image src={image} alt="" width={300} height={300} />
          ) : (
            <FaImage size={100} color={"gray"} />
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Title"
          className="text-3xl w-full md:text-5xl font-serif font-[300] outline-none"
          required
        />
      </div>
      <div className="mt-4">
        <textarea
          type="text"
          placeholder="Tell Your Story"
          className="text-base w-full md:text-xl font-serif font-[300] outline-none min-h-[53vh]"
          required
        />
      </div>
      <div className="w-full flex items-center gap-3 justify-end mt-4">
        <button className="text-base font-[400] bg-[#000] text-white px-6 py-2 rounded-full">
          Draft
        </button>
        <button className="text-base font-[400] bg-green-600 text-white px-6 py-2 rounded-full">
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
