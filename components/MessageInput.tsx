import React, { useState } from 'react';
import { SendIcon } from '../constants';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
  isSymptomCheckerActive: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isTyping, isSymptomCheckerActive }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      onSendMessage(input);
      setInput('');
    }
  };
  
  const placeholderText = isSymptomCheckerActive
    ? "Answer the question above..."
    : "Ask a health-related question...";

  return (
    <div className="bg-green-50 border-t border-green-200">
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholderText}
            className="flex-1 w-full px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
            disabled={isTyping}
            aria-label={placeholderText}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-3 bg-emerald-500 text-white rounded-full disabled:bg-slate-400 disabled:cursor-not-allowed hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;