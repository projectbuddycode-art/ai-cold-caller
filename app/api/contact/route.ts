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

    // Normalize fields
    const name = body?.name || body?.fullName || "";
    const email = body?.email || "";
    const company = body?.company || "";
    const message = body?.message || "";

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push("name/fullName");
    if (!email) missingFields.push("email");
    if (!message) missingFields.push("message");
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required field(s): ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Insert into Supabase "leads" table
    const { error } = await supabase
      .from('leads')
      .insert([{ name, email, company, message }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save lead" },
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
