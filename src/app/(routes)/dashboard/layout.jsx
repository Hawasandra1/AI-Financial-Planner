"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { useUser } from "@clerk/nextjs"; // Clerk hook for user info
import { useRouter } from "next/navigation"; // Next.js router for redirection

import { db } from "../../../../utils/dbconfig";
import { Budgets } from "../../../../utils/schema";
import { eq } from "drizzle-orm";

// The Layout component, wrapped around the child pages
function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    if (result?.length === 0) {
      router.replace('/dashboard/budgets');
    }
  };

  return (
    <div className="flex bg-gray-900 text-white min-h-screen"> {/* Dark background, white text */}
      {/* Side Navigation */}
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>

      {/* Main Content Area (Dashboard Header + Child Pages) */}
      <div className="md:ml-64 w-full p-6">
        <DashboardHeader />
        {/* Render child content here */}
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
