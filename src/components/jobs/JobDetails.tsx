import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Clock, DollarSign, Briefcase, Users, CheckCircle } from 'lucide-react';
import JobApplicationForm from '../JobApplicationForm';

// Mock data for companies and their job listings (same as in JobListings.tsx)
const mockCompanies = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Leading technology solutions provider',
    jobs: [
      {
        id: 101,
        title: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$120,000 - $150,000',
        posted: '2 days ago',
        experience: '5+ years',
        description: 'Join our dynamic team to build next-generation web applications using React, TypeScript, and modern frontend tools. You\'ll be working on challenging projects that impact millions of users.',
        responsibilities: [
          'Lead the development of complex frontend applications',
          'Collaborate with designers and backend engineers',
          'Mentor junior developers and conduct code reviews',
          'Optimize application performance and user experience',
          'Contribute to technical architecture decisions'
        ],
        requirements: [
          '5+ years of experience with React',
          'Strong TypeScript skills',
          'Experience with modern frontend tools',
          'Excellent problem-solving abilities',
          'Strong communication skills'
        ],
        benefits: [
          'Competitive salary and equity package',
          'Health, dental, and vision insurance',
          'Flexible work hours and remote options',
          'Professional development budget',
          'Regular team events and activities'
        ]
      }
    ],
  }
];

export default function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  // Find the job from mock data
  const job = mockCompanies.flatMap(c => c.jobs).find(j => j.id === parseInt(jobId));
  const company = mockCompanies.find(c => c.jobs.some(j => j.id === parseInt(jobId)));

  if (!job || !company) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Job not found</h2>
          <p className="mt-2 text-gray-600">The job posting you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to jobs
          </button>
        </div>
      </div>
    );
  }

  const handleApplicationSubmit = (formData) => {
    console.log('Application submitted:', formData);
    setShowApplicationModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to jobs
      </button>

      {/* Company header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={company.logo}
            alt={company.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                <span>{company.name}</span>
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
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>{job.type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">About the Role</h2>
            <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h2>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Experience</h3>
                <p className="mt-1 text-gray-900">{job.experience}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Job Type</h3>
                <p className="mt-1 text-gray-900">{job.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Salary Range</h3>
                <p className="mt-1 text-gray-900">{job.salary}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="mt-1 text-gray-900">{job.location}</p>
              </div>
              <button
                onClick={() => setShowApplicationModal(true)}
                className="w-full mt-6 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <JobApplicationForm
          job={{
            title: job.title,
            company: company.name,
          }}
          onClose={() => setShowApplicationModal(false)}
          onSubmit={handleApplicationSubmit}
        />
      )}
    </div>
  );
}