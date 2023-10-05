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

    const players = [
        {id: 0, status: "Active", playerName: "K.Durant", points: 29, rebounds: 4, fouls: 0},
        {id: 0, status: "Active", playerName: "S,Curry", points: 40, rebounds: 2, fouls: 1},
        {id: 0, status: "Active", playerName: "D.Green", points: 5, rebounds: 10, fouls: 4},
        {id: 0, status: "Active", playerName: "J.Poole", points: 15, rebounds: 4, fouls: 1},
        {id: 0, status: "Active", playerName: "K.Thompson", points: 10, rebounds: 4, fouls: 2},
        {id: 0, status: "Active", playerName: "K.Looney", points: 2, rebounds: 18, fouls: 2}
      ]
    
    return (
        <>
            {players.map(player => (
                <TableRow key={player.id}>
                    <TableCell>{player.status}</TableCell>
                    <TableCell>{player.playerName}</TableCell>
                    <TableCell>{player.points}</TableCell>
                    <TableCell>{player.rebounds}</TableCell>
                    <TableCell>{player.fouls}</TableCell>
                </TableRow>
            ))}
        </>
    )
}