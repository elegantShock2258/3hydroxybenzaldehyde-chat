"use server";
import { GoogleGenAI } from "@google/genai";
import { ChatModels } from "../types/ChatModels";

let ai: GoogleGenAI | undefined = undefined;
export async function getGeminiResponse(
  prompt: string,
  contextWindow: string[],
) {
  return "im ai";
  // TODO: make sure it retains context in every chat
  if (ai === undefined) {
    ai = new GoogleGenAI({});
  }
  const response = await ai!.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [...contextWindow, prompt].join(" "),
    config: {
      systemInstruction:
        "You're a helpful AI assistant. reply in markdown format ONLY. do NOT hallucinate. do NOT make mistakes.", //TODO: improve
    },
  });

  return response;
}
