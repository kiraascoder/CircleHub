import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 80) {
      headerRef.current.classList.add("fixed__header");
    } else {
      headerRef.current.classList.remove("fixed__header");
    }
  };

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      // Memeriksa apakah elemen target ditemukan
      const location = targetElement.offsetTop;

      window.scrollTo({
        top: location - 80,
        left: 0,
      });
    }
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <div>
      <header
        ref={headerRef}
        className="w-full h-[80px] leading-[80px] flex items-center"
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font=[500] rounded-full flex items-center justify-center"></span>
              <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-[700]">
                  Circle Hub
                </h2>
              </div>
            </div>
            {/* End Logo */}
            {/* Menu Kanan  */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-smallTextColor font-[600]  py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                <i className="ri-send-plane-line"></i>Log out
              </button>
              <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                <i className="ri-send-plane-line"></i>My Account
              </button>
              <span
                onClick={toggleMenu}
                className="text-2xl text-smallTextColor md:hidden cursor-pointer"
              >
                <i className="ri-menu-line"></i>
              </span>
            </div>
            {/* Akhir Menu Kanan  */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
