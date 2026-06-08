"use client";

import CompanySwitcher from "./CompanySwitcher";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";
import NotificationBell from "./NotificationBell";
import MobileSidebar from "./MobileSidebar";

export default function Topbar() {
  return (
    <header className="h-16 border-b bg-white dark:bg-slate-900 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
          <MobileSidebar />

        <button
          className="
          bg-[#1522AD]
          hover:bg-[#101A85]
          text-white
          px-4
          py-2
          rounded-lg
          "
        >
          + Create Company
        </button>

        <CompanySwitcher />
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="
          hidden md:block
          border rounded-lg px-4 py-2
          "
        />

        <NotificationBell />

        <ThemeToggle />

        <UserDropdown />
      </div>
    </header>
  );
}