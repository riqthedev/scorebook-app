"use client"
import { useState } from "react"
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

export interface Player {
    id: number;
    status: string;
    playerName: string;
    points: number;
    rebounds: number;
    fouls: number;
    plus: number;
}


export type Stat = "rebounds" | "steals" | "FT" | "2P" | "3P" | "Miss 3P" | "Miss 2P" | "Miss FT" | "assist" | "block" | "foul"


type Players = Player[]

const initialPlayers: Players = [
    { id: 1, status: "Active", playerName: "K.Durant", points: 29, rebounds: 4, fouls: 0, plus: 90},
    { id: 2, status: "Active", playerName: "S,Curry", points: 40, rebounds: 2, fouls: 1, plus: 90},
    { id: 3, status: "Active", playerName: "D.Green", points: 5, rebounds: 10, fouls: 4, plus: 90},
    { id: 4, status: "Active", playerName: "J.Poole", points: 15, rebounds: 4, fouls: 1, plus: 90},
    { id: 5, status: "Active", playerName: "K.Thompson", points: 10, rebounds: 4, fouls: 2, plus: 90},
    { id: 6, status: "Active", playerName: "K.Looney", points: 2, rebounds: 18, fouls: 2, plus: 20 }
]
const absurd = (x: never) => { }

const updateStatGenerator = (players: Players, setPlayers: React.Dispatch<React.SetStateAction<Players>>, id: Number): (stat: Stat) => void  => {
    const player = players.find((player) => player.id == id)
    return (stat: Stat): void => {
        if (!player) {
            return 
        }
        switch (stat) {
            case "2P":
                player.points += 2
                players.forEach((teammate) => teammate.plus += 2)
                setPlayers([...players])
                return 
            default:
                absurd(stat)
                return
        }


    }

}


export default function PlayerRows() {

    const [players, setPlayers] = useState<Players>(initialPlayers)
    





    return (
        <>
            {players.map(player => (
                <TableRow key={player.id}>
                    <TableCell>{player.status}</TableCell>
                    <TableCell>{player.playerName}</TableCell>
                    <TableCell>{player.points}</TableCell>
                    <TableCell>{player.rebounds}</TableCell>
                    <TableCell>{player.fouls}</TableCell>
                    <TableCell>{player.plus}</TableCell>
                    <TableCell> <PlayerButtons updateStat={updateStatGenerator(players, setPlayers, player.id)}/> </TableCell>
                </TableRow>
            ))}
        </>
    )
}