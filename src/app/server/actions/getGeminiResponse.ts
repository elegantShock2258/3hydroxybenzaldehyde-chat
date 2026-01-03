"use server";
import { GoogleGenAI } from "@google/genai";
import { ChatModels } from "../types/ChatModels";

let ai: GoogleGenAI | undefined = undefined;
export async function getGeminiResponse(
  prompt: string,
  contextWindow: string[],
) {
  return "im ai";
  if (ai === undefined) {
    ai = new GoogleGenAI({});
  }
  // for now just use the last 'n' messages, dont bother wasting api creds for summarizing everything
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
