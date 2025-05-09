// fetchJobs.js
import { supabase } from './supabase_config';

export async function fetchJobs() {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    return { success: false, error: error.message, jobs: [] };
  }

  return { success: true, jobs: data };
}
