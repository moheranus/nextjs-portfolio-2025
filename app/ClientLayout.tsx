// app/ClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import FuturisticLoader from "./components/FuturisticLoader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500); // Matches loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <FuturisticLoader />
      {!isLoading && children}
    </>
  );
}