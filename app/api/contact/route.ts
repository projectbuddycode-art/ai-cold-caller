import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    console.log("Incoming body:", body);

    // Normalize fields - accept both ContactForm and ContactFormModal formats
    const name = body?.fullName || body?.name || "";
    const email = body?.email || "";
    const company = body?.company || "";
    const budget = body?.budget || "";
    const projectType = body?.projectType || "";
    const timeline = body?.timeline || "";
    const message = body?.message || body?.requirement || "";

    // Validate required fields (only name, email, and message are required)
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.fullName = "Full name is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!message.trim() || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Insert into Supabase "leads" table
    const { error } = await supabase
      .from('leads')
      .insert([{ name, email, company, budget, projectType, timeline, message }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to save lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown server error" },
      { status: 500 }
    );
  }
}
