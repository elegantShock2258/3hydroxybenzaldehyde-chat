import { HistoryState } from "@/app/server/types/HistoryState";
import { useLocalStorage } from "react-use";

export function useHistory() {
  return useLocalStorage<HistoryState>("chat-history", {});
}
