import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Booking - SoZo Hair, Spa & Wigs",
  description: "Book an appointment at SoZo Hair, Spa & Wigs.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
