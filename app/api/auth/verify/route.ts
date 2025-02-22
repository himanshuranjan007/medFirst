import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function GET() {
  try {
    const token = cookies().get('auth-token')
    
    if (!token) {
      return NextResponse.json({ isValid: false })
    }

    const decoded = verify(token.value, JWT_SECRET) as { userId: string }
    
    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true }
    })

    if (!user) {
      return NextResponse.json({ isValid: false })
    }

    return NextResponse.json({ 
      isValid: true,
      userId: decoded.userId
    })
  } catch (error) {
    return NextResponse.json({ isValid: false })
  }
} 