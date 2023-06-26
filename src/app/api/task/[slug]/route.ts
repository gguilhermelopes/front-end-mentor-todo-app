import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: number } }
) {
  const { slug } = params;
  const task = await prisma.task.delete({
    where: {
      id: +slug,
    },
  });

  if (!task) {
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    response: "Task deleted!",
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { slug: number } }
) {
  const { slug } = params;
  const { isChecked } = await req.json();
  const task = await prisma.task.update({
    where: {
      id: +slug,
    },
    data: {
      isChecked,
    },
  });

  return NextResponse.json({ task });
}
