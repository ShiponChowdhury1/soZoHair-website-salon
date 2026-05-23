"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-8">
      <div className="flex w-full max-w-5xl items-center justify-center gap-16">
        <div className="relative flex flex-1 items-center justify-center">
          <svg viewBox="0 0 520 520" className="w-full max-w-[520px]" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="60" width="40" height="8" rx="4" fill="#e5e7eb" />
            <rect x="370" y="80" width="50" height="8" rx="4" fill="#e5e7eb" />
            <rect x="390" y="100" width="30" height="8" rx="4" fill="#e5e7eb" />
            <rect x="55" y="350" width="45" height="8" rx="4" fill="#e5e7eb" />
            <rect x="350" y="360" width="60" height="8" rx="4" fill="#e5e7eb" />

            <text
              x="260"
              y="115"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="36"
              fontWeight="400"
              fill="#1f2937"
              fontStyle="italic"
            >
              Oops!
            </text>

            <g transform="translate(100, 130)">
              <circle cx="0" cy="0" r="14" fill="none" stroke="#9ca3af" strokeWidth="3" />
              <circle cx="0" cy="0" r="6" fill="none" stroke="#9ca3af" strokeWidth="3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect
                  key={angle}
                  x="-3"
                  y="-18"
                  width="6"
                  height="8"
                  rx="1"
                  fill="#9ca3af"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>

            <g transform="translate(390, 110)">
              <circle cx="0" cy="0" r="18" fill="none" stroke="#d1d5db" strokeWidth="3" />
              <circle cx="0" cy="0" r="7" fill="none" stroke="#d1d5db" strokeWidth="3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect
                  key={angle}
                  x="-3.5"
                  y="-22"
                  width="7"
                  height="9"
                  rx="1"
                  fill="#d1d5db"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>

            <g transform="translate(370, 340)">
              <circle cx="0" cy="0" r="16" fill="none" stroke="#9ca3af" strokeWidth="3" />
              <circle cx="0" cy="0" r="6" fill="none" stroke="#9ca3af" strokeWidth="3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect
                  key={angle}
                  x="-3"
                  y="-20"
                  width="6"
                  height="8"
                  rx="1"
                  fill="#9ca3af"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>

            <g transform="translate(130, 310)">
              <circle cx="0" cy="0" r="14" fill="none" stroke="#d1d5db" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="5" fill="none" stroke="#d1d5db" strokeWidth="2.5" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect
                  key={angle}
                  x="-2.5"
                  y="-18"
                  width="5"
                  height="7"
                  rx="1"
                  fill="#d1d5db"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>

            <text
              x="230"
              y="270"
              textAnchor="middle"
              fontFamily="'Arial Black', 'Arial Bold', Gadget, sans-serif"
              fontSize="160"
              fontWeight="900"
              fill="#1f2937"
            >
              404
            </text>

            <ellipse cx="242" cy="470" rx="80" ry="14" fill="#e5e7eb" />

            <rect x="195" y="400" width="30" height="55" rx="6" fill="#9333ea" />
            <rect x="185" y="445" width="48" height="22" rx="8" fill="#7e22ce" />

            <rect x="265" y="400" width="30" height="55" rx="6" fill="#9333ea" />
            <rect x="255" y="445" width="48" height="22" rx="8" fill="#7e22ce" />

            <rect x="170" y="300" width="150" height="105" rx="12" fill="#9333ea" />

            <g transform="translate(240, 352)">
              <circle cx="0" cy="0" r="22" fill="none" stroke="#7e22ce" strokeWidth="4" />
              <circle cx="0" cy="0" r="9" fill="none" stroke="#7e22ce" strokeWidth="4" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect
                  key={angle}
                  x="-4"
                  y="-27"
                  width="8"
                  height="10"
                  rx="2"
                  fill="#7e22ce"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>

            <rect x="138" y="308" width="36" height="22" rx="10" fill="#9333ea" />
            <path d="M138 319 Q120 310 115 330 Q110 348 128 350" fill="none" stroke="#9333ea" strokeWidth="10" strokeLinecap="round" />

            <rect x="316" y="308" width="36" height="22" rx="10" fill="#9333ea" />
            <path d="M352 319 Q370 310 375 330 Q380 348 362 350" fill="none" stroke="#9333ea" strokeWidth="10" strokeLinecap="round" />

            <rect x="225" y="282" width="40" height="22" rx="5" fill="#7e22ce" />

            <rect x="175" y="210" width="145" height="80" rx="14" fill="#9333ea" />

            <circle cx="218" cy="248" r="22" fill="#1f2937" />
            <circle cx="218" cy="248" r="18" fill="#111827" />
            <line x1="208" y1="238" x2="228" y2="258" stroke="#9333ea" strokeWidth="5" strokeLinecap="round" />
            <line x1="228" y1="238" x2="208" y2="258" stroke="#9333ea" strokeWidth="5" strokeLinecap="round" />

            <circle cx="275" cy="248" r="22" fill="#1f2937" />
            <circle cx="275" cy="248" r="18" fill="#111827" />
            <path d="M258 248 Q275 260 292 248" fill="none" stroke="#9333ea" strokeWidth="5" strokeLinecap="round" />

            <rect x="241" y="195" width="8" height="20" rx="3" fill="#7e22ce" />
            <circle cx="245" cy="190" r="7" fill="#7e22ce" />

            <g transform="translate(310, 220)">
              <circle cx="0" cy="0" r="13" fill="none" stroke="#7e22ce" strokeWidth="3" />
              <circle cx="0" cy="0" r="5" fill="none" stroke="#7e22ce" strokeWidth="3" />
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <rect
                  key={angle}
                  x="-2.5"
                  y="-17"
                  width="5"
                  height="7"
                  rx="1"
                  fill="#7e22ce"
                  transform={`rotate(${angle})`}
                />
              ))}
            </g>

            <g transform="translate(350, 255)">
              <rect x="-38" y="-18" width="76" height="36" rx="18" fill="white" stroke="#e5e7eb" strokeWidth="2" />
              <polygon points="-10,18 -20,30 5,18" fill="white" stroke="#e5e7eb" strokeWidth="2" />
              <polygon points="-10,18 -20,30 5,18" fill="white" />
              <text x="0" y="6" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#1f2937" letterSpacing="1">
                ERROR
              </text>
            </g>

            <rect x="85" y="390" width="38" height="32" rx="4" fill="#9333ea" />
            <rect x="80" y="385" width="48" height="10" rx="4" fill="#7e22ce" />

            <line x1="104" y1="384" x2="98" y2="355" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
            <line x1="104" y1="375" x2="112" y2="348" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
            <line x1="104" y1="380" x2="90" y2="355" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />

            <circle cx="98" cy="350" r="7" fill="#ddd6fe" />
            <circle cx="112" cy="344" r="7" fill="#ddd6fe" />
            <circle cx="90" cy="350" r="6" fill="#ddd6fe" />
            <circle cx="104" cy="348" r="4" fill="#7c3aed" />
            <circle cx="112" cy="344" r="3" fill="#7c3aed" />
          </svg>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-2">
            <span className="block text-8xl font-bold leading-none text-[#1e3a5f]">404</span>
            <span className="block text-7xl font-black leading-none tracking-tight text-[#1e3a5f]">NOT FOUND</span>
          </div>

          <p className="mt-4 mb-8 text-lg font-medium text-[#6b7280]">Couldn&apos;t find that.</p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-52 rounded-full py-4 text-base font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#c8998a" }}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}