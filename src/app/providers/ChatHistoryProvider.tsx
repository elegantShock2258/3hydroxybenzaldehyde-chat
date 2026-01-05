import { ChatHistoryContext, useHistory } from "@/hooks/use-history";
import { ReactNode } from "react";
import { HistoryState } from "../server/types/HistoryState";
import { useLocalStorage } from "react-use";

export default function ChatHistoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  let [history, setHistory, clear] = useLocalStorage<HistoryState>(
    "chat-history",
    {},
  );

  return (
    <>
      <ChatHistoryContext.Provider value={{ history, setHistory, clear }}>
        {children}
      </ChatHistoryContext.Provider>
    </>
  );
}
