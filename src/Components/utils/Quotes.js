export function generateRandomQuote() {
  const quotes = [
    {
      quote:
        "Action isn’t just the effect of motivation, it’s also the cause of it.",
      author: "Mark Manson",
    },
    {
      quote:
        "You will never be happy if you continue to search for what happiness consists of.",
      author: "Mark Manson",
    },
    {
      quote:
        "Who you are is defined by the values you are willing to struggle for.",
      author: "Mark Manson",
    },
    {
      quote: "It’s okay to be discouraged. It’s not okay to quit.",
      author: "Ryan Holiday",
    },
    {
      quote: "The path of least resistance is a terrible teacher.",
      author: "Ryan Holiday",
    },
    {
      quote: "Skills are cheap. Passion is priceless.",
      author: "Gary Vaynerchuk",
    },
    {
      quote: "Don’t just sit there. Do something. The answers will follow.",
      author: "Mark Manson",
    },
    {
      quote: "No matter what you do, your job is to tell your story",
      author: "Gary Vaynerchuk",
    },
    {
      quote:
        "Provide 51% of the value in a relationship, whether it’s with an employee, a client, or a stranger.",
      author: "Gary Vaynerchuk",
    },
    {
      quote: "Love your family, work super hard, live your passion.",
      author: "Gary Vaynerchuk",
    },
    {
      quote:
        "Loyalty is a two-way street. If I'm asking for it from you, then you're getting it from me.",
      author: "Harvey Specter ",
    },
    {
      quote:
        "All that is gold does not glitter, Not all those who wander are lost.",
      author: "J.R.R. Tolkien",
    },
    {
      quote: "Without music, life would be a mistake.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "You need chaos in your soul to give birth to a dancing star.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "Trial and error is freedom.",
      author: "Nassim Nicholas Taleb",
    },
    {
      quote: "Suckers try to win arguments, nonsuckers try to win.",
      author: "Nassim Nicholas Taleb",
    },
    {
      quote: "Only the autodidacts are free.",
      author: "Nassim Nicholas Taleb",
    },
    {
      quote: "Difficulty is what wakes up the genius.",
      author: "Nassim Nicholas Taleb",
    },
    {
      quote:
        "The sky above the port was the color of television, tuned to a dead channel.",
      author: "William Gibson",
    },
    {
      quote: "Things aren't different. Things are things.",
      author: "William Gibson",
    },
    {
      quote: "What matters most is how well you walk through the fire.",
      author: "Charles Bukowski",
    },
    {
      quote: "I wanted the whole world or nothing.",
      author: "Charles Bukowski",
    },
    {
      quote: "Life's as kind as you let it be.",
      author: "Charles Bukowski",
    },
    {
      quote: "Dedication makes dreams come true.",
      author: "Kobe Bryant",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "May you always remember to enjoy the road, especially when it’s a hard one.",
      author: "Kobe Bryant",
    },
    {
      quote:
        "Honesty is a very expensive gift, don't expect it from cheap people.",
      author: "Warren Buffet",
    },
    {
      quote: "Price is what you pay. Value is what you get.",
      author: "Warren Buffett",
    },
    {
      quote:
        "Someone's sitting in the shade today because someone planted a tree a long time ago.",
      author: "Warren Buffett",
    },
    {
      quote: "Never ask a barber if you need a haircut.",
      author: "Warren Buffett",
    },
    {
      quote:
        "If you can't explain it to a six year old, you don't understand it yourself.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Logic will get you from A to Z, imagination will get you everywhere.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Anyone who has never made a mistake has never tried anything new.",
      author: "Albert Einstein",
    },
    {
      quote: "A clever person solves a problem. A wise person avoids it.",
      author: "Albert Einstein",
    },
    {
      quote: "Any fool can know. The point is to understand.",
      author: " Albert Einstein",
    },
    {
      quote: "I have no special talents. I am only passionately curious.",
      author: "Albert Einstein",
    },
    {
      quote: "Stay hungry. Stay foolish.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Waste no more time arguing about what a good man should be. Be one.",
      author: "Marcus Aurelius",
    },
    {
      quote: "The best revenge is not to be like your enemy.",
      author: "Marcus Aurelius",
    },
    {
      quote: "Habits are the compound interest of self-improvement.",
      author: "James Clear",
    },
    {
      quote:
        "Every action you take is a vote for the type of person you wish to become.",
      author: "James Clear",
    },
    {
      quote: "The most important person to impress is yourself.",
      author: "Tim Urban",
    },
    {
      quote: "Almost nothing you're socially scared of is actually scary.",
      author: "Tim Urban",
    },
    {
      quote: "And in that moment, I swear we were infinite.",
      author: "Stephen Chbosky",
    },
    {
      quote: "Enjoy it. Because it's happening.",
      author: "Stephen Chbosky",
    },
    {
      quote: "Try to be a filter, not a sponge.",
      author: "Stephen Chbosky",
    },
    {
      quote:
        "Everyone thinks of changing the world, but no one thinks of changing himself.",
      author: "Leo Tolstoy",
    },
    {
      quote: "Spring is the time of plans and projects.",
      author: "Leo Tolstoy",
    },
    {
      quote: "The two most powerful warriors are patience and time.",
      author: "Leo Tolstoy",
    },
    {
      quote:
        "We can know only that we know nothing. And that is the highest degree of human wisdom.",
      author: "Leo Tolstoy",
    },
    {
      quote:
        "You are not a drop in the ocean. You are the entire ocean in a drop.",
      author: "Rumi",
    },
    {
      quote: "I don't like that man. I must get to know him better.",
      author: "Abraham Lincoln",
    },
    {
      quote: "The best way to predict your future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "You cannot escape the responsibility of tomorrow by evading it today.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Every man's happiness is his own responsibility.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "I'm just tryin to be somebody I can talk to in the morning with a smile.",
      author: "Aesop Rock",
    },
    {
      quote: "The world is yours and you can't refuse it.",
      author: "Lana Del Rey",
    },
    {
      quote:
        "Inspiration is for amateurs. The rest of us just show up and get to work.",
      author: "Chuck Close",
    },
    {
      quote: "If opportunity doesn’t knock, build a door.",
      author: "Milton Berle",
    },
    {
      quote: "Walk tall, kick ass, learn to speak Arabic, love music",
      author: "Hunter Thompson ",
    },
    {
      quote: "Focus on being productive instead of busy.",
      author: "Tim Ferris ",
    },
    {
      quote: "Time is not refundable; use it with intention.",
      author: "Unknown ",
    },
    {
      quote: "Where your attention goes, your time goes.",
      author: "Idowu Koyenikan ",
    },
    {
      quote: "There is no substitute for hard work.",
      author: " Thomas Edison",
    },
    {
      quote: "Never mistake motion for action.",
      author: "Ernest Hemingway ",
    },
    {
      quote: "Work hard, have fun, and make history.",
      author: "Jeff Bezos ",
    },
    {
      quote: "Soon is not as good as now.",
      author: " Seth Godin",
    },
    {
      quote:
        "You don’t have to see the whole staircase, just take the first step.",
      author: "Martin Luther King ",
    },
    {
      quote: "Don’t watch the clock; do what it does. Keep going.",
      author: " Sam Levenson",
    },
    {
      quote: "You have to expect things of yourself before you can do them.",
      author: "Michael Jordan",
    },
    {
      quote:
        "Sometimes, things may not go your way, but the effort should be there every single night.",
      author: "Michael Jordan ",
    },
    {
      quote: "Continuous improvement is better than delayed perfection.",
      author: " Mark Twain",
    },
    {
      quote:
        "Do the hard jobs first. The easy jobs will take care of themselves.",
      author: " Dale Carnegie",
    },
    {
      quote: "Everything you want is just outside your comfort zone.",
      author: "Robert Allen ",
    },
    {
      quote:
        "You can’t have a million dollar dream with a minimum wage worth ethic",
      author: " Stephen Hogan",
    },
    {
      quote: "Fall in love with the process, and the results will come.",
      author: " Eric Thomas",
    },
    {
      quote: "Your mind is for having ideas, not holding them",
      author: " David Allen",
    },
    {
      quote:
        "I’ll never know, and neither will you, of the life you don’t choose.",
      author: " Cheryl Strayed",
    },
    {
      quote:
        "People learn from their failures. Seldom do they learn anything from success.",
      author: "Ryan Holiday",
    },
    {
      quote: "You Are Perfect Just as You Are… But You Can Always Be Better",
      author: " Buddhism proverb",
    },
    {
      quote: "A disciplined mind brings happiness.",
      author: " Buddha",
    },
    {
      quote: "Drop by drop is the water pot filled",
      author: " Buddha",
    },
    {
      quote: "Strive on diligently. Don't give up.",
      author: " Buddha",
    },
    {
      quote:
        "You don't have to be great to start, but you have to start to be great",
      author: " Zig Ziglar",
    },
    {
      quote: "Make today worth remembering.",
      author: " Zig Ziglar",
    },
    {
      quote: "If you aim at nothing, you will hit it every time.",
      author: " Zig Ziglar",
    },
    {
      quote: "it's not how far you fall, but how high you bounce that counts.",
      author: "  Zig Ziglar",
    },
    {
      quote: "There are no traffic jams on the extra mile.",
      author: "Zig Ziglar ",
    },
    {
      quote: "Failure is an event not a person",
      author: "Zig Ziglar ",
    },
    {
      quote:
        "Outstanding people have one thing in common: an absolute sense of mission",
      author: "Zig Ziglar",
    },
    {
      quote: "Make failure your teacher, not your undertaker.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "Ability can take you to the top, but it takes character to keep you there",
      author: "Zig Ziglar",
    },
    {
      quote: "Attitude, not Aptitude, determines Altitude.",
      author: "Zig Ziglar",
    },
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}
