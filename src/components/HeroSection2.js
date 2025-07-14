import React from 'react';

export default function HeroSection2() {
  return (
    <div className="relative w-full min-h-[600px] px-12 py-20 bg-black bg-opacity-80">
      {/* OUR tiêu đề */}
      <div className="flex justify-center mb-10">
        <h1 className="text-6xl font-extrabold text-orange-500">OUR</h1>
      </div>

      {/* Vision + Mission */}
      <div className="space-y-10">
        {/* Vision row */}
        <div className="flex flex-col md:flex-row items-start md:items-start gap-6 text-left">
          <div className="w-full md:w-1/5">
            <h2 className="text-4xl font-semibold text-black text-left text-orange-500">Vision</h2>
          </div>
          <div className="w-full md:w-4/5">
            <p className="text-lg text-gray-700 text-left text-white">
              Chúng mình tôn trọng quyết định của các thành viên Band nhưng cũng mong rằng 
              những giai điệu đã gắn bó suốt bao năm vẫn tiếp tục đồng hành cùng những người yêu nhạc Cá Hồi Hoang, 
              từ fan lâu năm đến khán giả mới. Các hoạt động trên Fanpage, trong cộng đồng fan, các chương trình Offline 
              Hội Hoang được tổ chức với mục tiêu kết nối những trái tim yêu nhạc Cá Hồi Hoang, cùng nhau cất lên những giai 
              điệu đã chạm đến tâm hồn mỗi người, để “Âm nhạc Cá Hồi Hoang sẽ luôn là cái gì đó mãi mãi”.
            </p>
          </div>
        </div>

        {/* Mission row */}
        <div className="flex flex-col md:flex-row items-start md:items-start gap-6 text-left">
          <div className="w-full md:w-1/5">
            <h2 className="text-4xl font-semibold text-black text-left text-orange-500">Mission</h2>
          </div>
          <div className="w-full md:w-4/5">
            <p className="text-lg text-gray-700 text-left text-white">
              Âm nhạc là liều thuốc chữa lành, và âm nhạc của Cá Hồi Hoang đã đồng hành, 
              an ủi nhiều tâm hồn suốt những năm qua. Offline Hội Hoang không chỉ là nơi 
              kết nối những người yêu nhạc CHH, mà còn là không gian để giai điệu ấy tiếp 
              tục vang lên, trở thành một phần ký ức không phai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
