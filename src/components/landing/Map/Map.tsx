import React from "react";

export default function Map() {
  return (
    <section className="w-full relative py-0 my-0 overflow-hidden" id="location-map">
      <div className="w-full h-[450px] sm:h-[550px] md:h-[600px] lg:h-[650px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.3361802537734!2d-84.4133532235326!3d39.325968221302425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840503c40489de9%3A0x7f3ad5308be19b80!2sSoZo%20Hair%2C%20Spa%20%26%20Wigs!5e0!3m2!1sen!2sbd!4v1785322002891!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full block"
          title="SoZo Hair, Spa & Wigs Google Location Map"
        />
      </div>
    </section>
  );
}
