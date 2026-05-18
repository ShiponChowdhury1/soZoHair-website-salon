import React from "react";
import Image from "next/image";

export default function Map() {
  return (
    <section className="w-full">
      <div className="w-full h-[600px] md:h-[800px] lg:h-[900px] relative">
        <Image 
          src="/landing/map/map.png" 
          alt="SoZo Hair Salon Location Map" 
          fill
          className="object-cover w-full h-full"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
