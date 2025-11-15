import React from 'react';
import { WarningIcon } from '../constants';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-green-100 border-b border-green-200 p-4">
      <div className="container mx-auto flex items-center">
        <WarningIcon />
        <p className="text-sm text-emerald-900">
          <strong>Disclaimer:</strong> This is an AI assistant for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;