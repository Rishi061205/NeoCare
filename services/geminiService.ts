import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION, SYMPTOM_CHECKER_INSTRUCTION } from '../constants';

let ai: GoogleGenAI | null = null;

const getAI = () => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};

export const initializeChat = (): Chat => {
    const genAI = getAI();
    return genAI.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
    });
};

export const initializeSymptomCheckerChat = (): Chat => {
    const genAI = getAI();
    return genAI.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYMPTOM_CHECKER_INSTRUCTION,
        },
    });
};