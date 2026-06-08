import {
  LayoutDashboard,
  BookOpen,
  ShoppingCart,
  Package,
  FileText,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },

  {
    title: "Accounting",
    icon: BookOpen,
    children: [
      {
        title: "Ledger",
        href: "/ledger",
      },
      {
        title: "Journal",
        href: "/journal",
      },
      {
        title: "Vouchers",
        href: "/vouchers",
      },
    ],
  },

  {
    title: "Sales",
    icon: ShoppingCart,
    children: [
      {
        title: "Customers",
        href: "/customers",
      },
      {
        title: "Invoices",
        href: "/invoices",
      },
    ],
  },

  {
    title: "Inventory",
    icon: Package,
    children: [
      {
        title: "Products",
        href: "/products",
      },
      {
        title: "Stock",
        href: "/stock",
      },
    ],
  },

  {
    title: "Reports",
    icon: FileText,
    href: "/reports",
  },

  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];