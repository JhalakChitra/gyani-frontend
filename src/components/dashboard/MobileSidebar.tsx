"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import SidebarGroup from "./SidebarGroup";
import { sidebarItems } from "@/config/sidebar";

export default function MobileSidebar() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        className="lg:hidden"
        onClick={() =>
          setOpen(true)
        }
      >
        <Menu size={24} />
      </button>

      {open && (
        <>
          <div
            className="
            fixed
            inset-0
            bg-black/50
            z-40
            "
            onClick={() =>
              setOpen(false)
            }
          />

          <aside
            className="
            fixed
            left-0
            top-0
            h-full
            w-72
            bg-white
            dark:bg-slate-900
            z-50
            "
          >
            <div className="h-16 px-4 border-b flex items-center justify-between">
              <h2 className="font-bold text-xl text-[#1522AD]">
                Gyani
              </h2>

              <button
                onClick={() =>
                  setOpen(false)
                }
              >
                <X />
              </button>
            </div>

            <div className="p-3">
              {sidebarItems.map(
                (item) => (
                  <SidebarGroup
                    key={item.title}
                    item={item}
                    collapsed={false}
                  />
                )
              )}
            </div>
          </aside>
        </>
      )}
    </>
  );
}