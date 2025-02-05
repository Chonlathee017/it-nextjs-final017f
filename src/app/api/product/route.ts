import { createProduct, findAllProduct, findByIdProduct, updateProudct } from "@/app/(main-website)/product/services/products";
import prisma from "@/app/lib/db";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const jsonBody = await req.json() as Prisma.ProductCreateInput
    const newDoc = await createProduct(jsonBody)
    return NextResponse.json({
        message: "เพิ่มสำเร็จ",
        data: newDoc
    });
}

export async function GET() {
    const product = await findAllProduct();
    return NextResponse.json({
        data: product
    })
}
