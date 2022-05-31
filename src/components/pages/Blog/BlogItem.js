import React from "react";

const BlogItem = (props) => {
  const { image, title, description } = props.blog;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-56 bg-red-200 rounded-md overflow-hidden">
          <img
            src={image}
            alt="blogImage"
            className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
          />
        </div>
        <h3>
          <a
            href="#0"
            className="block text-lg font-medium text-gray-800 hover:text-natural mb-2"
          >
            {title}
          </a>
        </h3>
        <p className="text-natural">{description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
