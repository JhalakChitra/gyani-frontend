"use client";

import { sidebarItems } from "@/config/sidebar";
import { useSidebarStore } from "@/store/sidebar-store";
import SidebarGroup from "./SidebarGroup";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

export default function Sidebar() {
  const { collapsed, toggle } = useSidebarStore();

  return (
    <aside
      className={`
      hidden lg:flex
      flex-col
      border-r
      bg-white
      dark:bg-slate-900
      transition-all
      duration-300
      ${collapsed ? "w-20" : "w-72"}
    `}
    >
      {/* Logo */}

      <div className="h-16 px-4 border-b flex items-center justify-between">
        {!collapsed && (
          <h2 className="font-bold text-xl text-[#1522AD]">
            Gyani
          </h2>
        )}

        <button onClick={toggle}>
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {sidebarItems.map((item) => (
          <SidebarGroup
            key={item.title}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
    </aside>
  );
}