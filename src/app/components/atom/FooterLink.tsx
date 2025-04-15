import React from "react";

interface FooterLinkProps {
  label: string;
  href?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href = "#" }) => (
  <li>
    <a href={href} className="text-sm text-gray-400 hover:text-white transition">
      {label}
    </a>
  </li>
);

export default FooterLink;
