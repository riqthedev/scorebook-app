"use client"

import { Button } from "../ui/button"
import { Player, Stat } from "../shared/PlayerRows" 

interface Props {
    updateStat: (stat: Stat) => void
    player: Player
}

export default function PlayerButtons (props: Props) {
    const {updateStat, player} = props
    
    return (
        <div className="player-buttons">
            <Button className="bg-red-500">+</Button>
            <Button>-</Button>
            <Button onClick={() => updateStat("2P")} disabled={!player.active}>Made 2PT</Button>
            <Button>Miss 2PT</Button>
            <Button>Made 3PT</Button>
            <Button>Miss 3PT</Button>
            <Button>Foul</Button>
            <Button>Reb</Button>
        </div>
    )
}
