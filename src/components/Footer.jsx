import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-[#1b1637] h-18 w-full mx-auto text-[#fcfcfd] py-10 flex flex-col items-center justify-center gap-3">
      <SocialLinks /> 
      <p className="text-sm text-[#c1c1c9]">&copy; 2025 Muskan Malviya. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
