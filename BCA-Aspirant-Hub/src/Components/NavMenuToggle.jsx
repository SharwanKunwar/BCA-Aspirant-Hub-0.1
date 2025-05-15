import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavMenuToggle = () => {
  const list = ["home", "notes","projects", "blogs"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    if (isOpen) {
      setActiveItem(null);
    }
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-5 right-5 z-50 p-2 bg-gray-800 text-white rounded-full sm:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-40 sm:hidden"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white p-6 rounded-2xl shadow-lg w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-4 text-center">
              {list.map((item) => (
                <li key={item} className="w-full mx-auto text-lg font-semibold">
                  <NavLink
                    to={`/${item}`}
                    className={({ isActive }) =>
                      `block cursor-pointer transition-colors duration-300 py-2 px-4 rounded ${
                        isActive ? "bg-black text-white" : "hover:text-blue-500"
                      }`
                    }
                    onClick={() => handleItemClick(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default NavMenuToggle;