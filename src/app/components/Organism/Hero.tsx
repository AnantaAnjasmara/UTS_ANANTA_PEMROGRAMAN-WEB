"use client";

import Image from "next/image";
import Button from "../atom/button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-20 py-20 bg-white">
      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left space-y-6">
        <div className="h-1 w-10 bg-gray-800 mb-4"></div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Where <br className="md:hidden" />
          Design Meets <br className="md:hidden" />
          Innovation!
        </h1>
        <p className="text-gray-600 text-lg">
          Whether youre a startup looking to establish your brand identity or
          <br />
          an established business aiming to refresh your image, weve got the
          <br />
          creative firepower to make it happen.
          <br />
        </p>
        <Button onClick={() => console.log("Clicked!")}>lets talk</Button>
      </div>

      {/* Image Section */}
      <div className="mt-12 md:mt-0 md:ml-12">
        <Image
          src="/hero.png" // Ganti dengan nama file kamu di public/
          alt="Hero Illustration"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
}
