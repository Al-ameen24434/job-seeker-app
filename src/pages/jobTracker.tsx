// src/pages/JobTracker.tsx
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import JobForm from '../components/jobForm';
import JobList from '../components/jobList';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { removeJob } from '../store/jobSlice';

export default function JobTracker() {
  const jobs = useSelector((state: RootState) => state.jobs);
  const dispatch = useAppDispatch();

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Job Application Tracker</h2>
        <JobForm />
        <div className="job-list">
          <JobList jobs={jobs} onDelete={(id) => dispatch(removeJob(id))} />
        </div>
      </div>
    </div>
  );
}