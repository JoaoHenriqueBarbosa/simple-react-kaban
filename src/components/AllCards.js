import React, { useEffect } from "react";
import Card from "./Card";

const AllCards = React.memo(({ cards }) => {
  useEffect(() => { }, [cards]);
  return cards.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));
});

export default AllCards;