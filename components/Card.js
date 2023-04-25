import React from "react";
import Image from "next/image";

export default function Card({ image, heading, text }) {
  return (
    <section className="text-white bg-black">
      <div className="px-4 pt-5">
        <div className="px-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 card_left">
              <h2 className="font-semibold text-[2.5rem]">{heading}</h2>
              <p className="font-semibold">{text}</p>
            </div>
            <div className="flex justify-center">
              <Image src={image} height={400} width={310} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
