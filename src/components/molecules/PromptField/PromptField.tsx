"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import styles from "./PromptField.module.sass";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { getGeminiResponse } from "@/app/server/actions/getGeminiResponse";
import { HistoryState } from "@/app/server/types/HistoryState";
import { AIMessage } from "@/app/server/types/AIMessage";
import { ChatModels } from "@/app/server/types/ChatModels";
import { UserPrompt } from "@/app/server/types/UserPrompt";
import getTitleOfConversation from "@/app/server/actions/getTitleOfConversation";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { randomUrlSafeString } from "@/lib/utils";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default function PromptField({
  id,
  setError,
  history,
  setHistory,
}: {
  id: string;
  history: HistoryState;
  setHistory: Dispatch<SetStateAction<HistoryState | undefined>>;
  setError: Dispatch<SetStateAction<boolean>>;
}) {
  const searchParams = useSearchParams();
  let [prompt, setPrompt] = useState<string>(searchParams.get("prompt") || "");
  let [loading, setLoading] = useState<boolean>(false);
  let { open } = useSidebar();
  const didAutoSend = useRef(false);
  let router = useRouter();

  useEffect(() => {
    if (
      searchParams.get("status") === "new" &&
      prompt &&
      !didAutoSend.current
    ) {
      didAutoSend.current = true;
      sendPrompt();
    }
  }, [searchParams]);

  async function sendPrompt(e?: React.FormEvent) {
    if (e) {
      e.preventDefault();
    }
    // disable send button
    setError(false);
    setLoading(true);

    if (id === undefined) {
      id = randomUrlSafeString();
      router.push(`/chat/${id}?prompt=${prompt}&status=new`);
      return;
    }

    try {
      if (history![id] === undefined)
        history![id] = { messages: [], title: "" };
      const prevMessages = history![id].messages ?? [];
      const userMessage: UserPrompt = { message: prompt };

      setPrompt("");
      const model: ChatModels = "gemini"; //TODO: add support for different models

      let contextWindowLen =
        Number(process.env.NEXT_PUBLIC_CONTEXT_WINDOW) || 0;

      console.log(contextWindowLen);
      let contextWindow = prevMessages
        .slice(-contextWindowLen)
        .map((s, i) => `${i % 2 === 0 ? "User: " : "AI: "} ${s.message}`)
        .join(" ");

      let res = await getGeminiResponse(`${contextWindow} User: ${prompt}`);
      const aiMessage: AIMessage = { message: `${res}`, model: model };

      history![id].title =
        history![id].title !== ""
          ? history![id].title
          : await getTitleOfConversation(userMessage.message);
      const updatedHistory = {
        ...history,
        [id]: {
          title: history![id].title,
          messages: [...prevMessages, userMessage, aiMessage],
        },
      };
      setHistory(updatedHistory);
    } catch (error: unknown) {
      setError(true);
      toast.error(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
      document
        .getElementById("chat-end")!
        .scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div
      className={`flex items-center justify-center ${styles.messageBar} ${open && styles.shift}  ${loading && styles.loadingAnimation}`}
    >
      <form className="w-full flex justify-center" onSubmit={sendPrompt}>
        <Input
          className="w-full"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="enter message"
          disabled={loading}
          autoFocus
        />
        <Button
          type="submit"
          className={styles.button}
          disabled={loading || prompt.trim() === ""}
        >
          enter
        </Button>
      </form>
    </div>
  );
}
