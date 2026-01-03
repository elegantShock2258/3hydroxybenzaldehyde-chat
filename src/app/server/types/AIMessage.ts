import { ChatModels } from "./ChatModels";
import { Message } from "./Message";

export interface AIMessage extends Message {
  model: ChatModels;
}
