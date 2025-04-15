"use client";
import Button from "../atom/button";

export default function Cta() {
  return (
    <div className=" items-center px-20 py-30">
      <h1 className="text-2xl justify-start text-white">
        Ready to turn your ideas into exceptional designs?
        <br />
        Contact us today, and lets make something amazing
        <br />
        together!
      </h1>
      <Button variant="light" onClick={() => console.log("Clicked!")}>
        lets talk
      </Button>
    </div>
  );
}
