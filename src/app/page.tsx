import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "@/components/landing/Banner/Banner";
import ExperienceDifference from "@/components/landing/ExperienceDifference/ExperienceDifference";
import AboutSozo from "@/components/landing/AboutSozo/AboutSozo";
import OurServices from "@/components/landing/OurServices/OurServices";
import CryoSkin from "@/components/landing/CryoSkin/CryoSkin";
import PremiumHairCare from "@/components/landing/PremiumHairCare/PremiumHairCare";
import Artists from "@/components/landing/Artists/Artists";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <ExperienceDifference />
      <AboutSozo />
      <OurServices />
      <CryoSkin />
      <PremiumHairCare />
      <Artists />
      <Footer />
    </main>
  );
}
