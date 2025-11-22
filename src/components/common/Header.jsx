import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = ({ bgColor = "", text = "", border = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);
  const location = useLocation();
  
  const headerRef = useRef(null);

  // GSAP Animation: Items falling one by one
  useGSAP(() => {
    // Select all elements with the class 'animate-item' inside this component
    gsap.from(".animate-item", {
      y: -50,          // Start 50px above
      opacity: 0,      // Start invisible
      duration: 0.8,   // Duration of the fall
      stagger: 0.1,    // 0.1s delay between each item falling
      ease: "power2.out", // Smooth landing (no bounce, just professional stop)
      clearProps: "all" // Cleanup styles after animation so hover effects work perfectly
    });
  }, { scope: headerRef });

  const serviceItems = [
    { name: "TMT Standard", path: "/services/tmt-Standard" },
    { name: "TMT Prime", path: "/services/tmt-Prime" },
    { name: "TMT Luxe", path: "/services/tmt-Luxe" },
  ];

  const navItems = [
    // { name: "Home", path: "/#" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", hasDropdown: true },
    { name: "Our Work", path: "/our-work" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <header 
      ref={headerRef} 
      className={`h-[13vh] fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${bgColor || 'bg-[rgb(255,250,230)]' } ${text} `}
    >
      <nav className="container mx-auto py-3 flex justify-between items-center px-3 lg:px-0">

        {/* LEFT SIDE → LOGO + NAVIGATION */}
        <div className="flex items-center space-x-10">

          {/* Logo - Added 'animate-item' */}
          <Link 
            to={'/'} 
            className='animate-item text-3xl italic font-bold font-montserrat inline-block'
          >
            Tmt
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:text-[16px]">
            {navItems.map((item) => (
              // Added 'animate-item' to the wrapper div of each link
              <div key={item.name} className="animate-item relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setOpenServiceMenu(!openServiceMenu)}
                    className={` ${text || "text-[#161000]"} flex items-center text-[#161000] font-montserrat hover:text-amber-300 font-normal `}
                  >
                    {item.name}
                    {openServiceMenu ? (
                      <ChevronUp size={16} className="ml-1" />
                    ) : (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                ) : (
                  <Link
                    to={item.path}
className={`
  font-montserrat font-normal
  ${location.pathname === item.path ? "text-amber-500 font-semibold" : (text || "text-[#161000]")}
  hover:text-amber-300
`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasDropdown && openServiceMenu && (
                  <div className="absolute left-0 mt-3 bg-white border border-gray-300 shadow-lg rounded-lg py-3 w-48 z-50">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.name}
                        to={s.path}
className={`
  block px-4 py-2 text-sm
  ${location.pathname === s.path ? "bg-gray-200 text-black font-semibold" : "text-gray-700"}
  hover:bg-gray-100
`}                        onClick={() => setOpenServiceMenu(false)}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Contact button - Added 'animate-item' */}
        <div className={`animate-item ${border || "border-[#B58718]"} ${text || "text-[#B58718]"} hidden md:block border rounded-full px-9 py-3 hover:text-black transition-colors duration-300 font-semibold`}>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        {/* Mobile Menu Button - Added 'animate-item' */}
        <button className="md:hidden animate-item" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} className="text-black" />
        </button>

      </nav>


      {/* Mobile Sidebar (No changes to logic here) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">

          {/* Sidebar Panel */}
          <div className="w-72 bg-white h-full shadow-xl p-6 animate-slideIn">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={26} className="text-black" />
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-6 space-y-4">

              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setOpenServiceMenu(!openServiceMenu)}
                        className="flex justify-between w-full text-left text-gray-800 font-medium"
                      >
                        {item.name}
                        {openServiceMenu ? <ChevronUp /> : <ChevronDown />}
                      </button>

                      {openServiceMenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {serviceItems.map((s) => (
                            <Link
                              key={s.name}
                              to={s.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenServiceMenu(false);
                              }}
                              className="block text-sm text-gray-700 hover:text-amber-600"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
className={`
  block text-[17px]
  ${location.pathname === item.path ? "text-amber-500 font-semibold" : "text-black"}
`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 inline-block text-[#B58718] border border-[#B58718] rounded-full px-6 py-2 hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Click overlay to close */}
          <div
            className="flex-1"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;