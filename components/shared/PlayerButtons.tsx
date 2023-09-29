"use client"

import { Button } from "../ui/button"


export default function PlayerButtons () {

    return (
        <div className="player-buttons">
            <Button>+</Button>
            <Button>-</Button>
            <Button>Made 2PT</Button>
            <Button>Miss 2PT</Button>
            <Button>Made 3PT</Button>
            <Button>Miss 3PT</Button>
        </div>
    )
}