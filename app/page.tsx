'use client'

import * as React from "react"
import PlayerRows, { Players } from '../components/shared/PlayerRows'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TableHeader, TableRow, TableHead, Table, TableBody, TableCell } from "@/components/ui/table"

const initialMyPlayers: Players = [
  { id: 1, active: true, playerName: "K.Durant", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 2, active: true, playerName: "S.Curry", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 3, active: true, playerName: "D.Green", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 4, active: true, playerName: "J.Poole", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 5, active: true, playerName: "K.Thompson", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 6, active: false, playerName: "K.Looney", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 }
]

const initialOpponents: Players = [
  { id: 1, active: true, playerName: "PG", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 2, active: true, playerName: "SG", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 3, active: true, playerName: "SF", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 4, active: true, playerName: "PF", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },
  { id: 5, active: true, playerName: "C", points: 0, rebounds: 0, fouls: 0, plus: 0, assists:0 },

]



export default function Home() {
  const [myPlayers, setMyPlayers] = React.useState(initialMyPlayers)
  const [opponents, setOpponents] = React.useState(initialOpponents)


  return (
    // <Card className="w-[500px] h-[500px] mt-20 ml-20 ">
    //   <CardHeader>
    //     <CardTitle>ScoreBook</CardTitle>
    //     <CardDescription>A Better Way Of Stat Tracking</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <Button className="mt-4">Guest</Button>
    //   </CardContent>
    //   <CardFooter className="flex justify-between">
    //     <Button variant="outline">Sign Up</Button>
    //     <Button variant="outline">Login</Button>
    //   </CardFooter>
    // </Card>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Status</TableHead>
          <TableHead>Player</TableHead>
          <TableHead>PTS</TableHead>
          <TableHead>REB</TableHead>
          <TableHead>AST</TableHead>
          <TableHead>Fouls</TableHead>
          <TableHead>+/-</TableHead>
          <TableHead><Button>Undo</Button></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <PlayerRows myPlayers={myPlayers} setMyPlayers={setMyPlayers} opponents={opponents} setOpponents={setOpponents} />
      
        <PlayerRows myPlayers={opponents} setMyPlayers={setOpponents} opponents={myPlayers} setOpponents={setMyPlayers} />

      </TableBody>
    </Table>

  )
}
