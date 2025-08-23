import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import SessionDetail from './components/SessionDetail';
import PatientDiary from './components/PatientDiary';
import Security from './components/Security';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <SessionDetail />
        <PatientDiary />
        <Security />
      </main>
      <Footer />
    </div>
  );
}

export default App;