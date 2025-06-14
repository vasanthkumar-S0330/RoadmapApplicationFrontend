import React, { useState } from 'react';
import { BookOpen, ArrowLeft, Trophy, Calendar, Target } from 'lucide-react';
import { LanguageCard } from './components/LanguageCard';
import { WeekCard } from './components/WeekCard';
import { ProgressBar } from './components/ProgressBar';
import { programmingLanguages } from './data/roadmaps';
import { ProgrammingLanguage } from './types/roadmap';
import { useLocalStorage } from './hooks/useLocalStorage';

type View = 'home' | 'roadmap';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage | null>(null);
  const [completedWeeks, setCompletedWeeks] = useLocalStorage<Record<string, number[]>>('completedWeeks', {});

  const handleLanguageSelect = (language: ProgrammingLanguage) => {
    setSelectedLanguage(language);
    setCurrentView('roadmap');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedLanguage(null);
  };

  const handleToggleWeekComplete = (languageId: string, weekNumber: number) => {
    const currentCompleted = completedWeeks[languageId] || [];
    const isCompleted = currentCompleted.includes(weekNumber);
    
    let updatedCompleted: number[];
    if (isCompleted) {
      updatedCompleted = currentCompleted.filter(w => w !== weekNumber);
    } else {
      updatedCompleted = [...currentCompleted, weekNumber].sort((a, b) => a - b);
    }
    
    setCompletedWeeks({
      ...completedWeeks,
      [languageId]: updatedCompleted
    });
  };

  const getCompletedWeeksForLanguage = (languageId: string) => {
    return completedWeeks[languageId] || [];
  };

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Programming Roadmaps
                </h1>
                <p className="text-gray-600 mt-1">Structured 6-month learning paths from beginner to advanced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master programming with our carefully crafted 24-week roadmaps. Each path includes weekly topics, 
              curated resources, hands-on projects, and a capstone project to showcase your skills.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">24 Weeks</h3>
              <p className="text-gray-600">Structured learning timeline</p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">100+ Projects</h3>
              <p className="text-gray-600">Hands-on coding practice</p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Portfolio Ready</h3>
              <p className="text-gray-600">Capstone projects included</p>
            </div>
          </div>

          {/* Language Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingLanguages.map((language) => (
              <LanguageCard
                key={language.id}
                language={language}
                onSelect={handleLanguageSelect}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'roadmap' && selectedLanguage) {
    const completedWeeksCount = getCompletedWeeksForLanguage(selectedLanguage.id).length;
    const totalWeeks = selectedLanguage.weeks.length;
    
    // Add completion status to weeks
    const weeksWithCompletion = selectedLanguage.weeks.map(week => ({
      ...week,
      completed: getCompletedWeeksForLanguage(selectedLanguage.id).includes(week.week)
    }));

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleBackToHome}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{selectedLanguage.icon}</div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{selectedLanguage.name} Roadmap</h1>
                    <p className="text-gray-600">24-week structured learning path</p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <ProgressBar completed={completedWeeksCount} total={totalWeeks} />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile Progress Bar */}
          <div className="sm:hidden mb-8">
            <ProgressBar completed={completedWeeksCount} total={totalWeeks} />
          </div>

          {/* Weeks List */}
          <div className="space-y-4 mb-12">
            {weeksWithCompletion.map((week) => (
              <WeekCard
                key={week.week}
                week={week}
                onToggleComplete={(weekNumber) => handleToggleWeekComplete(selectedLanguage.id, weekNumber)}
              />
            ))}
          </div>

          {/* Capstone Project */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Capstone Project</h2>
                <p className="text-gray-600">Final project to showcase your skills</p>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{selectedLanguage.capstoneProject.title}</h3>
              <p className="text-gray-700 mb-4">{selectedLanguage.capstoneProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedLanguage.capstoneProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedLanguage.capstoneProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Estimated time: {selectedLanguage.capstoneProject.estimatedTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;