
import { createClient } from '@supabase/supabase-js';

// When using the Lovable Supabase integration, these values are automatically available
// and don't need to be in .env files
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Make sure you have connected to Supabase through the Lovable interface.');
}

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
