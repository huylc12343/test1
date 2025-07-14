import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cas from './cas'; // Import the cas component
export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-2">
            <div><Cas/></div>
            <div className="grid col-span-1 text-left">
                <h1 className="text-2xl font-extrabold ">Điều hướng</h1>
                <ul className="space-y-2">
                    <li className="hover:text-gray-400 cursor-pointer">GẤP GÁP</li>
                    <li className="hover:text-gray-400 cursor-pointer">Sự kiện sắp tới</li>
                    <li className="hover:text-gray-400 cursor-pointer">Merch</li>
                </ul>
            </div>
            <div className="grid col-span-1 text-left">
                <h1 className="text-2xl font-extrabold ">Địa chỉ hỗ trợ</h1>
                <ul className="space-y-2">
                    <li>hoangshitposting@gmail.com</li>
                    <li>SĐT: 0968023065 (Hải Yến)</li>
                </ul>
            </div>
            <div className="grid col-span-1 text-left">
                <h1 className="text-2xl font-extrabold ">Theo dõi chúng tôi</h1>
                <ul className="space-y-2">
                    <li>
                        <i class="fa-brands fa-facebook"></i>
                        <a className="hover:text-gray-400 cursor-pointer" href="https://www.facebook.com/hoangshitposting"> Facebook</a>
                    </li>
                    <li>
                        <i class="fa-brands fa-instagram"></i>
                        <a className="hover:text-gray-400 cursor-pointer" href="https://www.instagram.com/hoangshitposting"> Instagram</a>
                    </li>
                    <li>
                        <i class="fa-brands fa-youtube"></i>
                        <a className="hover:text-gray-400 cursor-pointer" href="https://www.facebook.com/hoangshitposting"> Youtube</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>  
  );
}
