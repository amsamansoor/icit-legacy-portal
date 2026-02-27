import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number; // 1-based
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const go = (p: number) => onChange(Math.max(1, Math.min(totalPages, p)));

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => {
    // show first, last, current +-1
    return p === 1 || p === totalPages || Math.abs(p - page) <= 1;
  });

  const withDots: (number | "dots")[] = [];
  for (let i = 0; i < pages.length; i++) {
    const p = pages[i];
    const prev = pages[i - 1];
    if (i > 0 && prev !== undefined && p - prev > 1) withDots.push("dots");
    withDots.push(p);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4 select-none">
      <button
        className="px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {withDots.map((item, idx) =>
        item === "dots" ? (
          <span key={`dots-${idx}`} className="px-2 text-gray-400">…</span>
        ) : (
          <button
            key={item}
            className={`min-w-10 px-3 py-2 rounded-lg border transition
              ${item === page ? "bg-[#1E2124] text-white border-[#1E2124]" : "bg-white text-[#1E2124] border-gray-200 hover:bg-gray-50"}`}
            onClick={() => go(item)}
            aria-current={item === page ? "page" : undefined}
          >
            {item}
          </button>
        )
      )}

      <button
        className="px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
