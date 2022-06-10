import React from "react";
import image1 from "../../../images/blog/blog01.png";
import BlogItem from "./BlogItem";

const blogData = [
  {
    _id: 1,
    img: image1,
    title: "Fix React web app page not found",
    description:
      "After hosting react website on cPanel, if you go another router/page then you reload you show page not found. You can fix it easy ways. goto Public folder on your react app. Then create a .htaccess file. Then peast the code and save the file. then build your project and deploy in cPanel.",
    code: `<IfModule mod_rewrite.c>

    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-l
    RewriteRule . /index.html [L]
  
  </IfModule>
  `,
  },
];

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogData.map((blog, _id) => (
          <BlogItem blog={blog} key={_id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
