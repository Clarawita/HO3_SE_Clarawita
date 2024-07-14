import { StandardCard } from "./StandardCard";
import type { CardProps } from "./StandardCard";

type StCardListProps = {
  cards: CardProps[];
};

function StCardList ({cards}: StCardListProps){
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 gap-8">
      {cards.map((card, index) => (
        <StandardCard key={index} {...card}/>
      ))}
    </div>
  )
}

export {StCardList};