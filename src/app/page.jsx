import BlogCard from "@/components/Cards/BlogCard";
import React from "react";

const HomePage = () => {
  return (
    <div className="pt-24 px-10 w-[50%] mx-auto">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default HomePage;
