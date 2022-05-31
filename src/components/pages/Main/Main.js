import React from "react";
import ProfileCover from "../../sections/ProfileCover";
import Sidebar from "../../sections/Sidebar";
import Navbar from "../../sections/Navbar";
import Footer from "../../sections/Footer";

const Main = () => {
  return (
    <main className="min-h-screen relative bg-gray-50 pb-10">
      <ProfileCover />
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Sidebar />
          </div>
          <div className="w-full lg:w-2/3 ">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
