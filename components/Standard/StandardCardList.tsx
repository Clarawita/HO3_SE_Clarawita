import { StandardCard } from "./StandardCard";
import type { CardProps } from "./StandardCard";

type StCardListProps = {
  cards: CardProps[];
};

function StCardList ({cards}: StCardListProps){
  return (
    <div className="grid grid-cols-4 gap-8">
      {cards.map((card, index) => (
        <StandardCard key={index} {...card}/>
      ))}
    </div>
  )
}

export {StCardList};