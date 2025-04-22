
import { Archetype, MythJourney } from "@/store/useStore";

const archetypeDescriptions: Record<Archetype, string> = {
  Hero: "The Hero embarks on a journey, overcomes challenges, and returns transformed. Your path is one of courage, perseverance, and triumph over adversity.",
  Explorer: "The Explorer seeks new horizons, embraces freedom, and discovers hidden truths. Your path is one of curiosity, independence, and authentic discovery.",
  Sage: "The Sage pursues knowledge, understanding, and wisdom. Your path is one of insight, clarity, and the enlightenment that comes through deep reflection.",
  Creator: "The Creator brings new ideas into being, expressing imagination and vision. Your path is one of innovation, expression, and manifesting potential.",
  Ruler: "The Ruler establishes order, creates harmony, and assumes responsibility. Your path is one of leadership, organization, and conscious power.",
  Caregiver: "The Caregiver nurtures, protects, and supports others. Your path is one of compassion, generosity, and finding fulfillment through service.",
  Innocent: "The Innocent maintains faith, optimism, and purity. Your path is one of trust, openness, and rediscovering wonder in a complex world.",
  Magician: "The Magician transforms reality, accesses hidden knowledge, and manifests visions. Your path is one of personal power, transformation, and consciousness.",
  Lover: "The Lover seeks connection, passion, and harmony. Your path is one of intimacy, commitment, and the ecstasy of deep relationship.",
  Jester: "The Jester brings joy, laughter, and refreshing perspective. Your path is one of playfulness, spontaneity, and the wisdom found through lightheartedness.",
  Outlaw: "The Outlaw challenges convention, disrupts the status quo, and breaks limiting rules. Your path is one of revolution, liberation, and radical authenticity.",
  Orphan: "The Orphan endures hardship, develops resilience, and finds belonging. Your path is one of interdependence, realism, and the strength found through vulnerability."
};

const archetypeSymbols: Record<Archetype, string[]> = {
  Hero: ["Sword", "Mountain", "Crown", "Shield", "Dragon"],
  Explorer: ["Map", "Compass", "Horizon", "Path", "Star"],
  Sage: ["Book", "Owl", "Lamp", "Tree", "Key"],
  Creator: ["Brush", "Loom", "Forge", "Seed", "Hands"],
  Ruler: ["Throne", "Crown", "Scale", "Oak", "Scepter"],
  Caregiver: ["Heart", "Hearth", "Nest", "Well", "Garden"],
  Innocent: ["Child", "Dawn", "Garden", "Lamb", "Spring"],
  Magician: ["Wand", "Crystal", "Cauldron", "Moon", "Mask"],
  Lover: ["Rose", "Wine", "Embrace", "Fire", "Bridge"],
  Jester: ["Mask", "Mirror", "Bells", "Dance", "Wind"],
  Outlaw: ["Hood", "Moon", "Crossroads", "Flame", "Mask"],
  Orphan: ["Door", "Wall", "Bridge", "Window", "Threshold"]
};

const mythicElements: string[] = [
  "Fire", "Water", "Earth", "Air", "Aether", 
  "Light", "Shadow", "Dream", "Time", "Void", 
  "Life", "Death", "Creation", "Destruction", "Transformation"
];

