"use server";
import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | undefined = undefined;
export async function getGeminiResponse(prompt: string) {
  return "im ai";
  if (ai === undefined) {
    ai = new GoogleGenAI({});
  }
  const response = await ai!.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction:
        "You're a helpful AI assistant. reply in markdown format ONLY. do NOT hallucinate. do NOT make mistakes.", //TODO: improve
    },
  });

  return response;
}
