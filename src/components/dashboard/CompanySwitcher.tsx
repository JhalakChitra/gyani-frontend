"use client";

import { ChevronDown } from "lucide-react";

export default function CompanySwitcher() {
  return (
    <button className="border rounded-lg px-4 py-2 flex items-center gap-2">
      Gyani Technologies

      <ChevronDown size={16} />
    </button>
  );
}