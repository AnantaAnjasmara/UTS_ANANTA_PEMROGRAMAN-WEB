import React from "react";
import Image from "next/image";

const AppShowcase: React.FC = () => {
  const apps = [
    {
      img: "/foto1.png",
      title: "Daily App",
      subtitle: "Increasing your productivity",
    },
    {
      img: "/foto2.png",
      title: "Daily App",
      subtitle: "Increasing your productivity",
    },
    {
      img: "/foto3.png",
      title: "Daily App",
      subtitle: "Increasing your productivity",
    },
    {
      img: "/foto4.png",
      title: "Daily App",
      subtitle: "Increasing your productivity",
    },
    {
      img: "/foto5.png",
      title: "Daily App",
      subtitle: "Increasing your productivity",
    },
    {
      img: "/foto6.png",
      title: "Daily App",
      subtitle: "Increasing your productivity",
    },
  ];

  return (
    <section className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-medium text-center mb-10 leading-snug">
          We envision a world where every idea, product, or <br />
          service is brought to life through exceptional design.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app, index) => (
            <div key={index}>
              <Image
                src={app.img}
                alt={`${app.title} screenshot ${index + 1}`}
                className="rounded-lg shadow-md"
                width={500}
                height={500}
              />
              <p className="text-sm mt-2">
                <span className="font-semibold">{app.title}</span> –{" "}
                {app.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
