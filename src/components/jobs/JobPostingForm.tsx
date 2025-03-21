import React from 'react';
import { X } from 'lucide-react';
import JobDetailsSection from './JobDetailsSection';
import AttachmentsSection from './AttachmentsSection';
import ScheduleSection from './ScheduleSection';

interface JobPostingFormProps {
  onClose: () => void;
  onSubmit: (formData: JobPostingData) => void;
}

export interface JobPostingData {
  jobRole: string;
  description: string;
  salaryMin: string;
  salaryMax: string;
  experience: string;
  skills: string[];
  jobType: 'Full-Time' | 'Part-Time' | 'Internship';
  documents: File[];
  startDate: string;
  endDate: string;
}

export default function JobPostingForm({ onClose, onSubmit }: JobPostingFormProps) {
  const [formData, setFormData] = React.useState<JobPostingData>({
    jobRole: '',
    description: '',
    salaryMin: '',
    salaryMax: '',
    experience: '',
    skills: [],
    jobType: 'Full-Time',
    documents: [],
    startDate: '',
    endDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateFormData = (updates: Partial<JobPostingData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Create New Job Posting</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <JobDetailsSection
            data={formData}
            onChange={updateFormData}
          />

          <AttachmentsSection
            documents={formData.documents}
            onChange={(documents) => updateFormData({ documents })}
          />

          <ScheduleSection
            startDate={formData.startDate}
            endDate={formData.endDate}
            onChange={(dates) => updateFormData(dates)}
          />

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              Create Job Posting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}