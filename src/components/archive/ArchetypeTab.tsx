import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { archetypeDescriptions } from "@/lib/myths";
import { useStore } from "@/store/useStore";

export const ArchetypeTab = () => {
  const { user } = useStore();
  
  if (!user.archetype) return null;
  
  return (
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
  );
};
