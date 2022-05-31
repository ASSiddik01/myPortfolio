import "./App.css";
import ProfileCover from "./components/sections/ProfileCover";
import Sidebar from "./components/sections/Sidebar";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

function App() {
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
}

export default App;
