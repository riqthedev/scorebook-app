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
    active: boolean;
    playerName: string;
    points: number;
    rebounds: number;
    fouls: number;
    plus: number;
}


export type Stat = "rebound" | "steal" | "FT" | "2P" | "3P" | "Miss 3P" | "Miss 2P" | "Miss FT" | "assist" | "block" | "foul" | "sub"


export type Players = Player[]


const absurd = (x: never) => { }

const updateStatGenerator = (players: Players, setPlayers: React.Dispatch<React.SetStateAction<Players>>, opponents: Players, setOpponents: React.Dispatch<React.SetStateAction<Players>>, id: Number,): (stat: Stat) => void => {
    const player = players.find((player) => player.id == id)
    return (stat: Stat): void => {
        if (!player) {
            return
        }
        switch (stat) {
            case "2P":
                player.points += 2
                players.filter((teammate) => teammate.active).forEach((teammate) => teammate.plus += 2)
                opponents.filter((teammate) => teammate.active).forEach((teammate) => teammate.plus -= 2)
                setPlayers([...players])
                setOpponents([...opponents])
                return
            
            case "FT":
                player.points += 1
                players.filter((teammate) => teammate.active).forEach((teammate) => teammate.plus += 1)
                opponents.filter((teammate) => teammate.active).forEach((teammate) => teammate.plus -= 1)
                setPlayers([...players])
                return

            case "sub":
                player.active = !player.active
                setPlayers([...players])
                return

            case "rebound":
                player.rebounds += 1
                setPlayers([...players])
                return
            
            case "foul":
                while (player.fouls != 6 ) {
                    player.fouls += 1
                    setPlayers([...players])
                    return 
                }
            

            default:
                absurd(stat)
                return
        }


    }

}



export default function PlayerRows(props: {myPlayers: Players, setMyPlayers: React.Dispatch<React.SetStateAction<Players>>, opponents: Players, setOpponents: React.Dispatch<React.SetStateAction<Players>> } ) {
    const {myPlayers, setMyPlayers, opponents, setOpponents } = props






    return (
        <>
            {myPlayers.map(player => {
                const updateStat = updateStatGenerator(myPlayers, setMyPlayers, opponents, setOpponents , player.id)
                const cantSub = player.active || myPlayers.filter((teammate) => teammate.active).length < 5 
                return (<TableRow key={player.id}>
                    <TableCell><input type="checkbox" disabled={!cantSub} checked={player.active} onChange={() => updateStat("sub")} /></TableCell>
                    <TableCell>{player.playerName}</TableCell>
                    <TableCell>{player.points}</TableCell>
                    <TableCell>{player.rebounds}</TableCell>
                    <TableCell>{player.fouls}</TableCell>
                    <TableCell data-testid={`plus-player-${player.id }`}>{player.plus}</TableCell>
                    <TableCell> <PlayerButtons player={player} updateStat={updateStat} /> </TableCell>
                </TableRow>)
            })}
        </>
    )
}