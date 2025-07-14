import logo from '../assets/cas.png'; // import đúng ảnh logo
import logo2 from '../assets/Vector-1.png'; // import đúng ảnh logo2
import React from 'react'

export default function cas() {
  return (
    <div>
    {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo2} alt="Logo 2" className="-mr-6" />
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
    </div>
  )
}
