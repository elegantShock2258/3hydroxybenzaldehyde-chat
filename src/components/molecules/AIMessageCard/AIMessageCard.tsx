import { AIMessage } from "@/app/server/types/AIMessage";
import { Card } from "@/components/ui/card";
import Markdown from "react-markdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./AIMessageCard.module.sass";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StickyNote } from "lucide-react";

export default function AIMessageCard({ message }: { message: AIMessage }) {
  return (
    <div className={styles.parent}>
      <div className={styles.scroll}>
        <Markdown>{message.message}</Markdown>
      </div>
    </div>
  );
}
