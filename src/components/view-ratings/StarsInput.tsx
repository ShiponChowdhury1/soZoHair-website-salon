"use client";

import { useState } from "react";

export default function StarsInput({ initial = 4 }: { initial?: number }) {
  const [rating, setRating] = useState<number>(initial);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`${n} stars`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(n)}
            className={`text-2xl leading-none ${n <= (hover || rating) ? "text-[#FF8A00]" : "text-[#E6E1DD]"}`}
          >
            ★
          </button>
        ))}
      </div>
      <div className="text-sm text-[#5A4A42]">{rating} / 5</div>
    </div>
  );
}
