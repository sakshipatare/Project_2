import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface Application {
  id: number;
  companyName: string;
  jobRole: string;
  interviewDate: string;
  interviewer: string;
  status: 'accepted' | 'rejected' | 'pending';
  feedback?: string;
}

const mockApplications: Application[] = [
  {
    id: 1,
    companyName: 'TechCorp',
    jobRole: 'Senior Frontend Developer',
    interviewDate: '2024-03-15',
    interviewer: 'John Smith',
    status: 'accepted',
    feedback: 'Strong technical skills and great cultural fit.',
  },
  {
    id: 2,
    companyName: 'InnovateLabs',
    jobRole: 'Full Stack Developer',
    interviewDate: '2024-03-18',
    interviewer: 'Sarah Johnson',
    status: 'rejected',
    feedback: 'Good technical skills but looking for more experience with our tech stack.',
  },
  {
    id: 3,
    companyName: 'StartupX',
    jobRole: 'React Developer',
    interviewDate: '2024-03-20',
    interviewer: 'Mike Brown',
    status: 'pending',
  },
];

export default function ApplicationStatus() {
  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusBadgeColor = (status: Application['status']) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="space-y-6">
      {mockApplications.map((application) => (
        <div
          key={application.id}
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-200"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">{application.jobRole}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(application.status)}`}>
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </span>
              </div>
              <p className="text-sm text-gray-600">{application.companyName}</p>
              <div className="text-sm text-gray-500">
                Interviewed by {application.interviewer} on {new Date(application.interviewDate).toLocaleDateString()}
              </div>
            </div>
            {getStatusIcon(application.status)}
          </div>
          {application.feedback && (
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-medium">Feedback:</p>
              <p className="mt-1">{application.feedback}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}