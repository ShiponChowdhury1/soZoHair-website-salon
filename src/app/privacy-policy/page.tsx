import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SoZo Hair, Spa & Wigs",
  description: "Privacy Policy for SoZoHair.net",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-28 md:pt-36 pb-16">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8">
        {/* Header Section */}
          <div className="text-left mb-12">
          <h1 className="text-1xl md:text-2xl text-gray-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500">
           Privacy Policy for SoZoHair.net
          </p>
           <p className="text-lg text-gray-500">
            Effective Date: 11/21/2024
          </p>
        </div>

        {/* Content Card */}
        <div className=" overflow-hidden">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="lead text-xl text-gray-700">
              Welcome to SoZo Hair, Spa &amp; Wigs website, www.SoZoHair.net (the &ldquo;Site,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we respect and prioritize your privacy. We are located at 9069 Cincinnati-Dayton Rd, West Chester, OH 45069. This Privacy Policy explains how we collect, use, and disclose your Personal Information when you visit or make a purchase from the Site.
            </p>
            <p>
              By accessing or using the Site, you agree to the practices described in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              1. Information We Collect
            </h2>
            <p>We collect various types of Personal Information from and about you, including:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">a. Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and shipping/billing addresses.</li>
              <li><strong>Payment Information:</strong> Payment details (e.g., credit card information) used to process transactions securely.</li>
              <li><strong>Account Details:</strong> Username, password, and other account-related information if you create an account.</li>
              <li><strong>Communications:</strong> Feedback, inquiries, and other communications you send to us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with the Site, including pages visited and links clicked.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">b. Information Collected Automatically</h3>
            <p>When you visit the Site, we may automatically collect certain information about your device and interaction with the Site, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Usage Data:</strong> Pages visited, links clicked, time spent on the Site, and other browsing behavior.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance your browsing experience and collect analytics.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">c. Information from Third Parties</h3>
            <p>We may receive information about you from third-party services, such as payment processors or social media platforms if you connect or interact with our accounts.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              2. How We Use Your Information
            </h2>
            <p>We use your Personal Information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To Process Transactions:</strong> To fulfill your orders, process payments, and deliver products or services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              3. Sharing Your Information
            </h2>
            <p>We may share your Personal Information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, shipping, analytics, and marketing.</li>
              <li><strong>Business Partners:</strong> Partners we collaborate with for promotions or joint offerings (with your consent).</li>
              <li><strong>Legal and Compliance:</strong> Government authorities or third parties as required by law or to protect our legal rights.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition, your Personal Information may be transferred to the successor entity.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              4. Behavioral Advertising
            </h2>
            <p>We may use your Personal Information to serve you tailored advertisements through third-party platforms such as Facebook, Google Analytics, and others. These advertisements are based on your browsing history and interactions with our Site.</p>
            <p className="font-semibold text-gray-800 mt-4 mb-2">Opt-Out Options:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Facebook:</strong> Facebook Ad Preferences</li>
              <li><strong>Google Analytics:</strong> Google Analytics Opt-Out</li>
              <li><strong>Other Platforms:</strong> You can opt out of interest-based advertising through the Network Advertising Initiative or Digital Advertising Alliance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              5. Cookies and Tracking Technologies
            </h2>
            <p>We use cookies and similar technologies to enhance your browsing experience. You can control or disable cookies through your browser settings, though this may affect Site functionality.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              6. Your Rights and Choices
            </h2>
            <p>Depending on your location, you may have the following rights regarding your Personal Information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access and Correction:</strong> Request access to or correction of the Personal Information we hold about you.</li>
              <li><strong>Data Deletion:</strong> Request the deletion of your Personal Information, subject to legal or contractual obligations.</li>
              <li><strong>Opt-Out:</strong> Opt-out of receiving promotional communications by following the unsubscribe instructions provided.</li>
              <li><strong>Do Not Track (DNT):</strong> We do not currently respond to DNT signals from browsers.</li>
            </ul>
            <p className="mt-4">To exercise your rights, please contact us using the details below.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              7. Lawful Basis for Processing
            </h2>
            <p>If you are located in the European Economic Area (EEA), we process your Personal Information based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Your Consent:</strong> For email marketing or other promotional activities.</li>
              <li><strong>Contractual Necessity:</strong> To fulfill orders and provide services.</li>
              <li><strong>Legitimate Interests:</strong> To improve our Site and protect against fraud.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              8. Data Security
            </h2>
            <p>We implement reasonable technical and organizational measures to protect your Personal Information. However, no method of transmission over the Internet is entirely secure.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              9. Retention of Information
            </h2>
            <p>We use your Personal Information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To Process Transactions:</strong> To fulfill your orders, process payments, and deliver products or services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              10. Third-Party Service Providers
            </h2>
            <p>We share your Personal Information with service providers that help us operate our business, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors.</li>
              <li>Shipping carriers.</li>
              <li>Marketing and advertising partners.</li>
            </ul>
            <p className="mt-4">These third parties are required to protect your data and use it solely for the services they provide to us. We are not responsible for their privacy practices. We encourage you to review the privacy policies of these sites.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              11. Automatic Decision-Making
            </h2>
            <p>We do not engage in fully automated decision-making processes that have a legal or significant impact on you.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              12. Text Marketing and Notifications
            </h2>
            <p>With your consent, we may send you promotional texts, order updates, or appointment reminders. You can opt out by replying &ldquo;STOP&rdquo; to any text message or contacting us at 513-874-9999.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              13. Children&rsquo;s Privacy
            </h2>
            <p>The Site is not intended for individuals under the age of 13. We do not knowingly collect Personal Information from children.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              14. Changes to This Privacy Policy
            </h2>
            <p>We may update this Privacy Policy periodically to reflect operational changes or legal requirements. Changes will be posted on this page with the updated effective date.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              15. Consumer Rights and Contacting SoZo Hair, Spa &amp; Wigs
            </h2>
            <p>If you are a resident of California or certain other jurisdictions, you may have specific rights regarding your Personal Information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Access:</strong> Request details about the information we collect and how it is used.</li>
              <li><strong>Correction:</strong> Request corrections to inaccuracies in your data.</li>
              <li><strong>Deletion:</strong> Request deletion of your Personal Information.</li>
              <li><strong>Opt-Out:</strong> Opt out of the sale of your Personal Information, if applicable.</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-2xl mt-8 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">To exercise your rights, contact us at:</p>
              <ul className="space-y-1">
                <li><strong>Phone:</strong> 513-874-9999</li>
                <li><strong>Email:</strong> <a href="mailto:info@sozohair.net" className="text-blue-600 hover:text-blue-800 transition-colors">info@sozohair.net</a></li>
                <li><strong>Address:</strong> 9069 Cincinnati-Dayton Rd, West Chester, OH 45069</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
