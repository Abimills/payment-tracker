const allQuotes = [
  {
    id: 1,
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  },
  {
    id: 2,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    id: 3,
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 4,
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
  },
  {
    id: 5,
    quote: "Believe you can and you're halfway there.",
  },
  {
    id: 6,
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
  {
    id: 7,
    quote: "The harder I work, the luckier I get.",
  },
  {
    id: 8,
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    id: 9,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
  },
  {
    id: 10,
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  },
  {
    id: 11,
    quote:
      "Choose a job you love, and you will never have to work a day in your life.",
  },
  {
    id: 12,
    quote: "Success is not in what you have, but who you are.",
  },
  {
    id: 13,
    quote: "The secret of getting ahead is getting started.",
  },
  {
    id: 14,
    quote:
      "The only place where success comes before work is in the dictionary.",
  },
  {
    id: 15,
    quote: "Don't be afraid to give up the good to go for the great.",
  },
  {
    id: 16,
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 17,
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    id: 18,
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
  },
  {
    id: 19,
    quote: "I find that the harder I work, the more luck I seem to have.",
  },
  {
    id: 20,
    quote: "Don't be busy. Be productive.",
  },
  {
    id: 21,
    quote: "The mind is everything. What you think, you become.",
  },
  {
    id: 22,
    quote:
      "Success is not just about making money. It's about making a difference.",
  },
  {
    id: 23,
    quote:
      "The greatest pleasure in life is doing what people say you cannot do.",
  },
  {
    id: 24,
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
  },
  {
    id: 25,
    quote: "The future depends on what you do today.",
  },
  {
    id: 26,
    quote: "You are never too old to set another goal or to dream a new dream.",
  },
  {
    id: 27,
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  },
  {
    id: 28,
    quote: "Dream big and dare to fail.",
  },
  {
    id: 29,
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
  },
  {
    id: 30,
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 31,
    quote: "Work hard in silence, let success be your noise.",
  },
  {
    id: 32,
    quote: "Success is not in what you have, but who you are.",
  },
  {
    id: 33,
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    id: 34,
    quote: "Don't be afraid to give up the good to go for the great.",
  },
  {
    id: 35,
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 36,
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    id: 37,
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
  },
  {
    id: 38,
    quote: "I find that the harder I work, the more luck I seem to have.",
  },
  {
    id: 39,
    quote: "Don't be busy. Be productive.",
  },
  {
    id: 40,
    quote: "The mind is everything. What you think, you become.",
  },
  {
    id: 41,
    quote:
      "Success is not just about making money. It's about making a difference.",
  },
  {
    id: 42,
    quote:
      "The greatest pleasure in life is doing what people say you cannot do.",
  },
  {
    id: 43,
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
  },
  {
    id: 44,
    quote: "The future depends on what you do today.",
  },
  {
    id: 45,
    quote: "You are never too old to set another goal or to dream a new dream.",
  },
  {
    id: 46,
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  },
  {
    id: 47,
    quote: "Dream big and dare to fail.",
  },
  {
    id: 48,
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
  },
  {
    id: 49,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    id: 50,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
  },
  {
    id: 51,
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  },
  {
    id: 52,
    quote:
      "Choose a job you love, and you will never have to work a day in your life.",
  },
  {
    id: 53,
    quote: "Success is not in what you have, but who you are.",
  },
  {
    id: 54,
    quote: "The secret of getting ahead is getting started.",
  },
  {
    id: 55,
    quote:
      "The only place where success comes before work is in the dictionary.",
  },
  {
    id: 56,
    quote: "Don't be afraid to give up the good to go for the great.",
  },
  {
    id: 57,
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 58,
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    id: 59,
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
  },
  {
    id: 60,
    quote: "I find that the harder I work, the more luck I seem to have.",
  },
  {
    id: 61,
    quote: "Don't be busy. Be productive.",
  },
  {
    id: 62,
    quote: "The mind is everything. What you think, you become.",
  },
  {
    id: 63,
    quote:
      "Success is not just about making money. It's about making a difference.",
  },
  {
    id: 64,
    quote:
      "The greatest pleasure in life is doing what people say you cannot do.",
  },
  {
    id: 65,
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
  },
  {
    id: 66,
    quote: "The future depends on what you do today.",
  },
  {
    id: 67,
    quote: "You are never too old to set another goal or to dream a new dream.",
  },
  {
    id: 68,
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  },
  {
    id: 69,
    quote: "Dream big and dare to fail.",
  },
  {
    id: 70,
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
  },
  {
    id: 71,
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 72,
    quote: "Work hard in silence, let success be your noise.",
  },
  {
    id: 73,
    quote: "Success is not in what you have, but who you are.",
  },
  {
    id: 74,
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    id: 75,
    quote: "Don't be afraid to give up the good to go for the great.",
  },
  {
    id: 76,
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 77,
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    id: 78,
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
  },
  {
    id: 79,
    quote: "I find that the harder I work, the more luck I seem to have.",
  },
  {
    id: 80,
    quote: "Don't be busy. Be productive.",
  },
  {
    id: 81,
    quote: "The mind is everything. What you think, you become.",
  },
  {
    id: 82,
    quote:
      "Success is not just about making money. It's about making a difference.",
  },
  {
    id: 83,
    quote:
      "The greatest pleasure in life is doing what people say you cannot do.",
  },
  {
    id: 84,
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
  },
  {
    id: 85,
    quote: "The future depends on what you do today.",
  },
  {
    id: 86,
    quote: "You are never too old to set another goal or to dream a new dream.",
  },
  {
    id: 87,
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  },
  {
    id: 88,
    quote: "Dream big and dare to fail.",
  },
  {
    id: 89,
    quote:
      "Success is not the absence of failure; it's the persistence through failure.",
  },
  {
    id: 90,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
  },
  {
    id: 91,
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  },
  {
    id: 92,
    quote:
      "Choose a job you love, and you will never have to work a day in your life.",
  },
  {
    id: 93,
    quote: "Success is not in what you have, but who you are.",
  },
  {
    id: 94,
    quote: "The secret of getting ahead is getting started.",
  },
  {
    id: 95,
    quote:
      "The only place where success comes before work is in the dictionary.",
  },
  {
    id: 96,
    quote: "Don't be afraid to give up the good to go for the great.",
  },
  {
    id: 97,
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 98,
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    id: 99,
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
  },
  {
    id: 100,
    quote: "I find that the harder I work, the more luck I seem to have.",
  },
  {
    id: 103,
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  },
  {
    id: 104,
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    id: 105,
    quote: "The only way to do great work is to love what you do.",
  },
  {
    id: 106,
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
  },
  {
    id: 107,
    quote: "Believe you can and you're halfway there.",
  },
  {
    id: 108,
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
  {
    id: 109,
    quote: "The harder I work, the luckier I get.",
  },
];
export default allQuotes;
