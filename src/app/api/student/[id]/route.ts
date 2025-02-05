import { findByIdStudent, removeStudent, updatestudent } from "@/app/(main-website)/student/services/students";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: {params: {id: string}}) {
    try {
        const student = await findByIdStudent(params.id)
        if(!student) {
            return NextResponse.json({
                message: "ไม่พบข้อมูลนักเรียน"
            },{status: 404})
        }
        const jsonBody = await req.json() as Prisma.StudentUpdateInput
        const updateData = await updatestudent(params.id, jsonBody);
        return NextResponse.json({
            message: "แก้ไขข้อมูลสำเร็จ",
            data: updateData
        });
    } catch (error) {
        return NextResponse.json({
            error: error
        },{status: 500})
    }
};
export async function DELETE(req: NextRequest, { params }: {params: {id: string}}) {
    try {
        const student = await findByIdStudent(params.id);
        if(!student){
            return NextResponse.json({
                message: "ไม่พบข้อมูล"
            },{status: 404})
        }

        const delData = await removeStudent(params.id);
        return NextResponse.json({
            message: "ลบข้อมูลสำเร็จ",
        },{status: 200})
    } catch (error) {
        return NextResponse.json({
            error: error
        },{ status: 500 })
    }
}