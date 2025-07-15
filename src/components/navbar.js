import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CasIcon from '../assets/Cas.svg'; // Import the CAS icon
const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md px-6 py-4 flex items-center justify-between">
    {/* Logo */}
        <img src={CasIcon} alt="cas" className="w-20 h-20" />
    {/* Menu + Giỏ hàng */}
    <ul className="flex gap-8 text-gray-700 font-medium items-center ">
        <li className="hover:text-blue-500 cursor-pointer text-[#cccccc]">Trang chủ</li>
        <li className="hover:text-blue-500 cursor-pointer text-[#cccccc]">Về chúng tôi</li>
        <li className="hover:text-blue-500 cursor-pointer text-[#cccccc]">Sự kiện sắp tới</li>
        <li className="hover:text-blue-500 cursor-pointer text-[#cccccc]">Merch</li>
    </ul>
    <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
        {/* Icon giỏ hàng */}
        <i className="fas fa-shopping-cart"></i>
        {/* Chữ "Giỏ hàng" */}
        <span>Giỏ hàng</span>

        {/* Số lượng sản phẩm sát bên chữ */}
        <span className="ml-2 bg-white text-red-500 text-xs font-bold px-2 py-0.5 rounded-full">
            3
        </span>
        </button>
    </div>
    </nav>
  );
};

export default Navbar;
