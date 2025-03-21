import React, { useState } from 'react';
import { User, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface Application {
  id: number;
  jobRole: string;
  candidate: {
    name: string;
    email: string;
    phone: string;
    experience: string;
    resume: string;
  };
  answers: {
    whyHire: string;
    experience: string;
    challenge: string;
    availability: string;
    salary: string;
  };
  appliedDate: string;
}

const mockApplications: Application[] = [
  {
    id: 1,
    jobRole: "Senior Frontend Developer",
    candidate: {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 (555) 123-4567",
      experience: "5 years",
      resume: "https://example.com/resume.pdf"
    },
    answers: {
      whyHire: "I have extensive experience in building scalable React applications and leading frontend teams.",
      experience: "Led development of a major e-commerce platform, improving performance by 40%.",
      challenge: "Successfully migrated a legacy application to modern React, reducing bundle size by 60%.",
      availability: "Available to start immediately",
      salary: "$120,000 - $140,000"
    },
    appliedDate: "2024-03-15"
  },
  // Add more mock applications as needed
];

export default function CandidateApplications() {
  const [expandedApplication, setExpandedApplication] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedApplication(expandedApplication === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {mockApplications.map((application) => (
        <div key={application.id} className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div 
            className="p-6 cursor-pointer hover:bg-gray-50"
            onClick={() => toggleExpand(application.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{application.candidate.name}</h3>
                  <p className="text-sm text-gray-500">Applied for {application.jobRole}</p>
                  <p className="text-sm text-gray-500">Applied on {new Date(application.appliedDate).toLocaleDateString()}</p>
                </div>
              </div>
              {expandedApplication === application.id ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>

          {expandedApplication === application.id && (
            <div className="px-6 pb-6 space-y-6">
              <div className="border-t pt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <span className="ml-2">{application.candidate.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <span className="ml-2">{application.candidate.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Experience:</span>
                    <span className="ml-2">{application.candidate.experience}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Application Questions</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Why should we hire you?</p>
                    <p className="mt-1 text-sm text-gray-600">{application.answers.whyHire}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Relevant Experience</p>
                    <p className="mt-1 text-sm text-gray-600">{application.answers.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Challenging Project</p>
                    <p className="mt-1 text-sm text-gray-600">{application.answers.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Availability</p>
                    <p className="mt-1 text-sm text-gray-600">{application.answers.availability}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Salary Expectations</p>
                    <p className="mt-1 text-sm text-gray-600">{application.answers.salary}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Resume</h4>
                <a
                  href={application.candidate.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FileText className="h-5 w-5 mr-2 text-gray-400" />
                  View Resume
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}