import { createstudent, findAllstudent } from "@/app/(main-website)/student/services/students";
import prisma from "@/app/lib/db";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const jsonBody = await req.json() as Prisma.StudentCreateInput
    const newDoc = await createstudent(jsonBody)
    return NextResponse.json({
        message: "เพิ่มสำเร็จ",
        data: newDoc
    });
}
export async function GET() {
    const Student = await findAllstudent();
    return NextResponse.json({
        data: Student
    })
}
