import { SupabaseClient } from "@supabase/supabase-js";
export * from './interfaces/db_scheme'

export function getDbClient<T>(url: string, token: string) {
  
  return new SupabaseClient<T>(url,token)

}