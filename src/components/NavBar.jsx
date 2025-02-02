import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuLinksRef = useRef([]);

  useEffect(() => {
    const t1 = gsap.timeline({ paused: true });

    // GSAP Timeline for the animation
    t1.to(menuRef.current, {
      right: "0%",
      duration: 0.5,
      ease: "power2.inOut",
    })
      .from(menuLinksRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out",
      })
      .from(closeButtonRef.current, {
        opacity: 0,
        duration: 0.3,
      });

    // Trigger GSAP animation based on menu state
    if (isOpen) {
      t1.play();  // Play the animation when menu is open
    } else {
      t1.reverse();  // Reverse the animation when menu is closed
    }
  }, [isOpen]);  // Run whenever the `isOpen` state changes

  return (
    <>
      <nav className="bg-[#231e45] text-[#fcfcfd] h-14 flex justify-between items-center px-6 font-poppins">
        <h2 className="font-dancing text-[3vw]">Muskan Malviya</h2>

        {/* Menu Button (for Mobile) */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <FaBars size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 text-lg font-medium">
          {["Home", "About", "Skill", "Project", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-300">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu (Full Screen) */}
      <div
        ref={menuRef}
        className="fixed top-0 right-[-100%] w-full h-full bg-[#231e45] bg-opacity-90 flex flex-col items-center justify-center gap-6 text-2xl transition-all"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {["Home", "About", "Skill", "Project", "Contact"].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}  // Close menu when clicking a link
            className="hover:text-gray-400"
            ref={(el) => (menuLinksRef.current[index] = el)}
            style={{ opacity: 0 }}  // Ensure links are initially hidden before animation
          >
            {item}
          </a>
        ))}

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}  // Close menu when clicked
          className="absolute top-6 right-6 text-3xl"
          ref={closeButtonRef}
        >
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default NavBar;
