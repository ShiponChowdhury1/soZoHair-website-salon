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
  Mail, 
  Award, 
  ShieldCheck,
  Calendar,
  ArrowRight,
  Check
} from "lucide-react";

const medicalSpaOptions = [
  "Wrinkle relaxer (botulinum toxins)",
  "Filler for lips, cheeks, marionette, jaw, chin",
  "Microneedling with FDA approved SkinPen",
  "VI- Peel (medical grade chemical peel)",
  "Body sculpting (specified date for appointments)",
  "Lipo B12 injections",
];

export default function MedicalSpaServicesPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interestedServices, setInterestedServices] = useState<string[]>([]);
  const [currentServices, setCurrentServices] = useState<string[]>([]);
  const [wantMoreInfo, setWantMoreInfo] = useState<"yes" | "no" | null>("yes");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleInterest = (service: string) => {
    if (interestedServices.includes(service)) {
      setInterestedServices(interestedServices.filter((s) => s !== service));
    } else {
      setInterestedServices([...interestedServices, service]);
    }
  };

  const toggleCurrent = (service: string) => {
    if (currentServices.includes(service)) {
      setCurrentServices(currentServices.filter((s) => s !== service));
    } else {
      setCurrentServices([...currentServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      setErrorMsg("Please enter your email address.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <TopHeader />
      <Navbar />

      <main className="min-h-screen bg-[#FDF8F4] text-[#111111] pt-16 sm:pt-24 pb-24">
        {/* ── HERO HEADER ── */}
        <section className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10 animate-in fade-in duration-500">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111111] tracking-tight mb-4 leading-tight">
              Medical Spa Services
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed">
              Combining a relaxing boutique spa environment with medically supervised aesthetic treatments for extraordinary rejuvenation and beauty.
            </p>
          </div>

          {/* Hero Banner Grid — Matched to Navbar Container, No Shadows, Clean Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-3xl p-6 sm:p-10 border border-[#EADCC9] bg-[#FDF8F4]">
            <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/medical-spa/medical-Spa-Services.jpg"
                alt="Medical Spa Microneedling & SkinPen Treatment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#D4A59A] font-bold text-sm tracking-wider uppercase">
                <ShieldCheck className="w-5 h-5" /> Advanced Aesthetics
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] leading-snug">
                Medically Supervised Beauty & Rejuvenation
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                Our Medical Spa services combine cutting-edge clinical aesthetic procedures with the relaxing comfort of our boutique salon and spa. All treatments are performed by certified medical professionals adhering to the highest standards of care.
              </p>
              
              <div className="bg-[#FDF8F4] p-5 rounded-2xl border border-[#EADCC9] flex items-start gap-3">
                <Award className="w-6 h-6 text-[#D4A59A] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed">
                  We are continually expanding our service menu to bring you the latest in non-invasive skin tightening, body contouring, and aesthetic rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR MEDICAL SPA SERVICES LIST ── */}
        <section className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">
              Our Medical Spa Offerings
            </h2>
            <p className="text-sm text-[#666666] mt-2">Explore our list of med spa treatments designed to renew and rejuvenate</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wrinkle Relaxers & Fillers",
                desc: "Botulinum toxins (Botox/Dysport) and premium dermal fillers for lips, cheeks, marionette lines, jaw, and chin contouring.",
                badge: "Injectables",
                link: "#survey"
              },
              {
                title: "FDA Cleared SkinPen Microneedling",
                desc: "Precision microneedling using the FDA-cleared SkinPen to stimulate natural collagen, refine texture, and diminish scars.",
                badge: "Collagen Induction",
                link: "#survey"
              },
              {
                title: "VI-Peel Medical Grade Chemical Peel",
                desc: "Pharmaceutical-grade chemical peel targeting hyperpigmentation, sun damage, acne scarring, and fine lines.",
                badge: "Chemical Peel",
                link: "#survey"
              },
              {
                title: "Pure Plasma Skin Tightening",
                desc: "FDA-cleared nitrogen plasma technology delivering non-surgical skin tightening and cellular renewal.",
                badge: "Plasma Therapy",
                link: "/services/pure-plasma"
              },
              {
                title: "CryoSkin Fat Loss & Body Contouring",
                desc: "European cold-temperature cryoslimming technology to permanently target fat cells and tone skin non-invasively.",
                badge: "Body Sculpting",
                link: "/services/cryoskin"
              },
              {
                title: "Lipo B12 Wellness Injections",
                desc: "Enhance metabolism, boost energy levels, and support overall wellness with targeted lipotropic vitamin therapy.",
                badge: "Vitamin Therapy",
                link: "#survey"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-[#FDF8F4] p-6 rounded-2xl border border-[#EADCC9] transition-all hover:border-[#D4A59A] hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A59A] bg-[#F5ECE2] px-3 py-1 rounded-full border border-[#EADCC9]">
                      {service.badge}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#D4A59A] opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D4A59A] hover:text-[#c29388] transition-colors no-underline pt-2 border-t border-[#F5ECE2]"
                >
                  <span>Learn More &amp; Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── SURVEY FORM SECTION ── */}
        <section id="survey" className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8">
          <div className="bg-[#FDF8F4] rounded-3xl p-6 sm:p-12 border border-[#EADCC9]">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="w-16 h-16 bg-[#FDF8F4] text-[#D4A59A] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#EADCC9]">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111111]">
                Please Take Our Short Survey
              </h2>
              <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                Help us tailor our upcoming medical spa schedule and services to your exact needs.
              </p>
            </div>

            {isSubmitted ? (
              /* Success Screen */
              <div className="text-center py-10 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-[#FDF8F4] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#D4A59A]">
                  <CheckCircle2 className="w-10 h-10 text-[#D4A59A]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] mb-3">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-[#666666] text-base mb-8 max-w-md mx-auto leading-relaxed">
                  Your interest helps us build the perfect medical spa schedule. We will reach out with exclusive early access info as soon as services launch in August!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/"
                    className="px-8 py-3.5 bg-[#D4A59A] text-white font-semibold rounded-full border border-[#D4A59A] hover:bg-[#c29388] transition-all no-underline inline-flex items-center gap-2"
                  >
                    Back to Home <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setInterestedServices([]);
                      setCurrentServices([]);
                      setWantMoreInfo("yes");
                    }}
                    className="px-8 py-3.5 bg-[#FDF8F4] text-[#111111] border border-[#EADCC9] font-semibold rounded-full hover:bg-[#F5ECE2] transition-all cursor-pointer"
                  >
                    Submit Another Survey
                  </button>
                </div>
              </div>
            ) : (
              /* Survey Form */
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* 1. Personal Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#F5ECE2] pb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FDF8F4] text-[#D4A59A] flex items-center justify-center font-bold text-sm border border-[#EADCC9]">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-[#111111]">
                      Your Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#222222] mb-2 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-[#D4A59A]" /> Name <span className="text-[#D4A59A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 bg-[#FDF8F4] border border-[#EADCC9] rounded-xl text-sm focus:outline-none focus:border-[#D4A59A] transition-all text-[#111111]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#222222] mb-2 flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-[#D4A59A]" /> Email Address <span className="text-[#D4A59A]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 bg-[#FDF8F4] border border-[#EADCC9] rounded-xl text-sm focus:outline-none focus:border-[#D4A59A] transition-all text-[#111111]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Services Interest */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#F5ECE2] pb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FDF8F4] text-[#D4A59A] flex items-center justify-center font-bold text-sm border border-[#EADCC9]">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-[#111111]">
                      Please select all services you have interest in:
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {medicalSpaOptions.map((opt) => {
                      const isSelected = interestedServices.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleInterest(opt)}
                          className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border flex items-center gap-3 cursor-pointer ${
                            isSelected
                              ? "bg-[#D4A59A] text-white border-[#D4A59A]"
                              : "bg-[#FDF8F4] text-[#333333] border-[#EADCC9] hover:border-[#D4A59A]"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${isSelected ? "bg-white text-[#D4A59A] border-white" : "border-[#CCCCCC]"}`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Current Investment */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#F5ECE2] pb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FDF8F4] text-[#D4A59A] flex items-center justify-center font-bold text-sm border border-[#EADCC9]">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-[#111111]">
                      Do you currently invest in any of these medical services? If so, please check all that apply:
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {medicalSpaOptions.map((opt) => {
                      const isSelected = currentServices.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleCurrent(opt)}
                          className={`p-3.5 rounded-xl text-left text-sm font-medium transition-all border flex items-center gap-3 cursor-pointer ${
                            isSelected
                              ? "bg-[#222222] text-white border-[#222222]"
                              : "bg-[#FDF8F4] text-[#333333] border-[#EADCC9] hover:border-[#222222]"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${isSelected ? "bg-white text-[#222222] border-white" : "border-[#CCCCCC]"}`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. More Info Radio */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-[#F5ECE2] pb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FDF8F4] text-[#D4A59A] flex items-center justify-center font-bold text-sm border border-[#EADCC9]">
                      4
                    </div>
                    <h3 className="text-lg font-bold text-[#111111]">
                      Would you like more info when available?
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <button
                      type="button"
                      onClick={() => setWantMoreInfo("yes")}
                      className={`py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        wantMoreInfo === "yes"
                          ? "bg-[#D4A59A] text-white border-[#D4A59A]"
                          : "bg-[#FDF8F4] text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" /> Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setWantMoreInfo("no")}
                      className={`py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        wantMoreInfo === "no"
                          ? "bg-[#222222] text-white border-[#222222]"
                          : "bg-[#FDF8F4] text-[#333333] border-[#EADCC9] hover:bg-[#F5ECE2]"
                      }`}
                    >
                      No
                    </button>
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
                    className="w-full sm:w-auto px-10 py-4 bg-[#D4A59A] text-white font-bold text-base rounded-full border border-[#D4A59A] hover:bg-[#c29388] transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Survey...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Survey</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
