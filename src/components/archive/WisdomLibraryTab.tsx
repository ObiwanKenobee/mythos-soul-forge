import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store/useStore";

export const WisdomLibraryTab = () => {
  const { user } = useStore();
  
  return (
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
  );
};
