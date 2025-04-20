
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const CARDS = [
  { id: 1, emoji: '🎂' },
  { id: 2, emoji: '🎈' },
  { id: 3, emoji: '🎁' },
  { id: 4, emoji: '🎊' },
  { id: 5, emoji: '🌟' },
  { id: 6, emoji: '🎵' },
].flatMap(card => [{ ...card, matchId: card.id }, { ...card, matchId: card.id }]);

const Game = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState(() => 
    [...CARDS].sort(() => Math.random() - 0.5).map((card, index) => ({
      ...card,
      index,
      isFlipped: false,
      isMatched: false
    }))
  );
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (cards[first].matchId === cards[second].matchId) {
        setCards(prev => prev.map((card, idx) =>
          idx === first || idx === second ? { ...card, isMatched: true } : card
        ));
        setMatches(m => m + 1);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) =>
            idx === first || idx === second ? { ...card, isFlipped: false } : card
          ));
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    if (matches === CARDS.length / 2) {
      setTimeout(() => navigate('/gift'), 1500);
    }
  }, [matches, navigate]);

  const handleCardClick = (index: number) => {
    if (selectedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;
    
    setCards(prev => prev.map((card, idx) =>
      idx === index ? { ...card, isFlipped: true } : card
    ));
    setSelectedCards(prev => [...prev, index]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">Match the Birthday Cards!</h2>
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {cards.map((card, index) => (
          <Card 
            key={index}
            className={`h-24 flex items-center justify-center text-4xl cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              card.isFlipped || card.isMatched ? 'bg-white' : 'bg-purple-500'
            }`}
            onClick={() => handleCardClick(index)}
          >
            {(card.isFlipped || card.isMatched) ? card.emoji : '🎀'}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Game;
