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
            <button onClick={() => updateStat("2P")} disabled={!player.active} data-testid={`2P-button-player-${player.id}`}>Made 2PT</button>
            <button onClick={() => updateStat("FT")}>FT</button>
            <button onClick={() => updateStat("rebound")}>Reb</button>
            <button onClick={() => updateStat("assist")}>Ast</button>
            <button onClick={() => updateStat("foul")}>Foul</button>
        </div>
    )
}
