import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";

const Layout = ({ children }) => {
  return (
    <div className="relative sm:-8 p-4 bg-[#1B1A55] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar/>
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
      </div>
      <Card/>
    </div>
  );
};

export default Layout;
