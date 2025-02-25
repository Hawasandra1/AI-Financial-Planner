"use client";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function DashboardHeader() {
  const { signOut } = useClerk();
  const router = useRouter();
  const { user } = useUser();

  const handleSignOut = async () => {
    await signOut();
    router.push("/"); // Redirect to home after sign-out
  };

  return (
    <div className="flex justify-between p-5 border-b shadow-sm">
    <h1 className="text-xl font-bold text-black">Hi, {user?.firstName || "there"} 👋</h1>
    
    {/* Sign Out Button */}
    <button 
      onClick={handleSignOut} 
      className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
    >
      Sign Out
    </button>
  </div>
  );
}

export default DashboardHeader;

