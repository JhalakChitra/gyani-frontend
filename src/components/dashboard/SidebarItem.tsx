"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: any;
  collapsed: boolean;
}

export default function SidebarItem({
  item,
  collapsed,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`
      flex
      items-center
      gap-3
      px-3
      py-3
      rounded-xl
      mb-1
      transition
      ${
        active
          ? "bg-[#1522AD] text-white"
          : "hover:bg-slate-100 dark:hover:bg-slate-800"
      }
    `}
    >
      <item.icon size={20} />

      {!collapsed && (
        <span>{item.title}</span>
      )}
    </Link>
  );
}