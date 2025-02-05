import { findByIdProduct, updateProudct } from "@/app/(main-website)/product/services/products";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: {params: {id: string}}) {
    try {
        const product = await findByIdProduct(params.id)
        if(!product) {
            return NextResponse.json({
                message: "ไม่พบสินค้า"
            },{status: 404})
        }
        const jsonBody = await req.json() as Prisma.StudentUpdateInput
        const updateData = await updateProudct(params.id, jsonBody);
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