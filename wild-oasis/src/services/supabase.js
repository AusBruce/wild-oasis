import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://awzhekrqsocwkmdkqvkq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3emhla3Jxc29jd2ttZGtxdmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MjQ4NTUsImV4cCI6MjA1NjMwMDg1NX0.gXmwVqVL_A6aHcg4cIeRUhyCo7BX_9bFIOcoeAWFFaw')

export default supabase;