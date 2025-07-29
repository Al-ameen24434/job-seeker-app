// src/components/JobList.tsx
import type { Job } from '../types';

interface Props {
  jobs: Job[];
  onDelete: (id: number) => void;
}

export default function JobList({ jobs, onDelete }: Props) {
  return (
    <div className="job-list-container">
      <h3 className="job-list-title">My Applications</h3>

      {jobs.length === 0 ? (
        <p className="job-list-empty">No job applications added yet.</p>
      ) : (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job.id} className="job-list-item">
              <div className="job-list-info">
                <h4 className="job-company">{job.company}</h4>
                <p className="job-role">{job.role}</p>
                <span className={`job-status status-${job.status.toLowerCase()}`}>
                  {job.status}
                </span>
              </div>
              <button
                onClick={() => onDelete(job.id)}
                className="job-delete-btn"
                aria-label={`Delete ${job.company} application`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}