export function generateMythJourney(name: string, archetype: Archetype, goals: string[], struggles: string[]): MythJourney {
  // In a real app, this would call an AI service
  // For now, we'll create a deterministic journey based on the inputs
  
  const title = `The ${archetype}'s Journey: ${struggles[0] ? `Overcoming ${struggles[0]}` : "Path of Discovery"}`;
  
  const description = `${name}, you are walking the path of the ${archetype}. ${archetypeDescriptions[archetype]} 
    Your journey will transform your struggles into strengths and guide you toward your highest aspirations.`;
  
  // Create 3 chapters for the journey
  const chapters = [
    {
      id: "chapter1",
      title: "The Call to Adventure",
      description: `You stand at the threshold of transformation. The old patterns of ${struggles[0] || "limitation"} have prepared you for this moment of departure.`,
      quest: `Identify and acknowledge the patterns that have kept you in ${struggles[0] || "limitation"}. Write these insights in your journal.`,
      insight: "The first step of transformation is awareness of what must change.",
      completed: false
    },
    {
      id: "chapter2",
      title: "Crossing the Threshold",
      description: `Now you must leave familiar territory behind. The comfort of the known gives way to the promise of ${goals[0] || "growth"}.`,
      quest: `Take one concrete action toward ${goals[0] || "your aspiration"} that feels uncomfortable but necessary.`,
      insight: "Growth happens at the edge of comfort, where fear and possibility meet.",
      completed: false
    },
    {
      id: "chapter3",
      title: "The Road of Trials",
      description: `Your journey intensifies as you face the guardians of your ${struggles[1] || "fear"}. Each challenge is a teacher, each setback a gift.`,
      quest: `When you encounter resistance toward ${goals[0] || "your goal"}, pause and ask: what is this teaching me?`,
      insight: "The obstacles on your path are not opposing you; they are directing you.",
      completed: false
    }
  ];
  
  // Select symbols and elements
  const symbols = archetypeSymbols[archetype].slice(0, 3);
  const elements = mythicElements.sort(() => Math.random() - 0.5).slice(0, 3);
  
  return {
    id: `journey-${Date.now()}`,
    title,
    description,
    chapters,
    symbols,
    elements
  };
}

export const quizQuestions = [
  {
    id: "q1",
    question: "When faced with a challenge, I typically:",
    options: [
      { value: "Hero", text: "Tackle it head-on, seeing it as something to overcome" },
      { value: "Magician", text: "Look for creative solutions that transform the situation" },
      { value: "Explorer", text: "See it as an opportunity to learn something new" },
      { value: "Caregiver", text: "Consider how it affects others and how I can help" }
    ]
  },
  {
    id: "q2",
    question: "I find the most fulfillment in:",
    options: [
      { value: "Sage", text: "Understanding deeply and sharing wisdom" },
      { value: "Creator", text: "Expressing myself and bringing new things to life" },
      { value: "Lover", text: "Connecting deeply with others and experiencing beauty" },
      { value: "Ruler", text: "Creating order and helping systems work efficiently" }
    ]
  },
  {
    id: "q3",
    question: "Others often come to me when they need:",
    options: [
      { value: "Caregiver", text: "Support, comfort, and nurturing" },
      { value: "Sage", text: "Advice, perspective, and wisdom" },
      { value: "Jester", text: "Lightness, humor, and a fresh perspective" },
      { value: "Hero", text: "Courage, decisive action, and protection" }
    ]
  },
  {
    id: "q4",
    question: "I'm most afraid of:",
    options: [
      { value: "Innocent", text: "Corruption, negativity, and being misled" },
      { value: "Orphan", text: "Abandonment, exploitation, and being alone" },
      { value: "Explorer", text: "Conformity, confinement, and stagnation" },
      { value: "Ruler", text: "Chaos, overthrow, and losing control" }
    ]
  },
  {
    id: "q5",
    question: "My approach to rules and traditions is:",
    options: [
      { value: "Outlaw", text: "Question them; break them if necessary for authenticity" },
      { value: "Ruler", text: "Uphold them; they create necessary structure" },
      { value: "Jester", text: "Play with them; they're useful but shouldn't be rigid" },
      { value: "Innocent", text: "Follow them; they provide security and guidance" }
    ]
  }
];

export function determineArchetype(answers: Record<string, Archetype>): Archetype {
  // Count occurrences of each archetype
  const counts: Partial<Record<Archetype, number>> = {};
  
  Object.values(answers).forEach(archetype => {
    counts[archetype] = (counts[archetype] || 0) + 1;
  });
  
  // Find the most frequent archetype
  let maxCount = 0;
  let dominantArchetype: Archetype = 'Hero'; // Default
  
  Object.entries(counts).forEach(([archetype, count]) => {
    if (count && count > maxCount) {
      maxCount = count;
      dominantArchetype = archetype as Archetype;
    }
  });
  
  return dominantArchetype;
}
