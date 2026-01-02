import { useLocalStorage } from "react-use";
import { HistoryState } from "./server/types/HistoryState";

export function useHistory() {
  return useLocalStorage<HistoryState>("chat-history", {});
}
