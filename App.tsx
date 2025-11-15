import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { Message, Role } from './types';
import { initializeChat, initializeSymptomCheckerChat } from './services/geminiService';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import SuggestionChips from './components/SuggestionChips';

const SYMPTOM_CHECK_COMPLETE_TOKEN = '[SYMPTOM_CHECK_COMPLETE]';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: Role.AI, content: "Hello! I'm your friendly NeoCare assistant. How can I help you today with general health and wellness information?" }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<Chat | null>(null);

  const [isSymptomCheckerActive, setIsSymptomCheckerActive] = useState<boolean>(false);
  const symptomCheckerChatRef = useRef<Chat | null>(null);

  useEffect(() => {
    try {
      chatRef.current = initializeChat();
    } catch (e: any) {
      setError("Failed to initialize AI Chat. Please ensure your API key is set up correctly.");
      console.error(e);
    }
  }, []);

  const handleStartSymptomChecker = async () => {
    setIsTyping(true);
    setIsSymptomCheckerActive(true);
    setError(null);
    
    try {
      symptomCheckerChatRef.current = initializeSymptomCheckerChat();
      const stream = await symptomCheckerChatRef.current.sendMessageStream({ message: "Start" });
      
      let aiResponse = '';
      setMessages(prev => [...prev, { role: Role.AI, content: '' }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        aiResponse += chunkText;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = aiResponse;
            return newMessages;
        });
      }
    } catch (e) {
      console.error(e);
      const errorMessage = "Sorry, the symptom checker encountered an error. Please try again.";
      setError(errorMessage);
       setMessages(prev => [...prev, { role: Role.AI, content: errorMessage }]);
       setIsSymptomCheckerActive(false);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async (userInput: string) => {
    const activeChat = isSymptomCheckerActive ? symptomCheckerChatRef.current : chatRef.current;
    if (!activeChat) {
      setError("Chat is not initialized.");
      return;
    }

    setIsTyping(true);
    setError(null);
    const userMessage: Message = { role: Role.USER, content: userInput };
    setMessages(prev => [...prev, userMessage]);

    try {
      const stream = await activeChat.sendMessageStream({ message: userInput });
      
      let aiResponse = '';
      setMessages(prev => [...prev, { role: Role.AI, content: '' }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        aiResponse += chunkText;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = aiResponse.replace(SYMPTOM_CHECK_COMPLETE_TOKEN, '').trim();
            return newMessages;
        });
      }

      if (isSymptomCheckerActive && aiResponse.includes(SYMPTOM_CHECK_COMPLETE_TOKEN)) {
        setIsSymptomCheckerActive(false);
        symptomCheckerChatRef.current = null;
        setMessages(prev => [...prev, { role: Role.AI, content: "Symptom check has ended. You can now continue with general health questions." }]);
      }

    } catch (e) {
      console.error(e);
      const errorMessage = "Sorry, I encountered an error. Please try again.";
      setError(errorMessage);
       setMessages(prev => {
          const newMessages = [...prev];
          if(newMessages[newMessages.length-1].role === Role.AI) {
            newMessages[newMessages.length-1].content = errorMessage;
          } else {
             newMessages.push({ role: Role.AI, content: errorMessage });
          }
          return newMessages;
       });
       if (isSymptomCheckerActive) {
         setIsSymptomCheckerActive(false);
       }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-4rem)] my-8 bg-green-50 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
      <Header />
      <Disclaimer />
      {error && !messages.find(m => m.content === error) && (
        <div className="bg-red-100 text-red-700 p-4 text-center">
            <p>{error}</p>
        </div>
      )}
      <ChatWindow messages={messages} isTyping={isTyping} />
      {!isSymptomCheckerActive && <SuggestionChips onStartSymptomChecker={handleStartSymptomChecker} isTyping={isTyping} />}
      <MessageInput onSendMessage={handleSendMessage} isTyping={isTyping} isSymptomCheckerActive={isSymptomCheckerActive} />
    </div>
  );
};

export default App;