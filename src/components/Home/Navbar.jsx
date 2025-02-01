import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between p-10">
      <div className="logo">
        <a href="#" className="text-2xl font-semibold opacity-75">VISHAL CHOUDHARY</a>
      </div>
      <div className="pages flex items-center justify-between gap-12 text-sm font-semibold opacity-70">
        <a href="#">
          HOME<i class="ri-arrow-drop-down-line"></i>
        </a>
        <a href="#">ABOUT ME</a>
        <a href="#">
          PAGES<i class="ri-arrow-drop-down-line"></i>
        </a>
        <a href="#">CONTACT</a>
      </div>
      <div className="nav-links flex items-center justify-between gap-9 text-lg">
        <i class="ri-phone-fill cursor-pointer"></i>
        <i class="ri-mail-fill cursor-pointer"></i>
        <i class="ri-github-fill cursor-pointer"></i>
        <i class="ri-linkedin-fill cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Navbar;
