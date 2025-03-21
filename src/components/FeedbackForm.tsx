import React, { useState } from 'react';
import { Star, User } from 'lucide-react';
import CandidateProfile from './feedback/CandidateProfile';
import RatingSection from './feedback/RatingSection';
import FeedbackSection from './feedback/FeedbackSection';

// Mock candidate data
const mockCandidate = {
  id: 1,
  name: 'Alice Johnson',
  position: 'Senior Frontend Developer',
  company: 'TechCorp',
  experience: '5 years',
  skills: ['React', 'TypeScript', 'Node.js'],
  education: 'BS in Computer Science',
  interview: {
    date: '2024-03-20',
    type: 'Technical Interview',
  },
};

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    console.log({ rating, feedback });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <CandidateProfile candidate={mockCandidate} />
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <RatingSection rating={rating} onRatingChange={setRating} />
          <FeedbackSection feedback={feedback} onFeedbackChange={setFeedback} />

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}