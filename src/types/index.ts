export interface Job {
  id: number;
  company: string;
  role: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
}

export type JobStatus = Job['status'];

// Form types
export interface JobFormData {
  company: string;
  role: string;
  status: JobStatus;
}

