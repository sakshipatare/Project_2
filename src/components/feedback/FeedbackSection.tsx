import React from 'react';

interface FeedbackSectionProps {
  feedback: string;
  onFeedbackChange: (feedback: string) => void;
}

export default function FeedbackSection({ feedback, onFeedbackChange }: FeedbackSectionProps) {
  return (
    <div>
      <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
        Detailed Feedback
      </label>
      <div className="mt-2">
        <textarea
          id="feedback"
          rows={6}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Please provide detailed feedback about the candidate's performance..."
          value={feedback}
          onChange={(e) => onFeedbackChange(e.target.value)}
        />
      </div>
    </div>
  );
}