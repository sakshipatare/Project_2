import React, { useState } from 'react';
import { Briefcase, Calendar, User } from 'lucide-react';
import JobListings from './JobListings';
import InterviewSchedule from './InterviewSchedule';
import Profile from './Profile';
import FeedbackForm from './FeedbackForm';

export default function InterviewerDashboard() {
  const [activeSection, setActiveSection] = useState('jobs');

  const renderNavigation = () => (
    <div className="bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 -mb-px">
          <button
            onClick={() => setActiveSection('jobs')}
            className={`${
              activeSection === 'jobs'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <Briefcase className="h-5 w-5 mr-2" />
            Job Applications
          </button>
          <button
            onClick={() => setActiveSection('interviews')}
            className={`${
              activeSection === 'interviews'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Interviews
          </button>
          <button
            onClick={() => setActiveSection('feedback')}
            className={`${
              activeSection === 'feedback'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <User className="h-5 w-5 mr-2" />
            Feedback Forms
          </button>
          <button
            onClick={() => setActiveSection('profile')}
            className={`${
              activeSection === 'profile'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <User className="h-5 w-5 mr-2" />
            Profile
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'jobs':
        return <JobListings />;
      case 'interviews':
        return <InterviewSchedule />;
      case 'feedback':
        return <FeedbackForm />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          {activeSection === 'jobs'
            ? 'Job Applications'
            : activeSection === 'interviews'
            ? 'Upcoming Interviews'
            : activeSection === 'feedback'
            ? 'Feedback Forms'
            : 'Profile'}
        </h1>
        {renderNavigation()}
        {renderContent()}
      </div>
    </div>
  );
}