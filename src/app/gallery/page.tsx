import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import EliteGalleryClient from "@/components/gallery/EliteGalleryClient";

export const metadata: Metadata = {
  title: "Before & After Gallery | SoZo Hair, Spa & Wigs",
  description:
    "Explore real client transformations at SoZo Hair, Spa & Wigs in West Chester, OH. Interactive before-and-after gallery showcasing cuts, colors, and styles.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <EliteGalleryClient />
      <Footer />
    </>
  );
}
