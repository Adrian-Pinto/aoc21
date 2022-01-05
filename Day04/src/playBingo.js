export default (randomNumbers, bingoCards) => {
  let score;
  for (const randomNum of randomNumbers) {
    let winCard;
    if (!winCard) {
      bingoCards.forEach((card) => {
        card.forEach((row) => {
          const matchIndex = row.indexOf(randomNum);
          if (matchIndex !== -1) row.splice(matchIndex, 1);
        });
      });
      bingoCards.forEach((card) => {
        if (card.some((row) => !row.length)) {
          const delIndex = bingoCards.findIndex((dcard) => dcard === card);
          const delCard = bingoCards.splice(delIndex, 1);
          if (bingoCards.length === 1) winCard = [...delCard];
        }
      });
    }
    if (winCard) {
      const winnerCard = winCard[0]
        .slice(0, 5)
        .flat()
        .reduce((sum, number) => +sum + +number, 0);
      score = randomNum * winnerCard;
      break;
    }
  }
  return score;
};
