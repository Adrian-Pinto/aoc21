export default (randomNumbers, bingoCards) => {
  let score;
  for (const randomNum of randomNumbers) {
    let winnerCard;
    for (const [cardI, card] of bingoCards.entries()) {
      card.forEach((row) => {
        const matchIndex = row.indexOf(randomNum);
        if (matchIndex !== -1) row.splice(matchIndex, 1);
      });
      if (card.some((row) => !row.length)) {
        winnerCard = bingoCards[cardI]
          .slice(0, 5)
          .flat()
          .reduce((sum, number) => +sum + +number, 0);
        break;
      }
    }
    if (winnerCard) {
      score = randomNum * winnerCard;
      break;
    }
  }
  return score;
};
