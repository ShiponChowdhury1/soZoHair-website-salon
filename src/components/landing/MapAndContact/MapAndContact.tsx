import React from "react";
import Image from "next/image";

export default function MapAndContact() {
  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden" id="contact">
      <div className="max-w-[1926px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-[48px] items-start">
          
          {/* Contact Details & Form */}
          <div className="w-full lg:w-1/3 flex flex-col gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to experience the difference? Get in touch with us to schedule your appointment or ask any questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-gray-900 p-2 rounded-full text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600 mt-1">9069 Cincinnati-Dayton Rd<br/>West Chester, OH 45069</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-gray-900 p-2 rounded-full text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600 mt-1">513-874-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-gray-900 p-2 rounded-full text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600 mt-1">info@sozohair.net</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps Container */}
          <div className="w-full lg:w-2/3 h-[500px] lg:h-[750px] relative rounded-3xl overflow-hidden border border-gray-200 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.3361802537734!2d-84.4133532235326!3d39.325968221302425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840503c40489de9%3A0x7f3ad5308be19b80!2sSoZo%20Hair%2C%20Spa%20%26%20Wigs!5e0!3m2!1sen!2sbd!4v1785322002891!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
              title="SoZo Hair Salon Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
