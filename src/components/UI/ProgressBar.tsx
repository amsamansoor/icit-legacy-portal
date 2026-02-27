import React from "react";

type Props = {
  value: number; // 0 - 100
  label?: string;
  sublabel?: string;
};

const clamp = (n: number) => Math.max(0, Math.min(100, n));

const ProgressBar: React.FC<Props> = ({ value, label, sublabel }) => {
  const v = clamp(value);
  return (
    <div className="w-full">
      {(label || sublabel) && (
        <div className="flex items-baseline justify-between mb-2">
          <div className="text-sm font-semibold text-[#1E2124]">{label}</div>
          <div className="text-xs text-gray-500">{sublabel}</div>
        </div>
      )}

      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FF6B35] rounded-full transition-all duration-500"
          style={{ width: `${v}%` }}
          aria-label={label ?? "progress"}
          aria-valuenow={v}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
