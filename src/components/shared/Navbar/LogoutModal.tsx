"use client";

import { useEffect } from "react";
import { LogOut } from "lucide-react";

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LogoutModal({ isOpen, onConfirm, onCancel }: LogoutModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 z-[500] bg-black/40 backdrop-blur-sm flex items-center justify-center"
        onClick={onCancel}
        style={{ animation: "fade-in 0.2s ease" }}
      >
        {/* Modal Card */}
        <div
          className="relative bg-white rounded-3xl shadow-2xl w-[320px] px-8 py-10 flex flex-col items-center text-center"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: "modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
        >
          {/* Icon */}
          <div className="relative mb-6">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-red-100 scale-[1.6] opacity-60" />
            <div className="relative w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
              <LogOut className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Text */}
          <h2 className="text-[22px] font-bold text-[#2D2D2D] mb-2 tracking-tight">
            Logout?
          </h2>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
            Are you sure you want to logout?
          </p>

          {/* Buttons */}
          <button
            onClick={onConfirm}
            className="w-full py-3.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200 mb-3 border-none cursor-pointer"
          >
            Yes, Logout
          </button>
          <button
            onClick={onCancel}
            className="w-full py-3.5 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-[#555] text-[15px] font-medium transition-all duration-200 hover:bg-gray-50 cursor-pointer"
          >
            No, Cancel
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.85) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}
