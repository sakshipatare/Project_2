import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserPlus, LogIn } from 'lucide-react';

export default function AuthPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/dashboard/${type}`);
  };

  const renderCandidateFields = () => (
    <>
      <div>
        <label htmlFor="userId" className="sr-only">
          User ID
        </label>
        <input
          id="userId"
          name="userId"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="User ID"
        />
      </div>
      <div>
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="First Name"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Last Name"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="sr-only">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Mobile Number"
        />
      </div>
    </>
  );

  const renderInterviewerFields = () => (
    <>
      <div>
        <label htmlFor="userId" className="sr-only">
          User ID
        </label>
        <input
          id="userId"
          name="userId"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="User ID"
        />
      </div>
      <div>
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="First Name"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Last Name"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="sr-only">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Mobile Number"
        />
      </div>
    </>
  );

  const renderCompanyFields = () => (
    <>
      <div>
        <label htmlFor="companyId" className="sr-only">
          Company ID
        </label>
        <input
          id="companyId"
          name="companyId"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Company ID"
        />
      </div>
      <div>
        <label htmlFor="companyName" className="sr-only">
          Company Name
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Company Name"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="sr-only">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Mobile Number"
        />
      </div>
    </>
  );

  const getTitle = () => {
    switch (type) {
      case 'candidate':
        return 'Candidate';
      case 'interviewer':
        return 'Interviewer';
      case 'company':
        return 'Company';
      default:
        return '';
    }
  };

  const getRegistrationFields = () => {
    if (!isLogin) {
      switch (type) {
        case 'candidate':
          return renderCandidateFields();
        case 'interviewer':
          return renderInterviewerFields();
        case 'company':
          return renderCompanyFields();
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? `${getTitle()} Login` : `${getTitle()} Registration`}
          </h2>
          <div className="mt-2 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {getRegistrationFields()}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
                  isLogin ? 'rounded-t-md' : ''
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {isLogin ? (
                  <LogIn className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
                ) : (
                  <UserPlus className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
                )}
              </span>
              {isLogin ? 'Sign in' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}