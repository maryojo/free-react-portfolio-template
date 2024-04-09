import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";
import SocialMedia from "./SocialMedia";
import { generateLogo } from "../utils/generate-logo";

const Sidebar = ({ isMobileMenuOpen, setMobileMenuOpen }) => {
  const menuRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const logoDataURL = generateLogo("Mory Ojo");
  const logoImage = new Image();
  console.log(logoImage);
// logoImage.src = logoDataURL;


  const handleMenuItemClick = (menuItem) => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleClickOut = (event) => {
    if (
      isMobileMenuOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      toggleMenuRef.current &&
      !toggleMenuRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOut, false);
    return () => {
      document.removeEventListener("click", handleClickOut, false);
    };
  }, []);

  return (
    <div>
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-[#000] bg-opacity-[0.85] backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
        >
          {" "}
        </div>
      )}
      <section
        ref={menuRef}
        className={`side-menu md:translate-x-0 z-30  ${
          isMobileMenuOpen ? " " : "-translate-x-full"
        }`}
      >
        <div className="main-sections h-full flex flex-col justify-between">
        <div className="flex justify-start w-full ">
          <img src={logoDataURL}/>
        </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-3 cursor-pointer hover:text-[#00A177]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p>About</p>
            </div>
            <div className="flex flex-row items-center gap-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>

              <p>Work</p>
            </div>
            <div className="flex flex-row items-center gap-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p>Contact</p>
            </div>
            <hr className="my-3 border-neutral-700"/>
            <div className="flex flex-row items-center gap-1 cursor-pointer">
              <p>My Resume</p>
              <HiExternalLink className="text-neutral-500"/>
            </div>
            <div className="flex flex-row items-center gap-1 cursor-pointer">
              <p>Get this for free</p>
              <HiExternalLink className="text-neutral-500"/>
            </div>
          </div>
          <div className="mb-5">
            <SocialMedia />
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default Sidebar;
