import React from 'react';
import { useParams } from 'react-router-dom';
import CandidateDashboard from './CandidateDashboard';
import InterviewerDashboard from './InterviewerDashboard';
import CompanyDashboard from './CompanyDashboard';

export default function Dashboard() {
  const { userType } = useParams();

  const getDashboardComponent = () => {
    switch (userType) {
      case 'candidate':
        return <CandidateDashboard />;
      case 'interviewer':
        return <InterviewerDashboard />;
      case 'company':
        return <CompanyDashboard />;
      default:
        return null;
    }
  };

  return getDashboardComponent();
}