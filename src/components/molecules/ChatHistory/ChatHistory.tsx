import Markdown from "react-markdown";
import styles from "./ChatHistory.module.sass";
import { HistoryState } from "@/app/server/types/HistoryState";
import AIMessageCard from "../AIMessageCard/AIMessageCard";
import { Message } from "@/app/server/types/Message";
import { AIMessage } from "@/app/server/types/AIMessage";
import UserPromptCard from "../UserPromptCard/UserPromptCard";
import { UserPrompt } from "@/app/server/types/UserPrompt";
import { ScrollArea } from "@/components/ui/scroll-area";
import NewChat from "../NewChat/NewChat";
export default function ChatHistory({
  id,
  history,
}: {
  id: string;
  history: HistoryState;
}) {
  return (
    <div className={styles.history}>
      {/* TODO: if its a new chat have a simple bg encouraging user to chat */}
      {!history![id] ? (
        <NewChat id={id} />
      ) : (
        history![id].messages && (
          <ScrollArea className={`h-[90vh] w-full ${styles.scrollParent}`}>
            <div className={styles.scrollParent}>
              {history![id].messages.map((s: Message, i: number) => {
                // always pair of messages is inserted, so odd even is a simple way to go
                return i % 2 ? (
                  <AIMessageCard key={i} message={s as AIMessage} />
                ) : (
                  <UserPromptCard key={i} prompt={s as UserPrompt} />
                );
              })}
            </div>
          </ScrollArea>
        )
      )}
    </div>
  );
}
