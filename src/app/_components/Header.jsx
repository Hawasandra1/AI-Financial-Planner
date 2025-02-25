"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";  // Relative path
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  // ✅ Automatically redirect signed-in users to /dashboard
  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center space-x-2">
        <Image src={"/vercel.svg"} alt="logo" width={40} height={25} />
        <span className="text-green-600 font-bold text-xl">FinPlanner</span>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href={"/sign-in"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
