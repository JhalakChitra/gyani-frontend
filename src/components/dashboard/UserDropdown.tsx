"use client";

export default function UserDropdown() {
  return (
    <button className="flex items-center gap-3">
      <div
        className="
        w-10
        h-10
        rounded-full
        bg-[#1522AD]
        text-white
        flex
        items-center
        justify-center
        "
      >
        J
      </div>

      <div className="hidden md:block text-left">
        <p className="font-medium">
          Jhalak
        </p>

        <p className="text-xs text-gray-500">
          Admin
        </p>
      </div>
    </button>
  );
}