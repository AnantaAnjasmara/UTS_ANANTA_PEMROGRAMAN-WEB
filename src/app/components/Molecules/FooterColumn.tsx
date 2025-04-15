import React from "react";
import FooterLink from "../atom/FooterLink";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div>
    <h4 className="text-sm font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <FooterLink key={index} label={link} />
      ))}
    </ul>
  </div>
);

export default FooterColumn;
