"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, ShoppingCart, Tag, Star } from "lucide-react";

type NotificationType = "order" | "promo" | "review" | "general";

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
    type: "order",
    title: "SoZo Clarify Shampoo purchased $8.69",
    description: "Your order has been successfully placed.",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "promo",
    title: "New Notification",
    description: "20% off on all hair extensions this weekend only!",
    time: "30 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "general",
    title: "New Notification",
    description: "Your appointment at SoZo Hair has been confirmed.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 4,
    type: "general",
    title: "New Notification",
    description: "Description of the notification goes here",
    time: "2 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "review",
    title: "New Notification",
    description: "Someone replied to your review on CryoSkin treatment.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 6,
    type: "promo",
    title: "New Notification",
    description: "Check out our new Pure Plasma treatment — book now!",
    time: "2 days ago",
    read: true,
  },
];

const notifIcon = (type: NotificationType) => {
  const base = "w-5 h-5";
  switch (type) {
    case "order":
      return <ShoppingCart className={`${base} text-emerald-500`} />;
    case "promo":
      return <Tag className={`${base} text-violet-500`} />;
    case "review":
      return <Star className={`${base} text-amber-500`} />;
    default:
      return <Bell className={`${base} text-[#D4A59A]`} />;
  }
};

const notifBg = (type: NotificationType) => {
  switch (type) {
    case "order":
      return "bg-emerald-50";
    case "promo":
      return "bg-violet-50";
    case "review":
      return "bg-amber-50";
    default:
      return "bg-[#FBF4F2]";
  }
};

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

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div ref={dropdownRef} className="relative flex items-center">
      {/* Bell Button */}
      <button
        aria-label="Notifications"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative text-[#2D2D2D] hover:text-[#D4A59A] transition-colors bg-transparent border-none cursor-pointer p-0"
      >
        <Bell className="w-5 h-5 md:w-6 md:h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#D4A59A] text-white text-[10px] font-bold flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Modal */}
      {isOpen && (
        <div
          className="absolute right-0 top-[calc(100%+16px)] w-[380px] max-h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[200] flex flex-col"
          style={{ animation: "notif-drop 0.2s ease" }}
        >
          {/* Arrow */}
          <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

          {/* Header */}
          <div className="px-5 pt-5 pb-3 flex items-center justify-between">
            <h3 className="text-[18px] font-semibold text-[#2D2D2D] tracking-tight">
              Recent Notifications
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-xs text-[#D4A59A] hover:text-[#c4958a] font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                Mark all read
              </button>
            )}
          </div>

          {/* Tabs */}
          <div className="px-5 pb-3 flex items-center gap-2">
            {(["all", "unread", "read"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3.5 py-1 rounded-full text-[13px] font-medium transition-all duration-200 border cursor-pointer ${
                  tab === t
                    ? "bg-[#2D2D2D] text-white border-[#2D2D2D]"
                    : "bg-white text-[#666] border-gray-200 hover:border-[#D4A59A] hover:text-[#D4A59A]"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mx-5" />

          {/* Notification List */}
          <div className="overflow-y-auto flex-1 py-2">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <Bell className="w-10 h-10 text-gray-200" />
                <p className="text-[14px] text-gray-400">No notifications here</p>
              </div>
            ) : (
              filtered.map((notif) => (
                <button
                  key={notif.id}
                  onClick={() => markRead(notif.id)}
                  className={`w-full text-left flex items-start gap-3 px-5 py-3.5 transition-colors cursor-pointer border-none bg-transparent hover:bg-gray-50 group ${
                    !notif.read ? "bg-[#FDF8F6]" : "bg-white"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${notifBg(
                      notif.type
                    )}`}
                  >
                    {notifIcon(notif.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={`text-[14px] leading-snug ${
                          !notif.read
                            ? "font-semibold text-[#2D2D2D]"
                            : "font-medium text-[#555]"
                        }`}
                      >
                        {notif.title}
                      </p>
                      <span className="text-[11px] text-gray-400 whitespace-nowrap flex-shrink-0 mt-0.5">
                        {notif.time}
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-500 mt-0.5 leading-snug line-clamp-2">
                      {notif.description}
                    </p>
                  </div>

                  {/* Unread dot */}
                  {!notif.read && (
                    <span className="w-2 h-2 rounded-full bg-[#D4A59A] flex-shrink-0 mt-1.5" />
                  )}
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-5 py-3">
            <button className="w-full text-center text-[13px] text-[#D4A59A] hover:text-[#c4958a] font-medium transition-colors bg-transparent border-none cursor-pointer">
              View all notifications
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes notif-drop {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.97);
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
