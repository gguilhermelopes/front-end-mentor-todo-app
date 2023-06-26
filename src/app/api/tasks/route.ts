import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
  });

  return NextResponse.json({ tasks });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { newTask, isChecked } = await req.json();

  if (!newTask) {
    return NextResponse.json(
      { errorMessage: "Invalid data provided." },
      { status: 400 }
    );
  }

  const taskAdd = await prisma.task.create({
    data: {
      task: newTask,
      isChecked,
    },
  });

  return NextResponse.json(taskAdd, {
    status: 200,
    headers: {},
  });
}

export async function DELETE(req: NextRequest) {
  const tasks = await prisma.task.deleteMany({
    where: {
      isChecked: true,
    },
  });

  if (!tasks) {
    return NextResponse.json(
      { errorMessage: "No tasks marked as checked!" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    response: "Tasks deleted!",
  });
}
