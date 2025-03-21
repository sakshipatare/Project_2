import React, { useState } from 'react';
import { Plus, Search, Users, BarChart2, Building2, MapPin, Clock, DollarSign } from 'lucide-react';
import JobPostingForm from './jobs/JobPostingForm';
import CandidatesList from './candidates/CandidatesList';
import CandidateApplications from './applications/CandidateApplications';
import CompanyProfile from './CompanyProfile';
import type { JobPostingData } from './jobs/JobPostingForm';

// Mock data for job postings
const mockJobPostings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    applicants: 12,
    status: 'Active',
    salary: '$120,000 - $150,000',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    applicants: 8,
    status: 'Active',
    salary: '$130,000 - $160,000',
    posted: '1 day ago',
  },
];

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showNewJobModal, setShowNewJobModal] = useState(false);

  const handleNewJobSubmit = (formData: JobPostingData) => {
    console.log('New job posting:', formData);
    setShowNewJobModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`${
              activeTab === 'jobs'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Job Postings
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`${
              activeTab === 'applications'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Applications
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`${
              activeTab === 'candidates'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Candidates
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`${
              activeTab === 'analytics'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`${
              activeTab === 'profile'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Company Profile
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === 'jobs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search job postings..."
                />
              </div>
              <button
                onClick={() => setShowNewJobModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="h-5 w-5 mr-2" />
                New Job Posting
              </button>
            </div>

            {/* Job listings grid */}
            <div className="grid grid-cols-1 gap-6">
              {mockJobPostings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-all duration-200"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Building2 className="h-4 w-4 mr-1" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{job.posted}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {job.status}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-500">
                          <Users className="h-5 w-5 mr-1" />
                          {job.applicants} applicants
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Job Applications</h3>
            <CandidateApplications />
          </div>
        )}

        {activeTab === 'candidates' && (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Candidate Applications</h3>
            <CandidatesList />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hiring Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-500">Total Applications</h4>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
                <p className="mt-2 text-3xl font-semibold text-gray-900">156</p>
                <p className="mt-1 text-sm text-green-600">+12% from last month</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-500">Interview Rate</h4>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
                <p className="mt-2 text-3xl font-semibold text-gray-900">68%</p>
                <p className="mt-1 text-sm text-green-600">+5% from last month</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-500">Offer Rate</h4>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
                <p className="mt-2 text-3xl font-semibold text-gray-900">42%</p>
                <p className="mt-1 text-sm text-red-600">-3% from last month</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <CompanyProfile />
        )}
      </div>

      {/* Job Posting Modal */}
      {showNewJobModal && (
        <JobPostingForm
          onClose={() => setShowNewJobModal(false)}
          onSubmit={handleNewJobSubmit}
        />
      )}
    </div>
  );
}