import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Contact Button */}
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2 h-11 text-base font-medium shadow-sm">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
