import { UserPrompt } from "@/app/server/types/UserPrompt";
import styles from "./UserPromptCard.module.sass";
export default function UserPromptCard({ prompt }: { prompt: UserPrompt }) {
  return <div className={styles.parent}> {prompt.message}</div>;
}
