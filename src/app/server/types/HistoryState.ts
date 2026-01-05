import { Message } from "./Message";

export type Conversation = {
  messages: Message[];
  title: string;
  user?: string; //TODO: keep record of parent user
};

export type HistoryState = {
  [id: string]: Conversation;
};
