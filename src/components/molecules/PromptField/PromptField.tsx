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

  async function sendPrompt(e: React.MouseEvent<HTMLButtonElement>) {
    // disable send button
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const prevMessages = history![id] ?? [];
      const userMessage: UserPrompt = { message: prompt };

      setPrompt("");
      const model: ChatModels = "gemini"; //TODO: add support for different models

      let res = await getGeminiResponse(prompt);
      const aiMessage: AIMessage = { message: `${res}`, model: model };

      const updatedHistory = {
        ...history,
        [id]: [...prevMessages, userMessage, aiMessage],
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
    <>
      <div className={`flex items-center justify-center ${styles.messageBar}`}>
        <form>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="enter message"
          />
          <Button onClick={sendPrompt} type="submit" disabled={loading}>
            enter
          </Button>
          {loading && <>loading.....</>}
        </form>
      </div>
    </>
  );
}
