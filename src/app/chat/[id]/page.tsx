"use client";
import ChatHistory from "@/components/molecules/ChatHistory/ChatHistory";
import PromptField from "@/components/molecules/PromptField/PromptField";
import { useHistory } from "@/hooks/use-history";
import { use, useState } from "react";
import styles from "./chat.module.sass";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  let chatId = use(params).id;
  let [error, setError] = useState<boolean>(false);
  let { history, setHistory } = useHistory()!;

  if (error) {
    alert("error");
  }

  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-center ${styles.parent}`}
    >
      <ChatHistory id={chatId} history={history!} />
      <PromptField
        id={chatId}
        history={history!}
        setHistory={setHistory}
        setError={setError}
      />
    </div>
  );
}
