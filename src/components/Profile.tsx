import React, { useState } from 'react';
import { Save, User, Mail, Phone, MapPin, Calendar, GraduationCap, Code } from 'lucide-react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  location: string;
  mobileNumber: string;
  qualifications: string;
  skills: string;
  universityName: string;
}

const defaultProfile: ProfileData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  dateOfBirth: '1995-06-15',
  location: 'San Francisco, CA',
  mobileNumber: '+1 (555) 123-4567',
  qualifications: 'Bachelor of Science in Computer Science\nMaster of Science in Software Engineering',
  skills: 'JavaScript, React, Node.js, TypeScript, Python\nAgile Development, Team Leadership',
  universityName: 'Stanford University',
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle form submission
    console.log('Profile data:', profileData);
  };

  const renderViewMode = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
            <User className="h-12 w-12 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-gray-500">{profileData.location}</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Edit Profile
        </button>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <span>{profileData.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-400" />
            <span>{profileData.mobileNumber}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <span>{profileData.location}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span>{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Education & Skills */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Education & Skills</h3>
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <GraduationCap className="h-5 w-5 text-gray-400" />
              <h4 className="font-medium text-gray-900">Education</h4>
            </div>
            <div className="ml-8">
              <p className="font-medium">{profileData.universityName}</p>
              <p className="text-gray-500 whitespace-pre-line">{profileData.qualifications}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Code className="h-5 w-5 text-gray-400" />
              <h4 className="font-medium text-gray-900">Skills</h4>
            </div>
            <div className="ml-8">
              <p className="text-gray-500 whitespace-pre-line">{profileData.skills}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEditMode = () => (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200 bg-white shadow-sm rounded-lg">
      {/* Personal Details Section */}
      <div className="p-6">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Details</h3>
          <p className="mt-1 text-sm text-gray-500">
            Please provide your personal information.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={profileData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              value={profileData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={profileData.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Academic and Professional Background Section */}
      <div className="p-6">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Academic and Professional Background
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Tell us about your education and skills.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4">
          <div>
            <label htmlFor="universityName" className="block text-sm font-medium text-gray-700">
              University Name
            </label>
            <input
              type="text"
              name="universityName"
              id="universityName"
              value={profileData.universityName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">
              Qualifications
            </label>
            <textarea
              name="qualifications"
              id="qualifications"
              rows={3}
              value={profileData.qualifications}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="List your degrees and certifications..."
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <textarea
              name="skills"
              id="skills"
              rows={3}
              value={profileData.skills}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="List your technical and professional skills..."
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="p-6">
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );

  return isEditing ? renderEditMode() : renderViewMode();
}