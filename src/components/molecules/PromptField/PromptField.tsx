"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import styles from "./PromptField.module.sass";
import { Dispatch, SetStateAction, useState } from "react";
import { getGeminiResponse } from "@/app/server/actions/getGeminiResponse";
import { HistoryState } from "@/app/server/types/HistoryState";
import { AIMessage } from "@/app/server/types/AIMessage";
import { ChatModels } from "@/app/server/types/ChatModels";
import { UserPrompt } from "@/app/server/types/UserPrompt";
import getTitleOfConversation from "@/app/server/actions/getTitleOfConversation";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

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
  let [prompt, setPrompt] = useState<string>("");
  let [loading, setLoading] = useState<boolean>(false);
  let { open } = useSidebar();

  async function sendPrompt(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // disable send button
    setError(false);
    setLoading(true);
    try {
      if (history![id] === undefined)
        history![id] = { messages: [], title: "" };
      const prevMessages = history![id].messages ?? [];
      const userMessage: UserPrompt = { message: prompt };

      setPrompt("");
      const model: ChatModels = "gemini"; //TODO: add support for different models

      let contextWindowLen = Math.max(
        prevMessages.length - Number(process.env.CONTEXT_WINDOW) || 0,
        0,
      );

      let contextWindow = prevMessages
        .splice(0, contextWindowLen)
        .map((s) => s.message);

      let res = await getGeminiResponse(prompt, contextWindow);
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
    }
  }

  return (
    <div
      className={`flex items-center justify-center ${styles.messageBar} ${open && styles.shift}  ${loading && styles.loadingAnimation}`}
    >
      <form className="w-full flex justify-center">
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
          onClick={sendPrompt}
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
