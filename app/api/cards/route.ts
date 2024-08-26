import { prisma } from "@/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  try {
    const cards = await prisma.card.findMany()
    return NextResponse.json(cards)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}