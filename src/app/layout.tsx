import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.sass";
import Providers from "./providers/providers";
import ChatsSidebar from "@/components/molecules/ChatsSidebar/ChatsSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "benzaldehyde chat",
  description: "Made by Ayush :D",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ChatsSidebar />
          <div className="w-full h-[100vh]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
