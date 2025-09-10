import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Service" },
  { label: "Resume" },
  { label: "Project" },
  { label: "Contact" },
];

// زر قابل لإعادة الاستخدام
const NavButton = ({ item, selected, handleClick, className }) => (
  <button
    className={`flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-primary font-bold' : 'bg-transparent hover:bg-[#232323]'} ${className}`}
    onClick={() => handleClick(item.label)}
    aria-current={selected === item.label ? "page" : undefined}
  >
    {item.label}
  </button>
);

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = (label) => {
    setSelected(label);
    setIsMobileMenuOpen(false);

    const section = document.getElementById(label.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // تفعيل العنصر عند التمرير
  useEffect(() => {
    const sections = menuItems.map(item => document.getElementById(item.label.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => section && observer.observe(section));
    return () => sections.forEach(section => section && observer.unobserve(section));
  }, []);

  return (
    <nav className="relative w-full max-w-[1298px] h-[70px] sm:h-[80px] lg:h-[86px] bg-[#171717] text-white px-10 lg:px-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] mx-auto flex items-center justify-between z-50">

      {/* Desktop Left */}
      <div className="hidden lg:flex flex-1 justify-start gap-2.5">
        {menuItems.slice(0, 3).map(item => (
          <NavButton key={item.label} item={item} selected={selected} handleClick={handleClick} className="w-[139px] h-[66px]" />
        ))}
      </div>

      {/* Logo */}
      <div>
        <h1 className="text-4xl font-bold text-primary">D9</h1>
      </div>

      {/* Desktop Right */}
      <div className="hidden lg:flex flex-1 justify-end gap-4">
        {menuItems.slice(3).map(item => (
          <NavButton key={item.label} item={item} selected={selected} handleClick={handleClick} className="w-[139px] h-[66px]" />
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary transition-colors"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 right-0 mt-2 bg-[#171717] rounded-[25px] backdrop-blur-[15px] lg:hidden z-40">
          <div className="flex flex-col p-4 gap-2">
            {menuItems.map(item => (
              <NavButton
                key={item.label}
                item={item}
                selected={selected}
                handleClick={handleClick}
                className="w-full h-[50px] rounded-[25px]"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
