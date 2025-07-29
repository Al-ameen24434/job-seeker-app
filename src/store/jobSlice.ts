import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Job } from '../types';


const initialState: Job[] = [
  { id: 1, company: 'Google', role: 'Frontend Dev', status: 'Interview' },
];

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      state.push(action.payload);
    },
    removeJob: (state, action: PayloadAction<number>) => {
      return state.filter(job => job.id !== action.payload);
    },
    updateJob: (state, action: PayloadAction<Job>) => {
      const index = state.findIndex(job => job.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addJob, removeJob, updateJob } = jobSlice.actions;
export default jobSlice.reducer;