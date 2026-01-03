import { AIMessage } from "@/app/server/types/AIMessage";
import { Card } from "@/components/ui/card";
import Markdown from "react-markdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./AIMessageCard.module.sass";

export default function AIMessageCard({ message }: { message: AIMessage }) {
  return (
    <div className={styles.parent}>
      <Markdown>{message.message}</Markdown>
    </div>
  );
}
