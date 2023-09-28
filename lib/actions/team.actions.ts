"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


interface Params {
    teamName: string 
}

export default async function createTeam({ teamName }: Params) {
    try {
        const team = await prisma.team.create({
            data: {
                teamName,
                
            }
        })
        console.log("Team created", team)
    } catch (error) {
        console.log("Problem creating team", error)
    }
}