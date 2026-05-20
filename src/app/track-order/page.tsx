"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

type OrderStatus = "Processing" | "Shipped" | "Out for Delivery" | "Delivered";

interface OrderResult {
  orderId: string;
  email: string;
  products: {
    name: string;
    quantity: number;
    price: number;
  }[];
  orderStatus: OrderStatus;
  deliveryDate: string;
  trackingNumber: string;
  paymentStatus: string;
  orderDate: string;
}

const statusSteps: OrderStatus[] = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

// Mock data for demo
const mockOrders: Record<string, OrderResult> = {
  "#67022": {
    orderId: "#67022",
    email: "example@email.com",
    products: [
      { name: "SoZo Clarify Shampoo", quantity: 5, price: 8.90 },
      { name: "Hair Extensions Product Suite", quantity: 1, price: 128.43 },
    ],
    orderStatus: "Shipped",
    deliveryDate: "May 25, 2026",
    trackingNumber: "SOZO-TRK-78234912",
    paymentStatus: "Paid",
    orderDate: "May 19, 2026",
  },
  "#01001": {
    orderId: "#01001",
    email: "example@email.com",
    products: [
      { name: "Argan Oil Restorative Mask", quantity: 2, price: 30.24 },
    ],
    orderStatus: "Processing",
    deliveryDate: "May 28, 2026",
    trackingNumber: "SOZO-TRK-91023847",
    paymentStatus: "Paid",
    orderDate: "May 20, 2026",
  },
};

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<OrderResult | null>(null);
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!orderId.trim() || !email.trim()) {
      setError("Please enter both Order ID and Email.");
      return;
    }

    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const formattedId = orderId.startsWith("#") ? orderId : `#${orderId}`;
      const found = mockOrders[formattedId];

      if (found && found.email.toLowerCase() === email.toLowerCase()) {
        setResult(found);
      } else {
        setError("No order found. Please check your Order ID and Email.");
      }
      setIsSearching(false);
    }, 1200);
  };

  const currentStepIndex = result ? statusSteps.indexOf(result.orderStatus) : -1;

  return (
    <main className="min-h-screen bg-[#FDF9F5] flex flex-col">
      <Navbar />

      <section className="flex-1 w-full pt-32 pb-24 md:py-32">
        <div className="max-w-[700px] mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#D4A59A]/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A59A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#2D2D2D] mb-3">
              Track Your Order
            </h1>
            <p className="text-[14px] text-[#999] max-w-[460px] mx-auto">
              Enter your Order ID and the email address used during checkout to see your order status.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 mb-8">
            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Order ID</label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="#67022"
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors"
                />
              </div>

              {error && (
                <p className="text-[13px] text-red-500 bg-red-50 px-4 py-2.5 rounded-lg">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSearching}
                className="w-full h-12 bg-[#D4A59A] text-white font-medium rounded-full hover:bg-[#C4956A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Tracking...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Track Order
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result */}
          {result && (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Order Status Header */}
              <div className="p-6 sm:p-8 border-b border-gray-50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[12px] text-[#999] mb-1">Order ID</p>
                    <p className="text-lg font-semibold text-[#2D2D2D]">{result.orderId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-[#999] mb-1">Order Date</p>
                    <p className="text-[14px] font-medium text-[#2D2D2D]">{result.orderDate}</p>
                  </div>
                </div>

                {/* Status Timeline */}
                <div className="relative">
                  <div className="flex justify-between relative">
                    {/* Line */}
                    <div className="absolute top-[14px] left-[7%] right-[7%] h-[2px] bg-gray-100">
                      <div
                        className="h-full bg-[#D4A59A] transition-all duration-700"
                        style={{ width: `${(currentStepIndex / (statusSteps.length - 1)) * 100}%` }}
                      />
                    </div>

                    {statusSteps.map((step, i) => (
                      <div key={step} className="flex flex-col items-center z-10 relative">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${
                            i <= currentStepIndex
                              ? "bg-[#D4A59A] text-white"
                              : "bg-gray-100 text-[#999]"
                          }`}
                        >
                          {i <= currentStepIndex ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span className={`text-[11px] mt-2 text-center whitespace-nowrap ${
                          i <= currentStepIndex ? "text-[#2D2D2D] font-medium" : "text-[#999]"
                        }`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="p-6 sm:p-8 border-b border-gray-50">
                <h3 className="text-[14px] font-semibold text-[#2D2D2D] mb-4 uppercase tracking-[1px]">Products</h3>
                <div className="space-y-3">
                  {result.products.map((p, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-[14px] font-medium text-[#2D2D2D]">{p.name}</p>
                        <p className="text-[12px] text-[#999]">Qty: {p.quantity}</p>
                      </div>
                      <span className="text-[14px] font-semibold text-[#2D2D2D]">${(p.price * p.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Grid */}
              <div className="p-6 sm:p-8">
                <h3 className="text-[14px] font-semibold text-[#2D2D2D] mb-4 uppercase tracking-[1px]">Order Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Order Status",
                      value: result.orderStatus,
                      color:
                        result.orderStatus === "Delivered" ? "text-green-600 bg-green-50" :
                        result.orderStatus === "Shipped" ? "text-blue-600 bg-blue-50" :
                        result.orderStatus === "Out for Delivery" ? "text-orange-600 bg-orange-50" :
                        "text-yellow-600 bg-yellow-50",
                    },
                    {
                      label: "Delivery Date",
                      value: result.deliveryDate,
                      color: "text-[#2D2D2D] bg-gray-50",
                    },
                    {
                      label: "Tracking Number",
                      value: result.trackingNumber,
                      color: "text-[#2D2D2D] bg-gray-50",
                    },
                    {
                      label: "Payment Status",
                      value: result.paymentStatus,
                      color: result.paymentStatus === "Paid" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50",
                    },
                  ].map((detail) => (
                    <div key={detail.label} className="rounded-xl bg-gray-50/50 p-4">
                      <p className="text-[12px] text-[#999] mb-1.5">{detail.label}</p>
                      <span className={`inline-block text-[13px] font-semibold px-3 py-1 rounded-full ${detail.color}`}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
