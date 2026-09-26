"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // ২ সেকেন্ড পর অটোমেটিক হোম পেজে নিয়ে যাবে
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0c0e] text-white text-center p-4">
      <h1 className="text-4xl font-bold mb-2 text-[#a3e635]">404 - Page Not Found</h1>
      <p className="text-gray-400">Redirecting to Home page...</p>
    </div>
  );
}