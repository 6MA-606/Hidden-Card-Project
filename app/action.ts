import axios from "axios"

export async function getAllCards() {

  let cards = []

  try {
    const res = await axios.get('/api/cards')
    cards = res.data
  } catch (error) {
    console.error(error)
  }

  return cards
}