import React, { useRef, useEffect } from 'react';
import { Message, Role } from '../types';
import MessageBubble from './MessageBubble';

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isTyping }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6">
      <div className="container mx-auto space-y-6">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
        {isTyping && messages[messages.length-1]?.role === 'user' && (
           // FIX: Used Role.AI instead of string literal 'model' to conform to the Role enum type.
           <MessageBubble message={{role: Role.AI, content: '...'}}/>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;