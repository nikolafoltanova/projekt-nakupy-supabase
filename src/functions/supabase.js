import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mcomxclqeoxymrsizfnd.supabase.co';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, localStorage.getItem('key'));
};
