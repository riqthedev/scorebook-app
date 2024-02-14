'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from "react"



export default function Score( props: {home: number, away: number}) {
    
    const {home, away} = props

    return (
        <Card className="card">
            <CardHeader>
            </CardHeader>
            <CardContent className="card-ele">
                <p>Home: {home}</p>
                <p>Away: {away}</p>
            </CardContent>
        </Card>

    )
}