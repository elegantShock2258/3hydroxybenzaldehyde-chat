import { Message } from "./Message";

export type HistoryState = {
  [id: string]: Message[];
};
