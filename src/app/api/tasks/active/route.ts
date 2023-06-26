import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const tasks = await prisma.task.findMany({
    where: { isChecked: false },
  });

  return NextResponse.json({ tasks });
}
