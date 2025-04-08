import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About Us", path: "/about-us" },
    { name: "How It Works", path: "/how-it-works" },
    {
      name: "Solutions",
      subItems: [
        { name: "Residential", path: "/solutions/residential" },
        { name: "Commercial", path: "/solutions/commercial" },
        { name: "Industrial", path: "/solutions/industrial" },
      ],
    },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <nav className="bg-white shadow-md rounded-full mx-auto w-[90%] max-w-4xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-bold text-black"
            onClick={() => setActiveDropdown(false)}
          >
            DayLight Solar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.subItems ? (
                <div className="relative group" key={item.name}>
                  <button
                    onClick={() => setActiveDropdown(!activeDropdown)}
                    className="text-base font-medium text-gray-800 hover:text-blue-600 flex items-center"
                  >
                    {item.name}
                  </button>
                  <div
                    className={`absolute z-20 bg-white shadow-md mt-2 rounded w-48 ${
                      activeDropdown ? "block" : "hidden"
                    } group-hover:block`}
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setActiveDropdown(false)}
                        className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                          isActive(sub.path)
                            ? "text-blue-600 font-medium"
                            : "text-gray-800"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium hover:text-blue-600 transition-colors ${
                    isActive(item.path) ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              onClick={() => window.voiceflow?.chat?.open?.()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition"
            >
              Talk To Our Assistant
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              <Bars3Icon className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={toggleMobileMenu}>
              <XMarkIcon className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <nav className="p-4 space-y-2">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name}>
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="pl-4 space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={toggleMobileMenu}
                        className={`block text-sm ${
                          isActive(sub.path)
                            ? "text-blue-600 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={`block text-base font-medium ${
                    isActive(item.path) ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
            <button
              onClick={() => {
                toggleMobileMenu();
                window.voiceflow?.chat?.open?.();
              }}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
            >
              Talk To Our Assistant
            </button>
          </nav>
        </div>

        {/* Overlay when mobile menu is open */}
        {mobileMenuOpen && (
          <div
            onClick={toggleMobileMenu}
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
