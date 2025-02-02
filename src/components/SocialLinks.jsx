import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { href: "https://github.com/Muskanmalviyaa", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/muskanmalviya21", icon: <FaLinkedin /> },
    { href: "https://www.instagram.com/___muskanmalviya_", icon: <FaInstagram /> },
    { href: "https://wa.me/+919399646973?text=Hello%20there!", icon: <FaWhatsapp /> },
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ href, icon }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 1, opacity: 0.8}}
          whileHover={{ scale: 1.25, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-[25px] bg-clip-text bg-gradient-to-r from-[#4c44b3] to-[#3b32e2]"
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
