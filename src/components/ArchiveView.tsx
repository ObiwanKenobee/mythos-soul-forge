
import { useStore } from "@/store/useStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { archetypeDescriptions } from "@/lib/myths";

const ArchiveView = () => {
  const { user } = useStore();
  
  if (!user.archetype) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>No archetype assigned. Complete your profile to view the archive.</p>
      </div>
    );
  }
  
  return (
    <div className="cosmic-card h-full overflow-y-auto">
      <h2 className="text-2xl font-serif mb-1">Mythic Archive</h2>
      <p className="text-muted-foreground mb-6">
        Explore the ancient wisdom and symbolism that resonates with your journey.
      </p>
      
      <Tabs defaultValue="archetype" className="w-full">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="archetype" className="flex-1">Your Archetype</TabsTrigger>
          <TabsTrigger value="symbols" className="flex-1">Symbols & Elements</TabsTrigger>
          <TabsTrigger value="library" className="flex-1">Wisdom Library</TabsTrigger>
        </TabsList>
        
        <TabsContent value="archetype" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">{user.archetype}</CardTitle>
              <CardDescription>
                Your dominant mythic archetype
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{archetypeDescriptions[user.archetype]}</p>
              
              <Separator className="my-4" />
              
              <h4 className="text-sm font-medium text-mystical-300 mb-2">Historical Manifestations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-md border border-border/50">
                  <h5 className="font-medium mb-1">Mythological Figures</h5>
                  <p className="text-sm text-muted-foreground">
                    {user.archetype === 'Hero' && "Hercules, Gilgamesh, Perseus, Beowulf, Arjuna"}
                    {user.archetype === 'Explorer' && "Odysseus, Sinbad, Maui, Marco Polo, Amelia Earhart"}
                    {user.archetype === 'Sage' && "Athena, Thoth, Odin, Solomon, Manjushri"}
                    {user.archetype === 'Creator' && "Prometheus, Brahma, Ptah, Viracocha, Saraswati"}
                    {user.archetype === 'Ruler' && "Zeus, Marduk, Ra, Indra, Olodumare"}
                    {user.archetype === 'Caregiver' && "Demeter, Isis, Kuan Yin, Frigga, Mary"}
                    {user.archetype === 'Innocent' && "Persephone, Baldr, Guan Yin, St. Francis, Krishna as child"}
                    {user.archetype === 'Magician' && "Merlin, Thoth, Hermes, Odin, Circe"}
                    {user.archetype === 'Lover' && "Aphrodite, Eros, Krishna, Oshun, Freya"}
                    {user.archetype === 'Jester' && "Loki, Coyote, Hermes, Eshu, Puck"}
                    {user.archetype === 'Outlaw' && "Prometheus, Coyote, Raven, Anansi, Lucifer"}
                    {user.archetype === 'Orphan' && "Moses, Siddhartha, Romulus & Remus, Kullervo, Hephaestus"}
                  </p>
                </div>
                
                <div className="p-3 rounded-md border border-border/50">
                  <h5 className="font-medium mb-1">Cultural Traditions</h5>
                  <p className="text-sm text-muted-foreground">
                    {user.archetype === 'Hero' && "Greek heroic epics, Norse sagas, Arthurian legends, Shinto warrior codes"}
                    {user.archetype === 'Explorer' && "Polynesian wayfinding traditions, Western frontier narratives, Buddhist pilgrimage paths"}
                    {user.archetype === 'Sage' && "Vedic wisdom traditions, Platonic philosophy, Zen koans, Sufi mystic teachings"}
                    {user.archetype === 'Creator' && "Celtic bardic traditions, Renaissance humanism, Yoruba Ogun worship, tantric practices"}
                    {user.archetype === 'Ruler' && "Confucian governance principles, Egyptian pharaonic traditions, divine right of kings"}
                    {user.archetype === 'Caregiver' && "Mother goddess worship, Celtic hearth traditions, Buddhist metta practice"}
                    {user.archetype === 'Innocent' && "Shinto purity rituals, Franciscan simplicity, Taoist natural harmony"}
                    {user.archetype === 'Magician' && "Hermetic tradition, shamanic practices, Kabbalah, Tantric Buddhism"}
                    {user.archetype === 'Lover' && "Troubadour traditions, Sufi devotional practices, Tantric paths, Romantic poetry"}
                    {user.archetype === 'Jester' && "Zen trickster tales, Native American coyote stories, European carnival traditions"}
                    {user.archetype === 'Outlaw' && "Promethean myths, Norse trickster tales, revolutionary folk heroes"}
                    {user.archetype === 'Orphan' && "Exodus narratives, initiation rites, hero's journey beginnings"}
                  </p>
                </div>
              </div>
              
              <h4 className="text-sm font-medium text-mystical-300 mb-2">Shadow Aspects</h4>
              <div className="p-3 rounded-md border border-border/50 mb-4">
                <p className="text-sm text-muted-foreground">
                  {user.archetype === 'Hero' && "Martyrdom, reckless risk-taking, inability to ask for help, obsession with conquest, toxic competitiveness"}
                  {user.archetype === 'Explorer' && "Inability to commit, restless dissatisfaction, escapism, cultural appropriation, rootlessness"}
                  {user.archetype === 'Sage' && "Intellectual arrogance, analysis paralysis, disconnection from body, dogmatism, judgmental attitudes"}
                  {user.archetype === 'Creator' && "Perfectionism, chaotic process, isolation, unfinished projects, self-criticism, artistic jealousy"}
                  {user.archetype === 'Ruler' && "Authoritarianism, micromanagement, exploitation of power, rigidity, fear of chaos"}
                  {user.archetype === 'Caregiver' && "Self-neglect, enablement, martyrdom, smothering control, vicarious living"}
                  {user.archetype === 'Innocent' && "Denial of reality, gullibility, dependency, avoidance of complexity, spiritual bypassing"}
                  {user.archetype === 'Magician' && "Manipulation, ego inflation, power addiction, lack of ethical boundaries, illusion"}
                  {user.archetype === 'Lover' && "Obsession, jealousy, emotional dependency, loss of boundaries, sentimentality"}
                  {user.archetype === 'Jester' && "Irresponsibility, inappropriate humor, avoidance of seriousness, deflection, cruelty"}
                  {user.archetype === 'Outlaw' && "Self-destruction, nihilism, antisocial behavior, directionless rebellion, isolation"}
                  {user.archetype === 'Orphan' && "Chronic victimhood, inability to trust, codependency, disillusionment, cynicism"}
                </p>
              </div>
              
              <h4 className="text-sm font-medium text-mystical-300 mb-2">Growth Potential</h4>
              <div className="p-3 rounded-md border border-mystical-800/40 bg-mystical-950/20">
                <p className="text-sm">
                  {user.archetype === 'Hero' && "Learning to show vulnerability, balancing action with reflection, finding meaning beyond conquest, collaborative victory"}
                  {user.archetype === 'Explorer' && "Creating portable roots, finding depth in breadth, bringing back treasures to share with community"}
                  {user.archetype === 'Sage' && "Embodying wisdom in action, balancing knowledge with compassion, teaching through example"}
                  {user.archetype === 'Creator' && "Finishing what you start, embracing imperfection, finding the sacred in creative process"}
                  {user.archetype === 'Ruler' && "Servant leadership, empowering others, creating sustainable systems, wisdom in delegation"}
                  {user.archetype === 'Caregiver' && "Self-care integration, setting healthy boundaries, empowering rather than enabling"}
                  {user.archetype === 'Innocent' && "Maintaining hope while acknowledging darkness, discernment without cynicism, mature optimism"}
                  {user.archetype === 'Magician' && "Ethical power use, transformation for collective good, integration of shadow"}
                  {user.archetype === 'Lover' && "Unconditional love, passion with boundaries, finding the divine in relationships"}
                  {user.archetype === 'Jester' && "Wisdom through humor, speaking truth to power, joy as resistance, lightness in darkness"}
                  {user.archetype === 'Outlaw' && "Revolutionary purpose, constructive disruption, creating new paradigms"}
                  {user.archetype === 'Orphan' && "Finding belonging within, building chosen family, resilience as teacher"}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="symbols" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Archetypal Symbols</CardTitle>
                <CardDescription>
                  Powerful images that resonate with your journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {['Sword', 'Mountain', 'Crown', 'Shield', 'Dragon', 'Book', 'Owl', 'Lamp'].map(symbol => (
                    <div key={symbol} className="p-3 rounded-md border border-border/50 text-center">
                      <div className="text-3xl mb-2">
                        {symbol === 'Sword' && '⚔️'}
                        {symbol === 'Mountain' && '🏔️'}
                        {symbol === 'Crown' && '👑'}
                        {symbol === 'Shield' && '🛡️'}
                        {symbol === 'Dragon' && '🐉'}
                        {symbol === 'Book' && '📚'}
                        {symbol === 'Owl' && '🦉'}
                        {symbol === 'Lamp' && '💡'}
                      </div>
                      <div className="font-medium">{symbol}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Mythic Elements</CardTitle>
                <CardDescription>
                  Fundamental forces in your personal cosmos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {['Fire', 'Water', 'Earth', 'Air', 'Aether', 'Light', 'Shadow', 'Dream'].map(element => (
                    <div key={element} className="p-3 rounded-md border border-border/50 text-center">
                      <div className="text-3xl mb-2">
                        {element === 'Fire' && '🔥'}
                        {element === 'Water' && '💧'}
                        {element === 'Earth' && '🌎'}
                        {element === 'Air' && '💨'}
                        {element === 'Aether' && '✨'}
                        {element === 'Light' && '☀️'}
                        {element === 'Shadow' && '🌑'}
                        {element === 'Dream' && '💫'}
                      </div>
                      <div className="font-medium">{element}</div>
                      <Badge variant="outline" className="mt-1">
                        {element === 'Fire' && 'Transformation'}
                        {element === 'Water' && 'Emotion'}
                        {element === 'Earth' && 'Stability'}
                        {element === 'Air' && 'Intellect'}
                        {element === 'Aether' && 'Spirit'}
                        {element === 'Light' && 'Clarity'}
                        {element === 'Shadow' && 'Depth'}
                        {element === 'Dream' && 'Vision'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="library" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Wisdom Library</CardTitle>
              <CardDescription>
                Ancient texts and teachings aligned with your journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-md border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{user.archetype === 'Hero' ? "The Hero with a Thousand Faces" : "The Power of Myth"}</h4>
                      <p className="text-sm text-muted-foreground">Joseph Campbell</p>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>
                  <p className="text-sm mb-3">
                    {user.archetype === 'Hero' 
                      ? "Campbell's exploration of the hero's journey across world mythologies, showing a universal pattern of adventure and transformation."
                      : "Conversations between Joseph Campbell and Bill Moyers exploring how mythology illuminates stages of life."}
                  </p>
                  <div className="text-sm italic border-l-2 border-mystical-400/30 pl-3">
                    "The cave you fear to enter holds the treasure you seek."
                  </div>
                </div>
                
                <div className="p-4 rounded-md border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">
                        {user.archetype === 'Explorer' && "The Odyssey"}
                        {user.archetype === 'Sage' && "The Dhammapada"}
                        {user.archetype === 'Creator' && "Letters to a Young Poet"}
                        {user.archetype === 'Ruler' && "The Art of War"}
                        {user.archetype === 'Caregiver' && "Works of Mercy"}
                        {user.archetype === 'Innocent' && "The Little Prince"}
                        {user.archetype === 'Magician' && "The Kybalion"}
                        {user.archetype === 'Lover' && "The Symposium"}
                        {user.archetype === 'Jester' && "Zen Flesh, Zen Bones"}
                        {user.archetype === 'Outlaw' && "Prometheus Bound"}
                        {user.archetype === 'Orphan' && "The Alchemist"}
                        {user.archetype === 'Hero' && "Bhagavad Gita"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {user.archetype === 'Explorer' && "Homer"}
                        {user.archetype === 'Sage' && "Buddha"}
                        {user.archetype === 'Creator' && "Rainer Maria Rilke"}
                        {user.archetype === 'Ruler' && "Sun Tzu"}
                        {user.archetype === 'Caregiver' && "Thomas Aquinas"}
                        {user.archetype === 'Innocent' && "Antoine de Saint-Exupéry"}
                        {user.archetype === 'Magician' && "Three Initiates"}
                        {user.archetype === 'Lover' && "Plato"}
                        {user.archetype === 'Jester' && "Paul Reps"}
                        {user.archetype === 'Outlaw' && "Aeschylus"}
                        {user.archetype === 'Orphan' && "Paulo Coelho"}
                        {user.archetype === 'Hero' && "Vyasa"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm">
                    {user.archetype === 'Explorer' && "The epic tale of Odysseus's ten-year journey home, facing supernatural challenges and temptations."}
                    {user.archetype === 'Sage' && "A collection of Buddha's teachings on wisdom, ethics, and mental discipline."}
                    {user.archetype === 'Creator' && "Profound advice to a young writer about art, solitude, and embracing life's questions."}
                    {user.archetype === 'Ruler' && "Ancient Chinese text on strategy, leadership, and the wise application of power."}
                    {user.archetype === 'Caregiver' && "Medieval theological exploration of compassion, charity, and service."}
                    {user.archetype === 'Innocent' && "A fable about a young prince's journey among the stars, exploring childlike wisdom."}
                    {user.archetype === 'Magician' && "Hermetic principles and teachings on mental transmutation and universal laws."}
                    {user.archetype === 'Lover' && "Philosophical dialogues examining the nature and purpose of love."}
                    {user.archetype === 'Jester' && "Collection of Zen koans, paradoxes, and stories revealing truth through apparent absurdity."}
                    {user.archetype === 'Outlaw' && "Greek tragedy depicting Prometheus's punishment for giving fire to humanity."}
                    {user.archetype === 'Orphan' && "Allegorical novel about a shepherd boy following his dreams and personal legend."}
                    {user.archetype === 'Hero' && "Hindu scripture depicting the dialogue between Arjuna and Krishna about duty and action."}
                  </p>
                </div>
                
                <div className="p-4 rounded-md border border-border/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">Modern Applications</h4>
                    </div>
                  </div>
                  <div className="text-sm space-y-2">
                    <p>• Journal daily with prompts connected to your archetype's journey</p>
                    <p>• Identify modern examples of your archetype in film and literature</p>
                    <p>• Create a personal ritual incorporating symbols that resonate with you</p>
                    <p>• Connect with others walking similar mythic paths through community forums</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArchiveView;
