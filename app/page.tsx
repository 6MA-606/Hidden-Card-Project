'use client'

import { card } from "@prisma/client"
import { getAllCards } from "./action"
import { useEffect, useState } from "react"
import HiddenCard from "@/components/HiddenCard"
import { Masonry } from "@mui/lab"

export default function Home() {
  
  const [cards, setCards] = useState<card[]>([])

  useEffect(() => {
    getAllCards().then((cards) => {
      setCards(cards)
    })
  }, [])

  return (
    <main className="min-h-screen">
      <div className="flex justify-center">
        <Masonry spacing={4} sx={{ width: '90vw' }}>
          {cards.map((card) => (
            <HiddenCard key={card.id} card={card} />
          ))}
        </Masonry>
      </div>
    </main>
  )
}
