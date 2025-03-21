import React from 'react';
import { X } from 'lucide-react';

interface JobApplicationFormProps {
  job: {
    title: string;
    company: string;
  };
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: File | null;
  questions: {
    whyHire: string;
    experience: string;
    challenge: string;
    availability: string;
    salary: string;
  };
}

export default function JobApplicationForm({ job, onClose, onSubmit }: JobApplicationFormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    questions: {
      whyHire: '',
      experience: '',
      challenge: '',
      availability: '',
      salary: '',
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('q_')) {
      setFormData(prev => ({
        ...prev,
        questions: {
          ...prev.questions,
          [name.substring(2)]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file,
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Apply for {job.title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              at {job.company}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-gray-900">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
          </div>

          {/* Screening Questions */}
          <div className="space-y-4">
            <h3 className="text-md font-medium text-gray-900">Screening Questions</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Why should we hire you for this position?
              </label>
              <textarea
                name="q_whyHire"
                required
                rows={3}
                value={formData.questions.whyHire}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Describe why you would be a great fit for this role..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What relevant experience do you have for this role?
              </label>
              <textarea
                name="q_experience"
                required
                rows={3}
                value={formData.questions.experience}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Detail your relevant experience..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Describe a challenging project you worked on and how you handled it.
              </label>
              <textarea
                name="q_challenge"
                required
                rows={3}
                value={formData.questions.challenge}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Share a specific example..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What is your availability and preferred work schedule?
              </label>
              <textarea
                name="q_availability"
                required
                rows={2}
                value={formData.questions.availability}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Include your notice period if applicable..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What are your salary expectations?
              </label>
              <textarea
                name="q_salary"
                required
                rows={2}
                value={formData.questions.salary}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Specify your expected salary range..."
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}