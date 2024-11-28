import { useState, useEffect } from "react";
import { BoltIcon } from "@heroicons/react/16/solid";
import SidebarItem from "./sidebarItem";
import {
  FileText,
  HashIcon,
  LinkIcon,
  TwitterIcon,
  YoutubeIcon,
  Menu,
  LogOut,
} from "lucide-react";
import Button from "./button";
import axios from "axios";
import { serverUrl } from "../../constants/constants";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // set isMobile to true if window width is 768px or less is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener to check on window resize and call checkMobile
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarItems = [
    { title: "Twitter", icon: <TwitterIcon className="w-6 h-6" /> },
    { title: "Youtube", icon: <YoutubeIcon className="w-6 h-6" /> },
    { title: "Document", icon: <FileText className="w-6 h-6" /> },
    { title: "Link", icon: <LinkIcon className="w-6 h-6" /> },
    { title: "Tag", icon: <HashIcon className="w-6 h-6" /> },
  ];

  // Logout Handler
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${serverUrl}/user/signout`, {
        withCredentials: true,
      });

      if (response.data.success) {
        navigate("/");
        console.log("Signout successful:", response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error during signout:", error.response?.data?.message);
      }
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`w-64 h-screen bg-seasalt border-r fixed left-0 top-0 transition-transform duration-300 ease-in-out z-20 ${
          isMobile ? "-translate-x-full" : ""
        } ${isOpen ? "translate-x-0" : ""}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-center h-16 bg-mediumslateblue">
          <BoltIcon className="w-8 h-8 text-seasalt" />
          <Link to="/">
            <h1 className="text-xl font-semibold text-seasalt">Second Brain</h1>
          </Link>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col gap-4 p-4 mt-4">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} title={item.title} icon={item.icon} />
          ))}
        </div>

        {/* Sidebar Logout */}
        <div className="flex flex-col justify-center items-center gap-4 p-4 mt-4 fixed bottom-0 w-64">
          <Button
            startIcon={<LogOut className="w-4 h-4" />}
            variant="secondary"
            size="lg"
            onClick={() => handleLogout()}
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-seasalt border-t z-10">
          <div className="flex justify-around items-center h-16">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className="p-2 text-battleshipgray hover:text-primary"
              >
                {item.icon}
              </button>
            ))}
            <button
              onClick={toggleSidebar}
              className="p-2 text-battleshipgray hover:text-primary"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
