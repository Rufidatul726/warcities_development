import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.cookies.get("token")?.value || "";

    if(token){
        return NextResponse.json({message: "User is authenticated"}, {status: 200});
    }
    
    return NextResponse.json({message: "User is not authenticated"}, {status: 200});
}