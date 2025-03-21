import React, { useState } from 'react';
import { Search, Briefcase, MapPin, Clock, Building2, DollarSign, Filter, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';

// Mock data for companies and their job listings
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
        description: 'Join our dynamic team to build next-generation web applications...',
        requirements: [
          '5+ years of experience with React',
          'Strong TypeScript skills',
          'Experience with modern frontend tools',
        ],
      },
      {
        id: 102,
        title: 'Backend Engineer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$130,000 - $160,000',
        posted: '1 day ago',
        experience: '3+ years',
        description: 'Help us scale our cloud infrastructure...',
        requirements: [
          'Strong Node.js experience',
          'AWS expertise',
          'Microservices architecture',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'InnovateLabs',
    logo: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'AI-driven innovation company',
    jobs: [
      {
        id: 201,
        title: 'Machine Learning Engineer',
        location: 'Boston, MA',
        type: 'Full-time',
        salary: '$140,000 - $180,000',
        posted: '3 days ago',
        experience: '4+ years',
        description: 'Work on cutting-edge AI solutions...',
        requirements: [
          'Masters in Computer Science or related field',
          'Experience with PyTorch or TensorFlow',
          'Strong mathematical background',
        ],
      },
    ],
  },
];

export default function JobListings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
  });
  const navigate = useNavigate();

  const handleJobClick = (job) => {
    navigate(`/jobs/${job.id}`);
  };

  const handleApply = (e, job) => {
    e.stopPropagation(); // Prevent navigation when clicking the apply button
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleApplicationSubmit = (formData) => {
    console.log('Application submitted:', formData);
    setShowApplicationModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search jobs by title, company, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Filter className="h-5 w-5 mr-2 text-gray-400" />
            Filters
          </button>
        </div>
      </div>

      {/* Companies and Jobs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Company List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Companies Hiring</h2>
          {mockCompanies.map((company) => (
            <button
              key={company.id}
              onClick={() => setSelectedCompany(company)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                selectedCompany?.id === company.id
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-500">{company.jobs.length} open positions</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedCompany ? `Jobs at ${selectedCompany.name}` : 'All Open Positions'}
          </h2>
          
          {(selectedCompany ? selectedCompany.jobs : mockCompanies.flatMap(c => c.jobs)).map((job) => (
            <div
              key={job.id}
              onClick={() => handleJobClick(job)}
              className="bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-all duration-200 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        <span>{mockCompanies.find(c => c.jobs.includes(job))?.name}</span>
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
                  <button
                    onClick={(e) => handleApply(e, job)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-600">{job.description}</p>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Requirements:</h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && selectedJob && (
        <JobApplicationForm
          job={{
            title: selectedJob.title,
            company: mockCompanies.find(c => c.jobs.includes(selectedJob))?.name || '',
          }}
          onClose={() => setShowApplicationModal(false)}
          onSubmit={handleApplicationSubmit}
        />
      )}
    </div>
  );
}