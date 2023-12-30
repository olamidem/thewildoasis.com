/* eslint-disable no-undef */

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lfxjjzwgvmtqpzlltwtf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmeGpqendndm10cXB6bGx0d3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3Njk1MjcsImV4cCI6MjAxOTM0NTUyN30.G6xzNdZSK6IKAUGQfZUulh_hqI9ANdBUSXtCdgSNEts";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
