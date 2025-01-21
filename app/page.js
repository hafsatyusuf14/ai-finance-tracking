"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useUser } from "@clerk/nextjs"; // Import Clerk's useUser hook
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useUser(); // Get the signed-in status
  const router = useRouter();

  // Use useEffect to redirect after the component mounts
  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard"); // Redirect to the dashboard page if signed in
    }
  }, [isSignedIn, router]); // Re-run when isSignedIn changes

  return (
    <div>
      <Header />
      {!isSignedIn && <Hero />}{" "}
      {/* Render Hero only if user is not signed in */}
    </div>
  );
}
