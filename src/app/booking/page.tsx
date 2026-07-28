"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { BOOKING_ENABLED } from "@/config/bookingConfig";

const serviceCategories = [
  { id: "hair-cuts-color", name: "Hair Color & Cuts", duration: "60 - 120 mins" },
  { id: "specialty-hair", name: "Specialty Hair Services", duration: "90 - 150 mins" },
  { id: "extensions-texturizing", name: "Hair Extensions & Texture", duration: "120 - 240 mins" },
  { id: "waxing", name: "Waxing & Brows", duration: "30 - 60 mins" },
  { id: "cryoskin", name: "CryoSkin Body Contouring", duration: "45 - 60 mins" },
  { id: "pure-plasma", name: "Pure Plasma Skin Tightening", duration: "60 - 90 mins" },
  { id: "scalp-facial", name: "The Relaxing Scalp Facial", duration: "60 mins" },
  { id: "wigs", name: "Custom Wig Consultation", duration: "45 mins" },
];

const artistsList = [
  { name: "Karen Welch (Level 5 Expert)", role: "Salon Owner & Master Artist" },
  { name: "Alicia (Level 3 Artist)", role: "Hair & Extension Specialist" },
  { name: "First Available Specialist", role: "Matching your requested time slot" },
];

const timeSlots = [
  "09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"
];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState(serviceCategories[0].id);
  const [selectedArtist, setSelectedArtist] = useState(artistsList[0].name);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!BOOKING_ENABLED) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8F3EE]">
        <Navbar />
        <main className="flex-grow pt-36 pb-24 px-5 sm:px-8 lg:px-12 flex items-center justify-center">
          <div className="max-w-xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD8] shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
            <div className="w-16 h-16 rounded-full bg-[#C4956A]/15 flex items-center justify-center text-[#C4956A] mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">
              Online Booking Coming Soon
            </h1>
            <p className="text-[#666] text-sm sm:text-base leading-relaxed mb-8">
              We are currently upgrading our online booking system with Meevo for an improved scheduling experience. In the meantime, please call us directly to book your appointment!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:5138749999"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C4956A] hover:bg-[#b0845a] text-white rounded-xl text-sm font-semibold transition-all no-underline shadow-md"
              >
                Call Us: (513) 874-9999
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#E8DFD8] hover:border-[#C4956A] text-[#2D2D2D] rounded-xl text-sm font-semibold transition-all no-underline bg-transparent"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EE]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[2px] text-[#8B7B6B] mb-4 font-medium">
              <Link href="/" className="hover:text-[#C4956A] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#C4956A]">Online Booking</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-4">
              Book Your Appointment
            </h1>
            <p className="text-[#666] text-base max-w-xl mx-auto leading-relaxed">
              Select your desired service, date, and specialist below. We look forward to providing you with an outstanding salon &amp; spa experience.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-3xl p-10 sm:p-14 border border-[#E8DFD8] shadow-[0_15px_40px_rgba(0,0,0,0.06)] text-center flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C4956A]/20 flex items-center justify-center text-[#C4956A]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D]">
                Booking Request Received!
              </h2>
              <p className="text-[#666] text-sm sm:text-base max-w-md leading-relaxed">
                Thank you, <strong>{clientInfo.name}</strong>! We have received your booking request. Our team will contact you shortly at <strong>{clientInfo.phone}</strong> to confirm your appointment time.
              </p>

              <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E8DFD8] w-full max-w-md text-left text-xs sm:text-sm text-[#555] space-y-2 mt-2">
                <div><strong>Service:</strong> {serviceCategories.find(s => s.id === selectedService)?.name}</div>
                <div><strong>Specialist:</strong> {selectedArtist}</div>
                <div><strong>Time:</strong> {selectedTime}</div>
              </div>

              <div className="flex gap-4 mt-4">
                <Link
                  href="/"
                  className="px-8 py-3 bg-[#C4956A] text-white rounded-md text-sm font-semibold hover:bg-[#b0845a] transition-all no-underline"
                >
                  Back to Home
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border border-[#C4956A] text-[#C4956A] rounded-md text-sm font-semibold hover:bg-[#C4956A]/10 transition-all bg-transparent"
                >
                  Book Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD8] shadow-[0_15px_40px_rgba(0,0,0,0.06)] space-y-10">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="block font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D2D2D] mb-4">
                  1. Select a Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceCategories.map((service) => (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 cursor-pointer ${
                        selectedService === service.id
                          ? "border-[#C4956A] bg-[#C4956A]/10 shadow-sm"
                          : "border-[#E8DFD8] bg-white hover:border-[#C4956A]/50"
                      }`}
                    >
                      <span className="font-semibold text-sm text-[#2D2D2D]">{service.name}</span>
                      <span className="text-xs text-[#8B7B6B]">{service.duration}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Specialist */}
              <div>
                <label className="block font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D2D2D] mb-4">
                  2. Preferred Specialist
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {artistsList.map((artist) => (
                    <button
                      type="button"
                      key={artist.name}
                      onClick={() => setSelectedArtist(artist.name)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 cursor-pointer ${
                        selectedArtist === artist.name
                          ? "border-[#C4956A] bg-[#C4956A]/10 shadow-sm"
                          : "border-[#E8DFD8] bg-white hover:border-[#C4956A]/50"
                      }`}
                    >
                      <span className="font-semibold text-sm text-[#2D2D2D]">{artist.name}</span>
                      <span className="text-xs text-[#8B7B6B]">{artist.role}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-[#E8DFD8] bg-[#FAF6F0] text-sm text-[#2D2D2D] outline-none focus:border-[#C4956A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-[#E8DFD8] bg-[#FAF6F0] text-sm text-[#2D2D2D] outline-none focus:border-[#C4956A] transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="space-y-4 pt-4 border-t border-[#E8DFD8]">
                <label className="block font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D2D2D] mb-2">
                  3. Your Contact Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#555] mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      required
                      className="w-full h-12 px-4 rounded-xl border border-[#E8DFD8] bg-white text-sm text-[#2D2D2D] outline-none focus:border-[#C4956A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#555] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="(513) 000-0000"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      required
                      className="w-full h-12 px-4 rounded-xl border border-[#E8DFD8] bg-white text-sm text-[#2D2D2D] outline-none focus:border-[#C4956A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#555] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-[#E8DFD8] bg-white text-sm text-[#2D2D2D] outline-none focus:border-[#C4956A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#555] mb-1">Special Notes / Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requests or hair concerns..."
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    className="w-full p-4 rounded-xl border border-[#E8DFD8] bg-white text-sm text-[#2D2D2D] outline-none focus:border-[#C4956A] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#C4956A] hover:bg-[#b0845a] text-white font-semibold text-base rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgba(196,149,106,0.3)] hover:-translate-y-0.5 border-none cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Booking Request</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </form>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
