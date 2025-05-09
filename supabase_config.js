// supabase_config.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dzheqitkbxewpecuyske.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6aGVxaXRrYnhld3BlY3V5c2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MzIwOTYsImV4cCI6MjA2MjMwODA5Nn0.dQmD3kmUPQhk9hd1z8iFBXheaJFZk7Q-YnjF_mREZZQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
