import { card } from "@prisma/client";

export default function HiddenCard({ card }: { card: card }) {



  return (
    <div className="w-60 bg-red-100">
      <div className="overflow-hidden break-words">{ card.content }</div>
      <div>{ card.creator }</div>
    </div>
  )
}
