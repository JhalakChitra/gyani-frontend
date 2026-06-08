import { Bell } from "lucide-react";

export default function NotificationBell() {
  return (
    <button className="relative">
      <Bell size={20} />

      <span
        className="
        absolute
        -top-1
        -right-1
        w-2
        h-2
        bg-red-500
        rounded-full
        "
      />
    </button>
  );
}