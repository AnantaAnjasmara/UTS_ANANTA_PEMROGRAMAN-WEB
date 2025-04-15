// import React from "react";
// import Image from "next/image";
// import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
//         {/* Logo & Description */}
//         <div>
//           <Image src="/navbarlogo.png" alt="logo" width={40} height={40} />
//           <p className="text-sm text-gray-400 mb-4">
//             Creativo is where your imagination and our expertise converge to
//             create design solutions that elevate your brand and set you apart
//             from the competition.
//           </p>
//           <p className="font-semibold">hello@creativo.com</p>
//           <p className="font-semibold">+1-800-123 4567</p>
//         </div>

//         {/* Company Links */}
//         <div>
//           <h4 className="text-sm font-semibold mb-4">Company</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>About</li>
//             <li>Services</li>
//             <li>Careers</li>
//             <li>Blog</li>
//             <li>Pricing</li>
//           </ul>
//         </div>

//         {/* Contact Links */}
//         <div>
//           <h4 className="text-sm font-semibold mb-4">Contact</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>Help</li>
//             <li>FAQs</li>
//             <li>Press</li>
//             <li>Terms & Conditions</li>
//             <li>Partners</li>
//           </ul>
//         </div>

//         {/* Discover Links */}
//         <div>
//           <h4 className="text-sm font-semibold mb-4">Discover</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>Affiliate</li>
//             <li>Partner Program</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
//         <p>Copyright © 2032 Creativo®. All rights reserved.</p>
//         <div className="flex space-x-4">
//           <a
//             href="#"
//             className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
//           >
//             <FaTwitter size={16} />
//           </a>
//           <a
//             href="#"
//             className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
//           >
//             <FaLinkedinIn size={16} />
//           </a>
//           <a
//             href="#"
//             className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
//           >
//             <FaFacebookF size={16} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Image from "next/image";
import FooterColumn from "../Molecules/FooterColumn";

const FooterMain: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
      <div>
        <Image src="/navbarlogo.png" alt="logo" width={40} height={40} />
        <p className="text-sm text-gray-400 mb-4">
          Creativo is where your imagination and our expertise converge to
          create design solutions that elevate your brand and set you apart from
          the competition.
        </p>
        <p className="font-semibold">hello@creativo.com</p>
        <p className="font-semibold">+1-800-123 4567</p>
      </div>
      <FooterColumn
        title="Company"
        links={["About", "Services", "Careers", "Blog", "Pricing"]}
      />
      <FooterColumn
        title="Contact"
        links={["Help", "FAQs", "Press", "Terms & Conditions", "Partners"]}
      />
      <FooterColumn title="Discover" links={["Affiliate", "Partner Program"]} />
    </div>
  );
};

export default FooterMain;
