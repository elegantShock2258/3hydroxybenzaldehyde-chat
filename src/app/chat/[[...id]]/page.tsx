"use client";
import ChatHistory from "@/components/molecules/ChatHistory/ChatHistory";
import PromptField from "@/components/molecules/PromptField/PromptField";
import { useHistory } from "@/hooks/use-history";
import { Suspense, use, useState } from "react";
import styles from "./chat.module.sass";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  let chatId = use(params).id;
  let [error, setError] = useState<boolean>(false);
  let { history, setHistory } = useHistory()!;

  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-center ${styles.parent}`}
    >
      {error ? (
        <div className="text-[3rem] text-red-600">
          An error occurred, please refresh the page.
        </div>
      ) : (
        <>
          <ChatHistory id={chatId} history={history!} />
          <Suspense fallback={null}>
            <PromptField
              id={chatId}
              history={history!}
              setHistory={setHistory}
              setError={setError}
            />
          </Suspense>
        </>
      )}
    </div>
  );
}
