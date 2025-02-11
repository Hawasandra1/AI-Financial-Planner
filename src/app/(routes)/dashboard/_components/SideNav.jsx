import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div
      className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white 
        shadow-lg hover:shadow-2xl transform transition-all 
        ease-in-out duration-300 z-50 p-5 rounded-lg"
    >
      {/* Logo */}
      <div className="flex flex-row items-center">
        <span className="text-emerald-400 font-bold text-xl">FinPlanner</span>
      </div>

      <div className="mt-5">
        {/* Navigation Links with Floating Effect */}
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center text-white font-medium mb-4 p-4 cursor-pointer rounded-lg
                hover:bg-blue-300 hover:text-primary
                transform transition-all ease-in-out duration-300
                ${path === menu.path && "text-primary bg-blue-300"}
                hover:scale-105 hover:shadow-lg`} // Floating effect on hover
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* User Button at the bottom */}
      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
      </div>
    </div>
  );
}

export default SideNav;
