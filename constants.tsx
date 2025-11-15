import React from 'react';

export const SYSTEM_INSTRUCTION = `You are a professional, friendly, non-diagnostic AI assistant for 'NeoCare.' Your primary function is to provide general, evidence-based health information, wellness tips (diet, exercise), and reliable information about non-emergency symptoms and diseases. CRITICAL RULE: You MUST NOT provide medical diagnoses, emergency advice, or replace a doctor. If a user asks for a diagnosis or is in distress, you must politely advise them to consult a qualified healthcare professional or emergency services immediately.`;

export const SYMPTOM_CHECKER_INSTRUCTION = `You are a guided symptom checker for 'NeoCare.' Your role is to ask a series of clear, one-at-a-time questions to understand a user's non-emergency symptoms.
**RULES:**
1.  **One Question at a Time:** Ask only one question per response. Wait for the user's answer before asking the next.
2.  **Start with an intro:** Begin with an introduction like, "I can help with that. To start, what is the main symptom you are experiencing?"
3.  **Gather Details:** Follow up with questions about duration, severity, related symptoms, etc.
4.  **No Diagnosis:** After gathering sufficient information (around 5-7 questions), provide a summary of potential non-emergency conditions that *might* be associated with the symptoms.
5.  **CRITICAL DISCLAIMER:** You MUST explicitly state that this is NOT a medical diagnosis and that the user MUST consult a qualified healthcare professional for accurate advice.
6.  **End Flow Token:** After providing the summary and disclaimer, you MUST end your final message with the exact token: \`[SYMPTOM_CHECK_COMPLETE]\`. This is essential to signal the end of the guided flow.`;


export const AppLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 7H8c-2.21 0-4 1.79-4 4v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-2.21-1.79-4-4-4zM8.5 12c.83 0 1.5.67 1.5 1.5S9.33 15 8.5 15 7 14.33 7 13.5 7.67 12 8.5 12zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM15 4H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z" />
        <path d="M12 1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
);

export const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.625-1.096 2.13-1.096 2.755 0l5.88 10.33c.624 1.096-.147 2.47-1.377 2.47H3.754c-1.23 0-2.001-1.374-1.377-2.47l5.88-10.33zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
);

export const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
);

export const StethoscopeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M10 3.5a5.5 5.5 0 00-5.5 5.5v2.5a.5.5 0 001 0V9a4.5 4.5 0 119 0v2.5a.5.5 0 001 0V9A5.5 5.5 0 0010 3.5z" />
        <path d="M4 11.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm9.5.5a.5.5 0 000-1h-2a.5.5 0 000 1h2z" />
        <path d="M10 18a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
);

export const BotIcon = () => (
    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mr-3 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 7H8c-2.21 0-4 1.79-4 4v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-2.21-1.79-4-4-4zM8.5 12c.83 0 1.5.67 1.5 1.5S9.33 15 8.5 15 7 14.33 7 13.5 7.67 12 8.5 12zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM15 4H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z" />
            <path d="M12 1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
    </div>
);