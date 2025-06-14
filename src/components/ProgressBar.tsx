import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total, className = '' }) => {
  const percentage = Math.round((completed / total) * 100);
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm font-medium text-gray-900">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-500">{completed} of {total} weeks completed</span>
        <span className="text-xs text-gray-500">{total - completed} weeks remaining</span>
      </div>
    </div>
  );
};