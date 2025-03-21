import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import JobDetails from './components/jobs/JobDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/:type" element={<AuthPage />} />
          <Route path="/dashboard/:userType" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;