import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://scgqnxwmgnlzokkngiog.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZ3FueHdtZ25sem9ra25naW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMzc4MzEsImV4cCI6MjA0MzcxMzgzMX0.f7U8vikGcFfO2n29xBoyn3FrltZLjxSdRhTT5FL_7m4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
