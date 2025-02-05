import prisma from "@/app/lib/db";
import { Prisma } from "@prisma/client";
import exp from "constants";
export async function findAllstudent() {
    return await prisma.student.findMany({
        orderBy: {id: "desc"}
    })
}
export function findByIdStudent(id: string){
    return prisma.student.findUnique({
        where: { id: id}
    })
}
export async function createstudent(student: Prisma.StudentCreateInput){
    return await prisma.student.create({
        data: student
    })
}
export async function updatestudent(id: string, student: Prisma.StudentUpdateInput){
    return await prisma.student.update({
        where: {id: id},
        data: student
    });
}
export async function removeStudent(id: string){
    return await prisma.student.delete({
        where: {id: id}
    })
}
export async function countStudent() {
    return await prisma.student.count();
}
