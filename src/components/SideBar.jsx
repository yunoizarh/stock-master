import {
  Menu,
  ShoppingBasket,
  Settings2,
  ChevronDown,
  House,
  Landmark,
  X,
} from "lucide-react";
import { useState } from "react";

import { Link, useLocation } from "react-router";

const menu = [
  { name: "Dashboard", icon: <House />, link: "/" },
  { name: "Products", icon: <ShoppingBasket />, link: "/products" },
  {
    name: "Inventory",
    icon: <Landmark />,
    submenu: [
      { name: "Add Inventory", link: "/add inventory" },
      { name: "All Inventory", link: "/all inventory" },
    ],
  },
  { name: "Settings", icon: <Settings2 />, link: "/settings" },
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <>
      {/* mobile toggle */}
      <div className="md:hidden p-4">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`fixed top-0 left-0 h-full  bg-white rounded-md shadow-sm z-50 transition-all duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static ${
          collapsed ? "w-16" : "w-56"
        } flex-shrink-0`}
      >
        {/* collapse toggle */}
        <div className="hidden md:flex justify-end p-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400"
          >
            <Menu size={20} />
          </button>
        </div>
        {/* close mobile menu */}
        <div className="md:hidden p-2 flex justify-end">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <X size={24} />
          </button>
        </div>

        {/* menu itself */}
        <div className="mt-4 space-y-2">
          {menu.map((item, index) => (
            <div key={index} title={item.name}>
              <Link
                to={item.link}
                onClick={() => item.submenu && toggleSubmenu(item.name)}
                className={`flex items-center w-full px-3 py-2 hover:bg-[#e7e3e3] ${
                  location.pathname === item.link ? "bg-[#e7e3e3]" : null
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && (
                  <span className="ml-3 flex-1 text-left transition-all duration-300">
                    {item.name}
                  </span>
                )}
                {item.submenu && !collapsed && (
                  <ChevronDown
                    className={`transition-transform duration-300 text-gray-400 ${
                      openSubmenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* submenu */}
              {item.submenu && openSubmenu === item.name && !collapsed && (
                <div className="ml-12 text-sm space-y-1">
                  {item.submenu.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.link}
                      className={`block px-2 py-1 text-gray-600 hover:text-white ${
                        location.pathname === sub.link ? "bg-[#e7e3e3]" : ""
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
