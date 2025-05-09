// submit_application.js
import { supabase } from './supabase_config';

// applicationData: { job_id, name, email, phone }
// resumeFile: File object (from input[type="file"])
export async function submitApplication(applicationData, resumeFile) {
  // 1. Upload resume to storage bucket
  const fileExt = resumeFile.name.split('.').pop();
  const fileName = `${Date.now()}_${applicationData.name.replace(/\s/g, '_')}.${fileExt}`;
  const { data: uploadData, error: uploadError } = await supabase
    .storage
    .from('resumes')
    .upload(fileName, resumeFile);

  if (uploadError) {
    return { success: false, error: uploadError.message };
  }

  // 2. Get public URL for the uploaded file
  const { data: publicUrlData } = supabase
    .storage
    .from('resumes')
    .getPublicUrl(fileName);

  const resumeUrl = publicUrlData?.publicUrl;

  // 3. Insert applicant data into 'applicants' table
  const { error: insertError } = await supabase
    .from('applicants')
    .insert([{
      job_id: applicationData.job_id,
      name: applicationData.name,
      email: applicationData.email,
      phone: applicationData.phone,
      resume: resumeUrl
    }]);

  if (insertError) {
    return { success: false, error: insertError.message };
  }

  return { success: true };
}
