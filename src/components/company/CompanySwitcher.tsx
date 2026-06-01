"use client";

import { ChevronDown } from "lucide-react";

export default function CompanySwitcher() {
  return (
    <button
      className="
      w-full
      border
      rounded-xl
      p-4
      flex
      justify-between
      items-center
      "
    >
      <div className="text-left">
        <p className="font-semibold">
          Gyani Technologies
        </p>

        <p className="text-xs text-gray-500">
          Active Company
        </p>
      </div>

      <ChevronDown size={18} />
    </button>
  );
}