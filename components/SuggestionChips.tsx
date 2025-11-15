import React from 'react';
import { StethoscopeIcon } from '../constants';

interface SuggestionChipsProps {
  onStartSymptomChecker: () => void;
  isTyping: boolean;
}

const SuggestionChips: React.FC<SuggestionChipsProps> = ({ onStartSymptomChecker, isTyping }) => {
  return (
    <div className="container mx-auto px-4 pb-2">
      <div className="flex space-x-2">
        <button
          onClick={onStartSymptomChecker}
          disabled={isTyping}
          className="flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200 text-sm disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
          aria-label="Start symptom checker"
        >
          <StethoscopeIcon />
          <span className="ml-2 font-medium">Start Symptom Checker</span>
        </button>
      </div>
    </div>
  );
};

export default SuggestionChips;