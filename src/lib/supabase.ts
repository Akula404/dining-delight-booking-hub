
import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically available after Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
  created_at?: string;
};
