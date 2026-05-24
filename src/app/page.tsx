import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "@/components/landing/Banner/Banner";
import ExperienceDifference from "@/components/landing/ExperienceDifference/ExperienceDifference";
import AboutSozo from "@/components/landing/AboutSozo/AboutSozo";
import OurServices from "@/components/landing/OurServices/OurServices";
import CryoSkin from "@/components/landing/CryoSkin/CryoSkin";
import PurePlasma from "@/components/landing/PurePlasma/PurePlasma";
import PremiumHairCare from "@/components/landing/PremiumHairCare/PremiumHairCare";
import WigsSection from "@/components/landing/WigsSection/WigsSection";
import Artists from "@/components/landing/Artists/Artists";
import ClientLove from "@/components/landing/ClientLove/ClientLove";
import Map from "@/components/landing/Map/Map";
import Contact from "@/components/landing/Contact/Contact";
import Footer from "@/components/shared/Footer/Footer";
import SpecialsPopup from "@/components/landing/SpecialsPopup/SpecialsPopup";
import ReviewsCounter from "@/components/landing/ReviewsCounter/ReviewsCounter";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
       <ReviewsCounter />
      {/* Experience The Difference & About SoZo shared container */}
      <section className="w-full bg-[#FDF9F5] py-24 md:py-32">
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col gap-24 md:gap-32">
          <ExperienceDifference />
          <AboutSozo />
        </div>
      </section>
      <OurServices />
      <CryoSkin />
      <PurePlasma />
      <PremiumHairCare />
      <WigsSection />
      <Artists />
      <ClientLove />
      <Map />
      <Contact />
      <Footer />
      <SpecialsPopup />
    </main>
  );
}
