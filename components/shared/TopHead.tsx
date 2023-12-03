"use client"
import React from "react";
import { TableHeader, TableRow, TableHead, Table, TableBody, TableCell } from "@/components/ui/table"



export default function TopHead() {

    return (
        <TableHeader>
            <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Player</TableHead>
                <TableHead>PTS</TableHead>
                <TableHead>REB</TableHead>
                <TableHead>AST</TableHead>
                <TableHead>Fouls</TableHead>
                <TableHead>+/-</TableHead>
            </TableRow>
        </TableHeader>

    )

}