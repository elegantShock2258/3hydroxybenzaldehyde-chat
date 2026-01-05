"use server";

import { Message } from "../types/Message";
import { getGeminiResponse } from "./getGeminiResponse";

export default async function getTitleOfConversation(messages: string) {
  // return "Chat"; //TODO: remove
  let title = await getGeminiResponse(
    `You are a Professional Conversation Title maker, from this one prompt, make an interesting title for the conversation to follow, give only PLAINTEXT, NO MARKDOWN!!, make it maximum 20 characters: ${messages}`,
  );
  return title || "";
}
