import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, university, focus } = body;


    if (!full_name || !email) {
      return NextResponse.json({ error: 'Full name and email are required.' }, { status: 400 });
    }


    const { error } = await supabase
      .from('waitlist')
      .insert([{ full_name, email, university, focus }]);


    if (error) throw error;


    return NextResponse.json({ message: 'Successfully joined the waitlist!' }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to join waitlist. Please try again.' }, { status: 500 });
  }
}


