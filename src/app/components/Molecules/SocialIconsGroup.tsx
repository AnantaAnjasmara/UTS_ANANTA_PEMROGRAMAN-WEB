import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import SocialIcon from "../atom/SocialIcon";

const SocialIconsGroup: React.FC = () => (
  <div className="flex space-x-4">
    <SocialIcon icon={<FaTwitter size={16} />} />
    <SocialIcon icon={<FaLinkedinIn size={16} />} />
    <SocialIcon icon={<FaFacebookF size={16} />} />
  </div>
);

export default SocialIconsGroup;
