import React from 'react';
import { X, Star } from 'lucide-react';

interface CandidateFeedbackProps {
  candidate: {
    name: string;
    jobRole: string;
    feedback: {
      rating: number;
      comments: string;
      strengths: string[];
      improvements: string[];
    };
  };
  onClose: () => void;
}

export default function CandidateFeedback({ candidate, onClose }: CandidateFeedbackProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Interview Feedback</h2>
            <p className="mt-1 text-sm text-gray-500">
              {candidate.name} - {candidate.jobRole}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700">Overall Rating</h3>
            <div className="mt-2 flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Star
                  key={rating}
                  className={`h-5 w-5 ${
                    rating <= candidate.feedback.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700">Detailed Feedback</h3>
            <p className="mt-2 text-sm text-gray-600">{candidate.feedback.comments}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700">Key Strengths</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
              {candidate.feedback.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700">Areas for Improvement</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
              {candidate.feedback.improvements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}