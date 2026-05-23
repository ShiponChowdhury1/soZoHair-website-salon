import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Return, Refund & Cancellation Policies | SoZo Hair, Spa & Wigs",
  description: "Return, Refund and cancellation policies for SoZoHair.net",
};

export default function ReturnRefundPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-28 md:pt-36 pb-16">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8">
            <div className="text-left mb-12">
          <h1 className="text-1xl md:text-2xl text-gray-900 mb-4 tracking-tight">
         Return, Refund and cancellation policies
          </h1>
          <p className="text-lg text-gray-500">
         SoZo HAIR SPA & WIGS:  Return, Refund and Cancellation Policies
          </p>
          
        </div>

        {/* Content Card */}
        <div className=" overflow-hidden">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">

            <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4 pb-2 border-b border-gray-200">
              Retail Products
            </h2>
            <p>
              Products that are &ldquo;gently used&rdquo; may be exchanged for a product of equal or lesser value provided the product is returned within <strong>15 days</strong>. If product exchange is not acceptable, then the money associated with the retail product sale will be a) refunded, or b) deposited as a credit into your Salon Client Account. <strong>All sales are final for wigs, toppers, hairpieces, etc. by law for sanitary reasons!</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              Services
            </h2>
            <p>
              Dissatisfaction in service results must be expressed within 7 days of the service and the client MUST return to the salon for the work/results to be evaluated and inspected to determine if the dissatisfaction is warranted. If a client is unwilling to return to SoZo HAIR SPA &amp; WIGS for review/evaluation, then the complaint is considered meritless and nothing else will be done. SoZo HAIR SPA &amp; WIGS reserves the right to enlist the services of employees other than the initial service provider to fix, correct, and otherwise work with the client to achieve a satisfactory service resolution. If a satisfactory service resolution cannot be achieved, then the money associated with the service sale will be deposited as a credit into your Salon Client Account. No refund of money is given.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              Gift Certificates / Gift Packages
            </h2>
            <p>
              No refund of money is given for the purchase of Gift Certificates, Gift Packages and Bridal Packages. Money left on Gift Certificates, Gift Packages and Bridal Packages for an extended period of time may be used in the salon for services and products at current salon list prices, i.e. Massage Gift Certificate purchased in 2023 for $75 may be redeemed in 2023 for a massage, but only for the original unused balance, the difference in the cost for a future massage must be paid by cash or credit card.
            </p>
            <p>
              Clients scheduling multiple-services in the salon must give a credit card number or Gift Certificate number at the time of booking. A 48-hour cancellation notice must be provided to SoZo HAIR by Bajon Salon &amp; Spa in order to avoid your credit card or gift certificate from being charged for the scheduled services.
            </p>
            <p>
              No shows will be charged the full amount of the missed services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              Cancellation Policy for Parties of 3 or More
            </h2>
            <p>
              Parties of three or more clients, having scheduled multiple-services in the salon require a credit card number at the time of booking. Cancellation of any services associated with the party requires a 7 day cancellation notice in order to avoid your credit card from being charged for the scheduled services. No shows will be charged the full amount of the missed service(s).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              Short-Notice Cancellation &amp; No Show Policy
            </h2>
            <p>
              A 24-hour cancellation notice must be provided to SoZo HAIR SPA &amp; WIGS in order to avoid your credit card or gift certificate from being charged for the scheduled services. No shows will be charged the full amount of the missed services. If a client has two Short-Notice Cancellations (cancelling an appointment within a couple hours of the appointment) or two &lsquo;No Shows&rsquo; (not showing up for your appointment) in a twelve (12) month period, then we ask that you provide us with a credit card to add to your secure Client Profile prior to booking future appointments. If additional Short-Notice Cancellations and/or No Shows occur, then a charge for the missed services will be charged to the credit card on file.
            </p>

          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
