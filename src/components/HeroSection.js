import React from 'react';
import bg from '../assets/PWM01219.jpg';       // ảnh nền mờ phía sau
import rightImg from '../assets/PWM01219.jpg'; // ảnh bên phải
import CasIcon from '../assets/Cas.svg'; // Import the CAS icon
const HeroSection = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Ảnh nền bị làm mờ */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
      />

      {/* Lớp phủ nhẹ để dịu màu ảnh nền */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm" />

      {/* Nội dung chính */}
      <div className="relative z-10 flex items-center justify-between h-full px-12 text-white">
        {/* Phần trái: Text (60%) */}
        <div className="w-3/5 text-left">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold">Về chúng tôi</h1>
            <img src={CasIcon} alt="cas" className="w-20 h-20" />
          </div>
          <p className="text-lg mb-4">
            Chương trình Offline Hội Hoang được thực hiện bởi những fan đã gắn bó với Cá Hồi Hoang,
            những người đã trưởng thành cùng âm nhạc của band.
          </p>
          <p className="text-lg">
            Dù Cá Hồi Hoang đã thông báo dừng hoạt động vào năm 2023, nhưng với chúng mình,
            âm nhạc ấy vẫn luôn tồn tại – là ký ức, là nguồn cảm hứng, là nơi chữa lành,
            và sẽ luôn là một điều gì đó mãi mãi.
          </p>
        </div>

        {/* Phần phải: Hình ảnh (40%) */}
        <div className="w-2/5 flex justify-center">
          <img
            src={rightImg}
            alt="Right Side"
            className="max-h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
