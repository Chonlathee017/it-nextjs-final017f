import { NextResponse } from "next/server";

export function GET(){ 
    return NextResponse.json({
        message: "Next.js API V1.00 Running...."
    })
}