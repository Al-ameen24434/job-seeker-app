import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAppDispatch } from '../hooks/useAppDispatch'; 
import { addJob } from '../store/jobSlice';

const schema = z.object({
  company: z.string().min(1, 'Required'),
  role: z.string().min(1, 'Required'),
  status: z.enum(['Applied', 'Interview', 'Offer', 'Rejected']),
});

export default function JobForm() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    const job = { ...data, id: Date.now() };
    dispatch(addJob(job));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="job-form">
      <h2>Add New Job</h2>
      <div className="form-group">
        <label>Company</label>
        <input {...register('company')} />
        {errors.company && <p>{String(errors.company.message)}</p>}
      </div>
      <div className="form-group">
        <label>Role</label>
        <input {...register('role')} />
        {errors.role && <p>{String(errors.role.message)}</p>}
      </div>
      <div className="form-group">
        <label>Status</label>
        <select {...register('status')}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Job</button>
    </form>
  );
}