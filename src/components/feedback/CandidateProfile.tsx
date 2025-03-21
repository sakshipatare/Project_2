import React from 'react';
import { User } from 'lucide-react';

interface CandidateProfileProps {
  candidate: {
    name: string;
    position: string;
    experience: string;
    skills: string[];
    education: string;
    interview: {
      date: string;
      type: string;
    };
  };
}

export default function CandidateProfile({ candidate }: CandidateProfileProps) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{candidate.name}</h2>
          <p className="mt-1 text-sm text-gray-500">{candidate.position}</p>
        </div>
        <div className="flex items-center space-x-2">
          <User className="h-10 w-10 text-gray-400" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Professional Details</h3>
          <dl className="mt-2 space-y-1">
            <div className="text-sm text-gray-900">
              <dt className="inline font-medium">Experience: </dt>
              <dd className="inline">{candidate.experience}</dd>
            </div>
            <div className="text-sm text-gray-900">
              <dt className="inline font-medium">Education: </dt>
              <dd className="inline">{candidate.education}</dd>
            </div>
            <div className="text-sm text-gray-900">
              <dt className="inline font-medium">Skills: </dt>
              <dd className="inline">{candidate.skills.join(', ')}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Interview Details</h3>
          <dl className="mt-2 space-y-1">
            <div className="text-sm text-gray-900">
              <dt className="inline font-medium">Date: </dt>
              <dd className="inline">{candidate.interview.date}</dd>
            </div>
            <div className="text-sm text-gray-900">
              <dt className="inline font-medium">Type: </dt>
              <dd className="inline">{candidate.interview.type}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}