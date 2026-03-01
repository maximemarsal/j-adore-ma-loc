import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://virfwnchfhozirejgzri.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpcmZ3bmNoZmhvemlyZWpnenJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyODcxMDYsImV4cCI6MjA4Nzg2MzEwNn0.BCUThO5lrg9XGFVbIInL1i0Hy6dNNop0LSORw-CkBKo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
