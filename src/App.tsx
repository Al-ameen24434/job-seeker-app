import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import JobTracker from './pages/jobTracker';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/jobs" element={<JobTracker />} />
        </Routes>
      </main>
    </div>
  );
}