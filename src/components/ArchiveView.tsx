
import { useStore } from "@/store/useStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArchetypeTab } from "./archive/ArchetypeTab";
import { SymbolsTab } from "./archive/SymbolsTab";
import { WisdomLibraryTab } from "./archive/WisdomLibraryTab";

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
        
        <TabsContent value="archetype">
          <ArchetypeTab />
        </TabsContent>
        
        <TabsContent value="symbols">
          <SymbolsTab />
        </TabsContent>
        
        <TabsContent value="library">
          <WisdomLibraryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArchiveView;
