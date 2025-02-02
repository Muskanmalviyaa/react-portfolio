import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-[#231e45] text-[#fcfcfd] py-6 flex flex-col items-center justify-center gap-4">
      <SocialLinks /> 
      <p className="text-sm text-[#c1c1c9]">&copy; 2024 Muskan Malviya. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
