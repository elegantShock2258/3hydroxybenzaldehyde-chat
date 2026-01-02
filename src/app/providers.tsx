"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <Toaster />
        {children}
      </SidebarProvider>
    </>
  );
}
