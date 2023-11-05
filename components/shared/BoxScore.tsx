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
  
import PlayerRows from "./PlayerRows"
import { Button } from "../ui/button"





export default function BoxScore () {

    return (
        <Table>
  <TableCaption>Box Score</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Status</TableHead>
      <TableHead>Player</TableHead>
      <TableHead>PTS</TableHead>
      <TableHead>REB</TableHead>
      <TableHead>Fouls</TableHead>
      <TableHead>+/-</TableHead>
      <TableHead><Button>Undo</Button></TableHead> 
    </TableRow>
  </TableHeader>
  <TableBody>
    <PlayerRows/>
  </TableBody>
</Table>
 
    )
}