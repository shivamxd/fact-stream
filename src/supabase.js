import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "database_url_here";
const supabaseKey =
  "your_key_here";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
