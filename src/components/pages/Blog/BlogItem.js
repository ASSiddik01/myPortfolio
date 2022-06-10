import React, { useState } from "react";
import BlogDetails from "./BlogDetails";

const BlogItem = ({ blog }) => {
  const { img, title, description } = blog;
  const [blogModal, setBlogModal] = useState(null);

  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-56 bg-red-200 rounded-md overflow-hidden">
          <img
            src={img}
            alt="blogImage"
            className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
          />
        </div>
        <h3>
          <a
            href="#0"
            className="block text-lg font-medium text-gray-800 hover:text-natural mb-2 capitalize"
          >
            {title}
          </a>
        </h3>
        <p className="text-natural">{description.slice(0, 50)} ...</p>
        <div className="flex justify-center">
          <label
            onClick={() => setBlogModal(blog)}
            htmlFor="blogModal"
            className="inline-block mt-3 rounded bg-primary text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-secondary"
          >
            Read Details
          </label>
        </div>
      </div>
      {/* Load Modal */}
      {blogModal && (
        <BlogDetails
          blogModal={blogModal}
          // refetch={refetch}
          setBlogModal={setBlogModal}
        ></BlogDetails>
      )}
    </div>
  );
};

export default BlogItem;
