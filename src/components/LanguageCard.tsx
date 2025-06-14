import React from 'react';
import { ChevronRight, Clock, Target } from 'lucide-react';
import { ProgrammingLanguage } from '../types/roadmap';

interface LanguageCardProps {
  language: ProgrammingLanguage;
  onSelect: (language: ProgrammingLanguage) => void;
}

export const LanguageCard: React.FC<LanguageCardProps> = ({ language, onSelect }) => {
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
      onClick={() => onSelect(language)}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${language.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative p-8">
        {/* Icon and Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-5xl mb-2">{language.icon}</div>
          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all duration-300" />
        </div>
        
        {/* Title and Difficulty */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{language.name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {language.difficulty}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-3">{language.description}</p>
        
        {/* Stats */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">24 weeks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span className="text-sm text-gray-500">Structured Learning</span>
          </div>
        </div>
      </div>
      
      {/* Hover Accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${language.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </div>
  );
};