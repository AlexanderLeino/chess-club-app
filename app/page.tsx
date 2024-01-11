import Image from 'next/image'
import chess from '../public/chessclub.jpg'
import chessWinner from '../public/chess-winner.jpg'
import chessAllAges from '../public/chess-all-ages.jpg'
import chessBoard from '../public/chessboard.jpg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">
<Carousel
opts={{
  align: "center",
  loop: true,
  active: true,
  
  }}>
<CarouselPrevious/>
<CarouselContent>
<CarouselItem className='flex justify-center'>
<Image src={chess} height={850} alt='something spicy' />
</CarouselItem>
<CarouselItem className='flex justify-center'>
<Image src={chessWinner} height={850} alt='something spicy' />
</CarouselItem>
<CarouselItem className='flex justify-center'>
<Image src={chessAllAges} height={850} alt='something spicy' />
</CarouselItem>
</CarouselContent>
<CarouselNext/>
</Carousel>

</main>
  )
}
