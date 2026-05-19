"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { useCart } from "@/context/CartContext";

type PaymentMethod = "cod" | "paypal" | "credit-card";
type OrderStatus = "idle" | "processing" | "success" | "failed";

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
  const [orderStatus, setOrderStatus] = useState<OrderStatus>("idle");
  const [orderId] = useState(`#${String(Math.floor(Math.random() * 99999)).padStart(5, "0")}`);

  const shipping = 6.95;
  const subtotal = totalPrice;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setOrderStatus("processing");
    setTimeout(() => {
      // Simulate success (80% chance) or failure (20% chance)
      if (Math.random() > 0.2) {
        setOrderStatus("success");
        clearCart();
      } else {
        setOrderStatus("failed");
      }
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#FDF9F5] flex flex-col">
      <Navbar />

      <section className="flex-1 w-full pt-32 pb-24 md:py-32">
        <div className="max-w-[var(--container-max-width)] mx-auto px-5 sm:px-8 lg:px-10">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#2D2D2D]">
              Billing Information
            </h1>
          </div>

          {/* Returning Customer Banner */}
          <div className="bg-white rounded-xl p-5 flex flex-wrap items-center justify-between gap-4 mb-8 border border-gray-100">
            <span className="text-[15px] text-[#2D2D2D] font-medium">Returning Customer? Login to checkout</span>
            <Link href="/login" className="px-8 py-2.5 bg-[#D4A59A] text-white rounded-full text-[14px] font-medium hover:bg-[#C4956A] transition-colors no-underline">
              Login
            </Link>
          </div>

          {/* Coupon Code */}
          <div className="bg-white rounded-xl p-5 mb-10 border border-gray-100">
            <p className="text-[14px] text-[#666] mb-3">Have a coupon? Enter your coupon code below</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 flex-1">
                <span className="text-[14px] font-semibold text-[#2D2D2D]">Coupon Code</span>
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 h-10 px-4 rounded-lg border border-gray-200 bg-gray-50 text-[14px] outline-none focus:border-[#D4A59A] transition-colors"
                />
              </div>
              <button className="px-6 py-2.5 bg-[#D4A59A] text-white rounded-lg text-[14px] font-medium hover:bg-[#C4956A] transition-colors">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
            {/* Left - Billing Form */}
            <div>
              <h2 className="text-xl font-semibold text-[#2D2D2D] mb-6">Billing Information</h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">First name</label>
                    <input type="text" placeholder="Your first name" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Last name</label>
                    <input type="text" placeholder="Your last name" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Street Address</label>
                  <input type="email" placeholder="Email" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Country / Region</label>
                    <select className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors appearance-none">
                      <option>United States (US)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">States</label>
                    <select className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors appearance-none">
                      <option>Ohio</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">ZIP*</label>
                  <input type="text" placeholder="ZIP" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Street Address *</label>
                  <input type="text" placeholder="House number & Street name" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors mb-3" />
                  <input type="text" placeholder="Apartment, suite, unit, etc. (Optional)" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Town City *</label>
                  <input type="text" placeholder="Town city" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Email *</label>
                    <input type="email" placeholder="Email Address" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Phone *</label>
                    <input type="tel" placeholder="Phone number" className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors" />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-[14px] text-[#666] cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-200" />
                  Ship to a different address
                </label>
              </div>

              {/* Additional Info */}
              <h2 className="text-xl font-semibold text-[#2D2D2D] mt-10 mb-4">Additional Info</h2>
              <div>
                <label className="block text-[13px] font-medium text-[#2D2D2D] mb-1.5">Order Notes (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[14px] outline-none focus:border-[#D4A59A] transition-colors resize-none"
                />
              </div>
            </div>

            {/* Right - Order Summary */}
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-32">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-5">Order Summary</h3>

                {/* Items */}
                <div className="space-y-4 mb-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 relative shrink-0">
                          <Image src={item.thumbnail} alt={item.name} fill className="object-cover" sizes="48px" />
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#2D2D2D] leading-snug truncate max-w-[160px]">{item.name}</p>
                          <p className="text-[12px] text-[#999]">x{item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-[14px] font-medium text-[#2D2D2D]">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-100 pt-4 space-y-3 text-[14px]">
                  <div className="flex justify-between">
                    <span className="text-[#666]">Subtotal:</span>
                    <span className="font-medium text-[#2D2D2D]">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Shipping */}
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <p className="text-[13px] font-medium text-[#2D2D2D] mb-3">Shipping:</p>
                  <div className="space-y-2">
                    {[
                      { label: "Flat Rate: $6.95", value: "flat", checked: true },
                      { label: "Local Delivery: $2.00", value: "local" },
                      { label: "Local Pickup Shipping to OH", value: "pickup" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 text-[13px] text-[#666] cursor-pointer">
                        <input type="radio" name="shipping" defaultChecked={opt.checked} className="w-4 h-4 text-[#D4A59A] border-gray-300" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                  <button className="text-[13px] text-[#D4A59A] mt-2 hover:text-[#C4956A]">📍 Change Address</button>
                </div>

                {/* Total */}
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-semibold text-[#2D2D2D]">Total:</span>
                    <div className="text-right">
                      <span className="text-xl font-semibold text-[#2D2D2D]">${total.toFixed(2)}</span>
                      <p className="text-[12px] text-[#999]">(Including tax)</p>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <h4 className="text-[15px] font-semibold text-[#2D2D2D] mb-3">Payment Method</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Cash on Delivery", value: "cod" as PaymentMethod },
                      { label: "PayPal", value: "paypal" as PaymentMethod },
                      { label: "Credit Card", value: "credit-card" as PaymentMethod },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 text-[13px] text-[#666] cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === opt.value}
                          onChange={() => setPaymentMethod(opt.value)}
                          className="w-4 h-4 text-[#D4A59A] border-gray-300"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Place Order */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={items.length === 0}
                  className="w-full h-12 mt-6 bg-[#D4A59A] text-white font-medium rounded-full hover:bg-[#C4956A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ===== MODALS ===== */}

      {/* Processing Modal */}
      {orderStatus === "processing" && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl p-10 max-w-[400px] w-full text-center shadow-2xl">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full border-4 border-gray-200 border-t-[#D4A59A] animate-spin" />
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Payment is in progress</h3>
            <p className="text-[14px] text-[#999]">Please, wait a few moments</p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {orderStatus === "success" && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-[460px] w-full text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-2">Payment Successful</h3>
            <p className="text-[14px] text-[#D4A59A] mb-6">Your Order Successfully Placed. We Sent You An Email To Confirm The Order.</p>

            <div className="bg-gray-50 rounded-xl p-5 text-left mb-6">
              <h4 className="text-[15px] font-semibold text-[#2D2D2D] mb-4">Order Summary</h4>
              <div className="space-y-3 text-[14px]">
                <div className="flex justify-between border-t border-gray-100 pt-3">
                  <span className="text-[#666]">Order ID:</span>
                  <span className="font-medium text-[#2D2D2D]">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">Email:</span>
                  <span className="font-medium text-[#D4A59A]">example@email.com</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 h-11 rounded-full border border-gray-200 text-[#2D2D2D] font-medium text-[14px] hover:border-[#D4A59A] hover:text-[#D4A59A] transition-colors">
                Track order
              </button>
              <Link
                href="/premium-products"
                className="flex-1 h-11 rounded-full bg-[#D4A59A] text-white font-medium text-[14px] hover:bg-[#C4956A] transition-colors flex items-center justify-center no-underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Failed Modal */}
      {orderStatus === "failed" && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl p-10 max-w-[400px] w-full text-center shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center relative">
              <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a3e] mb-2">We couldn&apos;t proceed<br/>your payment</h3>
            <p className="text-[14px] text-[#999] mb-8">we couldn&apos;t proceed with your payment</p>
            <button
              onClick={() => setOrderStatus("idle")}
              className="w-full h-12 rounded-full bg-[#D4A59A] text-white font-medium hover:bg-[#C4956A] transition-colors"
            >
              Back to payment
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
