import Markdown from "react-markdown";
import styles from "./ChatHistory.module.sass";
import { HistoryState } from "@/app/server/types/HistoryState";

export default function ChatHistory({
  id,
  history,
}: {
  id: string;
  history: HistoryState;
}) {
  return (
    <div className={styles.history}>
      {/* TODO: if new chat have a simple bg encouraging user to chat */}
      {history![id] &&
        history![id].map((s: string, i: number) => {
          return <Markdown key={i}>{s}</Markdown>;
        })}
    </div>
  );
}
