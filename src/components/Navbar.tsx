import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Brain, Menu, X, User } from 'lucide-react';

// Default profile information
const defaultProfile = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname.includes('/dashboard');

  const userProfile = isDashboard ? defaultProfile : null;

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">HireInsight</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {!isDashboard ? (
              <>
                <Link to="/auth/candidate" className="text-gray-700 hover:text-indigo-600">
                  Candidate Login
                </Link>
                <Link to="/auth/interviewer" className="text-gray-700 hover:text-indigo-600">
                  Interviewer Login
                </Link>
                <Link
                  to="/auth/company"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Company Login
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  {userProfile?.avatar ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={userProfile.avatar}
                      alt="Profile"
                    />
                  ) : (
                    <User className="h-8 w-8 p-1 rounded-full bg-gray-100" />
                  )}
                  <span className="text-gray-700">{userProfile?.firstName} {userProfile?.lastName}</span>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {!isDashboard ? (
              <>
                <Link
                  to="/auth/candidate"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Candidate Login
                </Link>
                <Link
                  to="/auth/interviewer"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Interviewer Login
                </Link>
                <Link
                  to="/auth/company"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Company Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Your Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}