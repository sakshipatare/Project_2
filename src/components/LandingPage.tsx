import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, UserCheck, Brain } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Transform Your</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Hiring Process</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  AI-powered recruitment platform connecting candidates, interviewers, and companies for seamless hiring experiences.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/auth/company"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Team working"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to hire
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">For Candidates</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Find your dream job with AI-matched opportunities and streamlined applications.
                  </p>
                  <Link
                    to="/auth/candidate"
                    className="mt-3 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">For Interviewers</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Conduct efficient interviews with AI-powered assessment tools.
                  </p>
                  <Link
                    to="/auth/interviewer"
                    className="mt-3 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">For Companies</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Transform your hiring process with AI-driven candidate matching.
                  </p>
                  <Link
                    to="/auth/company"
                    className="mt-3 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}