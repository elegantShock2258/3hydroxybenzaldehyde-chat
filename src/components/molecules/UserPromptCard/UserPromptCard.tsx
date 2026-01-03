import { UserPrompt } from "@/app/server/types/UserPrompt";

export default function UserPromptCard({ prompt }: { prompt: UserPrompt }) {
  return <div> {prompt.message}</div>;
}
