import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Circle, ExternalLink, Play, FileText, Globe, BookOpen } from 'lucide-react';
import { Week } from '../types/roadmap';

interface WeekCardProps {
  week: Week;
  onToggleComplete: (weekNumber: number) => void;
}

export const WeekCard: React.FC<WeekCardProps> = ({ week, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'documentation': return <FileText className="w-4 h-4" />;
      case 'website': return <Globe className="w-4 h-4" />;
      case 'tutorial': return <BookOpen className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4 flex-1">
          {/* Completion Checkbox */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete(week.week);
            }}
            className="flex-shrink-0 hover:scale-110 transition-transform duration-200"
          >
            {week.completed ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400 hover:text-green-400" />
            )}
          </button>
          
          {/* Week Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Week {week.week}
              </span>
              {week.completed && (
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  Completed
                </span>
              )}
            </div>
            <h3 className={`text-lg font-semibold transition-colors duration-200 ${week.completed ? 'text-green-700' : 'text-gray-800'}`}>
              {week.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{week.description}</p>
          </div>
        </div>
        
        {/* Expand Icon */}
        <div className="flex-shrink-0 ml-4">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>
      
      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          {/* Resources Section */}
          <div className="mb-6 mt-6">
            <h4 className="text-md font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Learning Resources
            </h4>
            <div className="space-y-3">
              {week.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="text-blue-500 group-hover:text-blue-600">
                    {getResourceIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 group-hover:text-blue-700">
                      {resource.title}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="capitalize">{resource.type}</span>
                      {resource.duration && (
                        <>
                          <span>•</span>
                          <span>{resource.duration}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Practice Projects
            </h4>
            <div className="space-y-3">
              {week.projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-gray-800">{project.title}</h5>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};