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
  
import PlayerRow from "./PlayerRow"






export default function BoxScore () {

    return (
        <Table>
  <TableCaption>Box Score.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Player</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <PlayerRow/>
  </TableBody>
</Table>

    )
}