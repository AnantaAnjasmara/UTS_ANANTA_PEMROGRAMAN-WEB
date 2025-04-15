import React from "react";

interface SocialIconProps {
  icon: React.ReactNode;
  href?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = "#" }) => (
  <a
    href={href}
    className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
  >
    {icon}
  </a>
);

export default SocialIcon;
