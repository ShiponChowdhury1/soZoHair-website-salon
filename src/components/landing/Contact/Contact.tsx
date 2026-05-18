import React from "react";

export default function Contact() {
  return (
    <section
      className="w-full py-20 overflow-hidden"
      id="contact"
      style={{
        background:
          "linear-gradient(135deg, #F8F3EE 0%, #F8F1EB 12.5%, #F7F0E7 25%, #F7EEE4 37.5%, #F7EDE1 50%, #F6EBDD 62.5%, #F6E9DA 75%, #F5E8D6 87.5%, #F5E6D3 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#D4A59A" }}
          >
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us in{" "}
            <em className="not-italic font-bold" style={{ color: "#6B2D5B" }}>
              <i>West Chester</i>
            </em>
          </h2>
          <p className="text-gray-600 max-w-lg text-base leading-relaxed">
            Located in the heart of West Chester, Ohio, our boutique spa is
            designed to be your sanctuary for beauty, wellness, and
            transformation. We can&apos;t wait to welcome you.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Contact Info + Buttons + Hours */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Contact Info Items */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#E8B4B81F" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A59A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    Location
                  </h4>
                  <p className="text-gray-600 text-sm mt-0.5">
                    9069 Cincinnati Dayton Road
                    <br />
                    West Chester, Ohio 45069
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#E8B4B81F" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A59A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Phone</h4>
                  <a
                    href="tel:5138749999"
                    className="text-sm mt-0.5 hover:underline"
                    style={{ color: "#D4A59A" }}
                  >
                    (513) 874-9999
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#E8B4B81F" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A59A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Email</h4>
                  <a
                    href="mailto:sozohair1@gmail.com"
                    className="text-sm mt-0.5 hover:underline"
                    style={{ color: "#D4A59A" }}
                  >
                    sozohair1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://www.vagaro.com/sozohairspawigs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#D4A59A" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Book Appointment
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9069+Cincinnati+Dayton+Rd,+West+Chester,+OH+45069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-gray-700 bg-transparent border border-gray-300 hover:bg-white transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-3 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#E8B4B81F" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A59A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900">Hours</h4>
              </div>
              <div className="ml-14">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
                      { day: "Tuesday", hours: "9:00 AM - 8:00 PM" },
                      { day: "Wednesday", hours: "11:00 AM - 8:00 PM" },
                      { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
                      { day: "Friday", hours: "9:00 AM - 5:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((item) => (
                      <tr key={item.day}>
                        <td className="py-1.5 pr-8 text-gray-700 font-medium">
                          {item.day}
                        </td>
                        <td
                          className={`py-1.5 text-right ${item.hours === "Closed" ? "text-red-500 font-semibold" : "text-gray-600"}`}
                        >
                          {item.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2">
            <div
              className="p-8 md:p-10 rounded-2xl"
              style={{ backgroundColor: "#FDF8F4" }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#D4A59A] focus:border-transparent outline-none transition text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#D4A59A] focus:border-transparent outline-none transition text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#D4A59A] focus:border-transparent outline-none transition text-sm"
                    placeholder="(513) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#D4A59A] focus:border-transparent outline-none transition text-sm resize-none"
                    placeholder="Tell us what you're looking for..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-medium py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#D4A59A" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
