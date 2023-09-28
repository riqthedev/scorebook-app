import * as React from "react"

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
import TeamForm from "@/components/forms/TeamForm"
import PlayerForm from "@/components/forms/PlayerForm"


export default function Home() {
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
    <TeamForm/>
    
  )
}
