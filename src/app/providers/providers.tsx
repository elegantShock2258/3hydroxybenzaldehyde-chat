"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Toaster } from "sonner";
import ChatHistoryProvider from "./ChatHistoryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChatHistoryProvider>
        <SidebarProvider>
          <Toaster />
          {children}
        </SidebarProvider>
      </ChatHistoryProvider>
    </>
  );
}
