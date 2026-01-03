import { HistoryState } from "@/app/server/types/HistoryState";
import React, { useContext } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use";

type ChatHistoryContextType = {
  history: HistoryState | undefined;
  setHistory: React.Dispatch<React.SetStateAction<HistoryState | undefined>>;
  clear: () => void;
};
export const ChatHistoryContext = createContext<ChatHistoryContextType | null>(
  null,
);

export function useHistory() {
  return useContext(ChatHistoryContext);
}
