import Markdown from "react-markdown";
import styles from "./ChatHistory.module.sass";
import { HistoryState } from "@/app/server/types/HistoryState";
import AIMessageCard from "../AIMessageCard/AIMessageCard";
import { Message } from "@/app/server/types/Message";
import { AIMessage } from "@/app/server/types/AIMessage";
import UserPromptCard from "../UserPromptCard/UserPromptCard";
import { UserPrompt } from "@/app/server/types/UserPrompt";

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
        history![id].map((s: Message, i: number) => {
          return i % 2 ? (
            <AIMessageCard key={i} message={s as AIMessage} />
          ) : (
            <UserPromptCard key={i} prompt={s as UserPrompt} />
          );
        })}
    </div>
  );
}
