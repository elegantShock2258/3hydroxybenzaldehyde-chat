"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useHistory } from "@/hooks/use-history";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import Minidenticong from "../MinIdentIcon/MinidentIcon";
import Minidenticon from "../MinIdentIcon/MinidentIcon";
import styles from "./ChatsSidebar.module.sass";
import Markdown from "react-markdown";

export default function AppSidebar() {
  let { history, setHistory, clear } = useHistory()!;
  let { open } = useSidebar();

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="h-full w-[20vw]">
      <SidebarTrigger />
      <SidebarContent className="h-full flex flex-col gap-3">
        <Separator />
        <SidebarGroup
          className={`p-1 flex flex-col items-start gap-3 ${open && "p-4"}`}
        >
          <SidebarGroupLabel className="text-lg press-start-2p">
            Your Chats
          </SidebarGroupLabel>
          <SidebarMenu>
            {Object.keys(history!).map((item, i) => (
              <SidebarMenuItem key={i}>
                <SidebarMenuButton
                  asChild
                  className="flex justify-start translate-x-[2.5px] items-center"
                >
                  <Link href={`/chat/${item}`} className={styles.chatTitle}>
                    <Minidenticon
                      username={item}
                      className="h-9 w-9 shrink-0 flex-0"
                    />
                    {open && (
                      <span className="press-start-2p">
                        {history![item].title}
                      </span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter> auth</SidebarFooter> */}
    </Sidebar>
  );
}
