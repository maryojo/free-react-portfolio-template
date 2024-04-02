
import React, {useState, useEffect, useRef} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";



const Sidebar = ({isMobileMenuOpen, setMobileMenuOpen}) => {
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleMenuItemClick = menuItem => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div>
    {isMobileMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-[#04324B] bg-opacity-60 z-30"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    <section
      ref={menuRef}
      className={`side-menu md:translate-x-0 z-30 ${
        isMobileMenuOpen ? " " : "-translate-x-full"
      }`}>
      <div className="mb-5 flex justify-between align-middle">
        <div className="md:hidden h-full">
        </div>
      </div>
      <div className="mb-5 border-[1px] border-neutral-400 rounded-[8px] w-full flex flex-row justify-between items-center py-3 px-5 ">
        <div>
        </div>
        <div className=" w-[6.5rem]">
          <div className="text-[12px] text-left truncate overflow-hidden">
            <p>Name</p>
          </div>
        </div>
        <div
          ref={toggleMenuRef}
          className="mt-[0.3rem] cursor-pointer"
          onClick={handleDropdownToggle}>
        </div>
      </div>

      <p className="mb-3 text-neutral-700">MENU</p>
      <div className="main-sections h-full flex flex-col justify-between">
        <p>hiiiiiiiii</p>
      </div>
    </section>
    {/* )} */}
    </div>
  );
};

export default Sidebar;
