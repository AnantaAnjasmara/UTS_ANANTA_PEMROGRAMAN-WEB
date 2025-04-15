"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Visual Branding",
    description:
      "Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience.",
  },
  {
    title: "Creative Campaign",
    description:
      "We develop powerful campaigns that connect with your audience and elevate your brand presence across platforms.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive, user-centric interfaces that enhance engagement and drive results.",
  },
  {
    title: "Development",
    description:
      "From websites to apps, we build responsive and robust digital experiences tailored to your needs.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0); // buka yang pertama

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="bg-black text-white px-8 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-2">
        {/* Left Label */}
        <div className="md:w-1/3">
          <p className="text-sm text-gray-300">Our Services</p>
        </div>

        {/* Accordion */}
        <div className="md:w-2/3 w-full space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border-t border-gray-600 pt-4">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-xl font-semibold"
              >
                {service.title}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-300 text-sm border-b border-gray-600 pb-4">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
