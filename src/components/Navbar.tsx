
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Book, Map, Users } from "lucide-react";

const Navbar = () => {
  const { user, activeView, setActiveView } = useStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-cosmic-900/70 backdrop-blur-md border-b border-mystical-900/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-mystical-500 to-mystical-700 flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">Æ</span>
          </div>
          <h1 className="text-xl font-serif font-semibold">
            <span className="text-white">Aeon</span>
            <span className="text-mystical-300">Forge</span>
          </h1>
        </div>

        {user.name && (
          <nav className="hidden md:flex items-center space-x-2">
            <Button 
              variant={activeView === 'forge' ? 'default' : 'ghost'}
              onClick={() => setActiveView('forge')}
              className="text-sm"
            >
              <Sun className="mr-2 h-4 w-4" />
              Forge Room
            </Button>
            <Button 
              variant={activeView === 'archive' ? 'default' : 'ghost'}
              onClick={() => setActiveView('archive')}
              className="text-sm"
            >
              <Book className="mr-2 h-4 w-4" />
              Archive
            </Button>
            <Button 
              variant={activeView === 'constellation' ? 'default' : 'ghost'}
              onClick={() => setActiveView('constellation')}
              className="text-sm"
            >
              <Map className="mr-2 h-4 w-4" />
              Constellation
            </Button>
            <Button 
              variant={activeView === 'communion' ? 'default' : 'ghost'}
              onClick={() => setActiveView('communion')}
              className="text-sm"
            >
              <Users className="mr-2 h-4 w-4" />
              Communion
            </Button>
          </nav>
        )}

        <div className="flex items-center space-x-2">
          {user.name && (
            <div className="text-sm text-mystical-300">
              <span className="hidden md:inline">Pathwalker: </span>
              <span className="font-medium text-white">{user.name}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
