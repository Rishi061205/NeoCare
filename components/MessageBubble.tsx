import React from 'react';
import { Message, Role } from '../types';
import { BotIcon } from '../constants';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="bg-emerald-500 text-white rounded-xl lg:rounded-2xl px-4 py-3 max-w-lg shadow-sm">
          <p className="text-sm md:text-base whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
        <BotIcon />
        <div className="bg-white text-slate-800 rounded-xl lg:rounded-2xl px-4 py-3 max-w-lg shadow-sm border border-slate-200">
            <p className="text-sm md:text-base whitespace-pre-wrap">{message.content || '...'}</p>
        </div>
    </div>
  );
};

export default MessageBubble;