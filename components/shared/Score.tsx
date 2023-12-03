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


export default function Score() {
    

    return (
        <Card className="card">
            <CardHeader>
            </CardHeader>
            <CardContent className="card-ele">
                <p>Home:</p>
                <p>Away:</p>
            </CardContent>
        </Card>

    )
}