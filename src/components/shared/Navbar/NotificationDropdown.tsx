"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, CreditCard } from "lucide-react";

type NotificationType = "order" | "general";

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "general",
    title: "New Notifications",
    description: "Description of the the Notifications goes here",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "general",
    title: "New Notifications",
    description: "Description of the the Notifications goes here",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "general",
    title: "New Notifications",
    description: "Description of the the Notifications goes here",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 4,
    type: "general",
    title: "New Notifications",
    description: "Description of the the Notifications goes here",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 5,
    type: "general",
    title: "New Notifications",
    description: "Description of the the Notifications goes here",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 6,
    type: "order",
    title: "SoZo Clarify Shampoo purchased $8.69",
    description: "Your order has been successfully placed.",
    time: "5 minutes ago",
    read: false,
  },
];

type Tab = "all" | "unread" | "read";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("all");
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filtered =
    tab === "all"
      ? notifications
      : tab === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications.filter((n) => n.read);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Bell Button */}
      <button
        aria-label="Notifications"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative text-[#2D2D2D] hover:text-[#D4A59A] transition-colors bg-transparent border-none cursor-pointer p-0 flex items-center justify-center"
      >
        <Bell className="w-5 h-5 md:w-6 md:h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#D4A59A] text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Modal */}
      {isOpen && (
        <div
          className="absolute right-0 top-[calc(100%+16px)] w-[480px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100/80 overflow-hidden z-[200] flex flex-col p-6 gap-6"
          style={{ animation: "notif-drop 0.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-[24px] font-bold text-[#2D3748] tracking-tight">
              Recent Notifications
            </h3>
            
            {/* Tab pill capsule */}
            <div className="bg-[#F3F4F6] p-1 rounded-xl flex items-center gap-1">
              {(["all", "unread", "read"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 cursor-pointer border-none ${
                    tab === t
                      ? "bg-white text-[#2D3748] shadow-sm font-semibold"
                      : "bg-transparent text-[#718096] hover:text-[#2D3748]"
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Notification List */}
          <div className="flex flex-col gap-4 max-h-[420px] overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <Bell className="w-12 h-12 text-gray-200" />
                <p className="text-[14px] text-gray-400">No notifications here</p>
              </div>
            ) : (
              filtered.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => markRead(notif.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 cursor-pointer border-none ${
                    notif.type === "order"
                      ? "bg-[#F3FAF4] hover:bg-[#E7F6E9]"
                      : "bg-[#F7FAFC] hover:bg-[#EDF2F7]"
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                      notif.type === "order"
                        ? "bg-[#E6F4EA] text-[#137333]"
                        : "bg-[#E8F0FE] text-[#1A73E8]"
                    }`}
                  >
                    {notif.type === "order" ? (
                      <CreditCard className="w-6 h-6" />
                    ) : (
                      <Bell className="w-6 h-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[16px] font-bold text-[#2D3748] leading-tight">
                        {notif.title}
                      </p>
                      <span className="text-[13px] text-[#A0AEC0] whitespace-nowrap flex-shrink-0">
                        {notif.time}
                      </span>
                    </div>
                    <p className="text-[14px] text-[#718096] mt-1 leading-snug">
                      {notif.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes notif-drop {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
