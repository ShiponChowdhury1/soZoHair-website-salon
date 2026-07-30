"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopHeader from "@/components/layout/TopHeader";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { 
  Sparkles, 
  CheckCircle2, 
  Send, 
  User, 
  Phone, 
  Smile, 
  Frown,
  Award,
  ArrowRight
} from "lucide-react";

const availableServices = [
  "Hair Cuts & Color",
  "Specialty Hair Services",
  "Hair Extensions",
  "Waxing Services",
  "Lash & Brow Services",
  "CryoSkin Fat Loss",
  "Pure Plasma",
  "Scalp Facial",
  "Skin Services",
  "HeadSpa",
  "Medical Spa Services",
  "Wigs & Hairpieces",
  "Other / Retail Products"
];

export default function SpeakYourVoicePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customService, setCustomService] = useState("");
  const [happyWithProvider, setHappyWithProvider] = useState<"yes" | "no" | null>(null);
  const [greetedOnArrival, setGreetedOnArrival] = useState<"yes" | "no" | null>(null);
  const [metExpectations, setMetExpectations] = useState<"yes" | "no" | null>(null);
  
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Please enter your mobile phone number.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate feedback submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <TopHeader />
      <Navbar />
      <main className="min-h-screen bg-[#FDF8F4] text-[#111111] pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Badge */}
        <div className="max-w-4xl mx-auto mb-8 text-center animate-in fade-in duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5ECE2] text-[#D4A59A] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 shadow-sm border border-[#EADCC9]">
            <Sparkles className="w-4 h-4 text-[#D4A59A]" /> Client Experience Survey
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111111] tracking-tight mb-4">
            Speak Your Voice!
          </h1>
          <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto font-medium leading-relaxed">
            We appreciate your business and value your opinion. Whether good or bad, we want to know your honest thoughts and experiences from your last visit at SoZo Hair, Spa & Wigs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            /* Success Screen */
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EADCC9] text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-[#FDF8F4] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#D4A59A]">
                <CheckCircle2 className="w-10 h-10 text-[#D4A59A]" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111111] mb-3">
                Thank You for Your Feedback!
              </h2>
              <p className="text-[#666666] text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                Your voice helps us maintain exceptional quality and exceed your expectations on every visit. We deeply value your trust in SoZo Hair, Spa & Wigs!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="px-8 py-3.5 bg-[#D4A59A] text-white font-semibold rounded-full shadow-md hover:bg-[#c29388] transition-all no-underline inline-flex items-center gap-2"
                >
                  Back to Home <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSelectedServices([]);
                    setHappyWithProvider(null);
                    setGreetedOnArrival(null);
                    setMetExpectations(null);
                    setComments("");
                    setName("");
                    setPhone("");
                  }}
                  className="px-8 py-3.5 bg-[#FDF8F4] text-[#111111] border border-[#EADCC9] font-semibold rounded-full hover:bg-[#F5ECE2] transition-all cursor-pointer"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            /* Form Screen */
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EADCC9] space-y-10"
            >
              {/* Section 1: Services Received */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[#F5ECE2] pb-3">
                  <div className="w-8 h-8 rounded-full bg-[#FDF8F4] text-[#D4A59A] flex items-center justify-center font-bold text-sm border border-[#EADCC9]">
                    1
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
                    What services did you receive?
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#777777]">
                  Select all that apply to your recent visit:
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {availableServices.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center gap-2 border ${
                          isSelected
                            ? "bg-[#D4A59A] text-white border-[#D4A59A] shadow-sm scale-[1.02]"
                            : "bg-[#FDF8F4] text-[#333333] border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#F5ECE2]"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                        <span>{service}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="pt-2">
                  <input
                    type="text"
                    placeholder="Other service not listed above? (Optional)"
                    value={customService}
                    onChange={(e) => setCustomService(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FDF8F4] border border-[#EADCC9] rounded-xl text-sm focus:outline-none focus:border-[#D4A59A] focus:ring-1 focus:ring-[#D4A59A] transition-all text-[#111111]"
                  />
                </div>
              </div>

              {/* Section 2: Questions */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b border-[#F5ECE2] pb-3">
                  <div className="w-8 h-8 rounded-full bg-[#FDF8F4] text-[#D4A59A] flex items-center justify-center font-bold text-sm border border-[#EADCC9]">
                    2
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
                    Your Visit Experience
                  </h2>
                </div>

                {/* Question 1 */}
                <div className="bg-[#FDF8F4]/70 rounded-xl p-5 border border-[#EADCC9]/80 space-y-3">
                  <label className="block text-sm sm:text-base font-semibold text-[#222222]">
                    Were you happy with your service provider?
                  </label>
                  <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <button
                      type="button"
                      onClick={() => setHappyWithProvider("yes")}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        happyWithProvider === "yes"
                          ? "bg-[#D4A59A] text-white border-[#D4A59A] shadow-md"
                          : "bg-white text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      <Smile className="w-4 h-4" /> Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setHappyWithProvider("no")}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        happyWithProvider === "no"
                          ? "bg-[#222222] text-white border-[#222222] shadow-md"
                          : "bg-white text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      <Frown className="w-4 h-4" /> No
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="bg-[#FDF8F4]/70 rounded-xl p-5 border border-[#EADCC9]/80 space-y-3">
                  <label className="block text-sm sm:text-base font-semibold text-[#222222]">
                    Were you greeted and checked in upon arrival?
                  </label>
                  <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <button
                      type="button"
                      onClick={() => setGreetedOnArrival("yes")}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        greetedOnArrival === "yes"
                          ? "bg-[#D4A59A] text-white border-[#D4A59A] shadow-md"
                          : "bg-white text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      <Smile className="w-4 h-4" /> Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setGreetedOnArrival("no")}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        greetedOnArrival === "no"
                          ? "bg-[#222222] text-white border-[#222222] shadow-md"
                          : "bg-white text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      <Frown className="w-4 h-4" /> No
                    </button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="bg-[#FDF8F4]/70 rounded-xl p-5 border border-[#EADCC9]/80 space-y-3">
                  <label className="block text-sm sm:text-base font-semibold text-[#222222]">
                    From your arrival to checking out, were we everything you expected when you made your appointment?
                  </label>
                  <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <button
                      type="button"
                      onClick={() => setMetExpectations("yes")}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        metExpectations === "yes"
                          ? "bg-[#D4A59A] text-white border-[#D4A59A] shadow-md"
                          : "bg-white text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      <Smile className="w-4 h-4" /> Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setMetExpectations("no")}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        metExpectations === "no"
                          ? "bg-[#222222] text-white border-[#222222] shadow-md"
                          : "bg-white text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      <Frown className="w-4 h-4" /> No
                    </button>
                  </div>
                </div>
              </div>

              {/* Mission Statement Box */}
              <div className="bg-gradient-to-br from-[#FDF8F4] to-[#F5ECE2] p-6 sm:p-8 rounded-2xl border border-[#EADCC9] relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-[#D4A59A] rounded-xl shadow-sm border border-[#EADCC9] shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#111111] mb-1">
                      Our Mission to Exceed Your Expectations
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      Our goal is to exceed any and all of your expectations! Please let us know if we reached our goal! Our mission is to exceed your expectations by providing salon services and products that are exceptional in quality and value. Please help us with your constructive comments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Comments & Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[#F5ECE2] pb-3">
                  <div className="w-8 h-8 rounded-full bg-[#FDF8F4] text-[#D4A59A] flex items-center justify-center font-bold text-sm border border-[#EADCC9]">
                    3
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#111111]">
                    Constructive Comments & Contact
                  </h2>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#222222] mb-2">
                    Constructive Comments or Suggestions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share details about your experience, service provider, atmosphere, or ideas for how we can improve..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FDF8F4] border border-[#EADCC9] rounded-xl text-sm focus:outline-none focus:border-[#D4A59A] focus:ring-1 focus:ring-[#D4A59A] transition-all text-[#111111] resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#222222] mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#D4A59A]" /> Your Full Name <span className="text-[#D4A59A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#FDF8F4] border border-[#EADCC9] rounded-xl text-sm focus:outline-none focus:border-[#D4A59A] focus:ring-1 focus:ring-[#D4A59A] transition-all text-[#111111]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#222222] mb-2 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-[#D4A59A]" /> Mobile Phone <span className="text-[#D4A59A]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (515) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#FDF8F4] border border-[#EADCC9] rounded-xl text-sm focus:outline-none focus:border-[#D4A59A] focus:ring-1 focus:ring-[#D4A59A] transition-all text-[#111111]"
                    />
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-[#D4A59A] text-white font-bold text-base rounded-full shadow-lg hover:bg-[#c29388] transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Your Feedback...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Feedback</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
