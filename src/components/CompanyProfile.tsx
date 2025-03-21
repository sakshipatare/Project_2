import React, { useState } from 'react';
import { Building2, Users, MapPin, Globe, Briefcase } from 'lucide-react';

interface CompanyData {
  name: string;
  description: string;
  employeeCount: string;
  location: string;
  industry: string;
  website: string;
  logo: string;
}

const defaultCompany: CompanyData = {
  name: 'TechCorp',
  description: 'Leading technology solutions provider specializing in enterprise software development and cloud infrastructure. We help businesses transform their digital presence through innovative solutions.',
  employeeCount: '1000-5000',
  location: 'San Francisco, CA',
  industry: 'Information Technology',
  website: 'https://techcorp.example.com',
  logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export default function CompanyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyData>(defaultCompany);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle form submission
    console.log('Company data:', companyData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white shadow-sm rounded-lg">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={companyData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                id="description"
                rows={4}
                value={companyData.description}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">Number of Employees</label>
              <input
                type="text"
                name="employeeCount"
                id="employeeCount"
                value={companyData.employeeCount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={companyData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry Type</label>
              <input
                type="text"
                name="industry"
                id="industry"
                value={companyData.industry}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
              <input
                type="url"
                name="website"
                id="website"
                value={companyData.website}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={companyData.logo}
                alt={companyData.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{companyData.name}</h2>
                <p className="text-gray-500">{companyData.industry}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Edit Profile
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">About</h3>
              <p className="text-gray-600">{companyData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Employees</p>
                  <p className="text-gray-900">{companyData.employeeCount}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-gray-900">{companyData.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-gray-900">{companyData.industry}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Website</p>
                  <a
                    href={companyData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    {companyData.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}