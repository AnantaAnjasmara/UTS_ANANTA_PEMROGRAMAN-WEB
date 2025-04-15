"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../atom/button";

export default function Navigasi() {
  return (
    <div className="flex justify-between items-center py-6 px-20 bg-white">
      <div>
        <Image src="/navbarlogo.png" alt="logo" width={200} height={0} />
      </div>
      <div className="flex space-x-6 text-gray-800 items-center">
        <Link href="#">
          <span className="hover:text-black">Home</span>
        </Link>
        <Link href="#">
          <span className="hover:text-black">About Me</span>
        </Link>
        <Link href="#">
          <span className="hover:text-black">Portfolio</span>
        </Link>
        <Button onClick={() => console.log("Clicked!")}>get in touch</Button>
      </div>
    </div>
  );
}
