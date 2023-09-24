import Image from 'next/image'
import {Card, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ScoreBook</CardTitle>
      </CardHeader>
      <Button>Start</Button>
    </Card>
  )
}
