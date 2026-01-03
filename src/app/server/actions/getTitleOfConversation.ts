"use server";

import { Message } from "../types/Message";

let t = 1;
export default async function getTitleOfConversation(messages: Message[]) {
  //TODO: implement
  return `Chat ${t++}`;
}
