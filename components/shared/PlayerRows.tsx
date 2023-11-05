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
    // TODO : implement minus 
}


export type Stat = "rebound" | "steal" | "FT" | "2P" | "3P" | "Miss 3P" | "Miss 2P" | "Miss FT" | "assist" | "block" | "foul" | "sub"


type Players = Player[]

const initialPlayers: Players = [
    { id: 1, active: true, playerName: "K.Durant", points: 29, rebounds: 4, fouls: 0, plus: 0 },
    { id: 2, active: true, playerName: "S.Curry", points: 40, rebounds: 2, fouls: 1, plus: 0 },
    { id: 3, active: true, playerName: "D.Green", points: 5, rebounds: 10, fouls: 4, plus: 0 },
    { id: 4, active: true, playerName: "J.Poole", points: 15, rebounds: 4, fouls: 1, plus: 0 },
    { id: 5, active: true, playerName: "K.Thompson", points: 10, rebounds: 4, fouls: 2, plus: 0 },
    { id: 6, active: false, playerName: "K.Looney", points: 2, rebounds: 18, fouls: 2, plus: 0 }
]
const absurd = (x: never) => { }

const updateStatGenerator = (players: Players, setPlayers: React.Dispatch<React.SetStateAction<Players>>, id: Number): (stat: Stat) => void => {
    const player = players.find((player) => player.id == id)
    return (stat: Stat): void => {
        if (!player) {
            return
        }
        switch (stat) {
            case "2P":
                player.points += 2
                players.filter((teammate) => teammate.active).forEach((teammate) => teammate.plus += 2)
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



export default function PlayerRows() {

    const [players, setPlayers] = useState<Players>(initialPlayers)






    return (
        <>
            {players.map(player => {
                const updateStat = updateStatGenerator(players, setPlayers, player.id)
                const cantSub = player.active || players.filter((teammate) => teammate.active).length < 5 
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