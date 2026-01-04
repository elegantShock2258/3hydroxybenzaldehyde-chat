"use server";
import { GoogleGenAI } from "@google/genai";
import { ChatModels } from "../types/ChatModels";

let ai: GoogleGenAI | undefined = undefined;
export async function getGeminiResponse(prompt: string) {
  return prompt;
  if (ai === undefined) {
    ai = new GoogleGenAI({});
  }
  // for now just use the last 'n' messages, dont bother wasting api creds for summarizing everything
  const response = await ai!.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction:
        "You're a helpful AI assistant. reply in markdown format ONLY. do NOT hallucinate. do NOT make mistakes. I'm sending you a User and AI conversation dialogue, give the most correct answer you can after going through the conversational context and answer the User's prompt", //TODO: improve
    },
  });

  return response.text;
}
