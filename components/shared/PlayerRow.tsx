"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import PlayerButtons from "./PlayerButtons"


export default function PlayerRow() {
    
    return (
        <TableRow>
            <TableCell>K.Durant</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Points</TableCell>
            <TableCell><PlayerButtons/></TableCell>
        </TableRow>
    )
}