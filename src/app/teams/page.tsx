import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Artists from "@/components/landing/Artists/Artists";

export default function TeamsPage() {
  return (
    <main className="bg-[#FDF9F5] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-[90px]">
        <Artists isStandalonePage={true} />
      </div>
      <Footer />
    </main>
  );
}
