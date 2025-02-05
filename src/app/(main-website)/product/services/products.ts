import prisma from "@/app/lib/db";
import { Prisma } from "@prisma/client";
import exp from "constants";
export async function findAllProduct() {
    return await prisma.product.findMany({
        orderBy: {id: "desc"}
    })
}
export function findByIdProduct(id: string){
    return prisma.product.findUnique({
        where: { id: id}
    })
}
export async function createProduct(product: Prisma.ProductCreateInput){
    return await prisma.product.create({
        data: product
    })
}
export async function updateProudct(id: string, product: Prisma.ProductUpdateInput){
    return await prisma.product.update({
        where: {id: id},
        data: product
    });
}
export async function removeProduct(id: string){
    return await prisma.product.delete({
        where: {id: id}
    })
}
export async function countProduct() {
    return await prisma.product.count();
}