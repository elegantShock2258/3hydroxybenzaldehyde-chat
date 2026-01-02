"use client";
import { useHistory } from "@/app/hooks";
import { getGeminiResponse } from "@/app/server/actions/getGeminiResponse";
import ChatHistory from "@/components/molecules/ChatHistory/ChatHistory";
import PromptField from "@/components/molecules/PromptField/PromptField";
import { Button } from "@/components/ui/button";
import { MouseEventHandler, use, useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  let chatId = use(params).id;
  let [error, setError] = useState<boolean>(false);

  let [history, setHistory, clear] = useHistory();

  if (error) {
    alert("error");
  }
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
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
