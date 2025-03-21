import React from 'react';
import { Star } from 'lucide-react';

interface RatingSectionProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

export default function RatingSection({ rating, onRatingChange }: RatingSectionProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Overall Rating
      </label>
      <div className="mt-2 flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onRatingChange(value)}
            className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              rating >= value ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            <Star className="h-8 w-8" fill={rating >= value ? 'currentColor' : 'none'} />
          </button>
        ))}
      </div>
    </div>
  );
}