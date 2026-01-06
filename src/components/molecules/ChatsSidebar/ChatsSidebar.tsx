"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useHistory } from "@/hooks/use-history";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import Minidenticon from "../MinIdentIcon/MinidentIcon";
import styles from "./ChatsSidebar.module.sass";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function AppSidebar() {
  let { history, setHistory, clear } = useHistory()!;
  let { open } = useSidebar();
  let router = useRouter();
  function deleteItem(item: string) {
    setHistory((prev) => {
      if (!prev || !prev[item]) return prev;

      const { [item]: _, ...rest } = prev;
      return rest;
    });
    // router.replace("/chat/");
    // cause a HARD refresh using browser api because on router.replace it doesnt cause an hard refresh and causes desync of ui and storage on deletion
    window.location.href = "/";
  }
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="h-full">
      <SidebarTrigger />
      <SidebarContent className="h-full flex flex-col gap-3">
        <Separator />
        <SidebarGroup
          className={`p-1 flex flex-col items-start w-full gap-3 ${open && "p-4"}`}
        >
          <SidebarGroup
            className={`press-start-2p text-white flex items-center justify-between w-full `}
          >
            {open && (
              <Button onClick={() => router.push("/chat")}>New Chat</Button>
            )}
          </SidebarGroup>
          <SidebarGroupLabel className="text-lg press-start-2p">
            Your Chats
          </SidebarGroupLabel>
          <SidebarMenu>
            {Object.entries(history ?? {}).length !== 0 ? (
              Object.entries(history ?? {}).map(([item, val], i) => (
                <SidebarMenuItem key={item}>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <SidebarMenuButton
                        asChild
                        className="flex justify-start translate-x-[2.5px] items-center"
                      >
                        <Link
                          href={`/chat/${item}`}
                          className={styles.chatTitle}
                        >
                          <Minidenticon
                            username={item}
                            className="h-9 w-9 shrink-0 flex-0"
                          />
                          {open && (
                            <span className="press-start-2p">{val.title}</span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </ContextMenuTrigger>
                    <ContextMenuContent
                      className={`${styles.contextMenuItem} press-start-2p`}
                    >
                      <ContextMenuItem
                        className="press-start-2p border-none outline-none"
                        onSelect={() => deleteItem(item)}
                      >
                        Delete
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </SidebarMenuItem>
              ))
            ) : (
              <div className={styles.prompt}>
                Maybe you should start a convo..
              </div>
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* TODO: <SidebarFooter> auth</SidebarFooter> */}
    </Sidebar>
  );
}
