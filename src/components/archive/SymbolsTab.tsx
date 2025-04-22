
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SymbolsTab = () => {
  const symbols = ['Sword', 'Mountain', 'Crown', 'Shield', 'Dragon', 'Book', 'Owl', 'Lamp'];
  const elements = ['Fire', 'Water', 'Earth', 'Air', 'Aether', 'Light', 'Shadow', 'Dream'];

  const getElementEmoji = (element: string) => {
    const emojiMap: Record<string, string> = {
      Fire: '🔥',
      Water: '💧',
      Earth: '🌎',
      Air: '💨',
      Aether: '✨',
      Light: '☀️',
      Shadow: '🌑',
      Dream: '💫'
    };
    return emojiMap[element] || '';
  };

  const getSymbolEmoji = (symbol: string) => {
    const emojiMap: Record<string, string> = {
      Sword: '⚔️',
      Mountain: '🏔️',
      Crown: '👑',
      Shield: '🛡️',
      Dragon: '🐉',
      Book: '📚',
      Owl: '🦉',
      Lamp: '💡'
    };
    return emojiMap[symbol] || '';
  };

  return (
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
            {symbols.map(symbol => (
              <div key={symbol} className="p-3 rounded-md border border-border/50 text-center">
                <div className="text-3xl mb-2">{getSymbolEmoji(symbol)}</div>
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
            {elements.map(element => (
              <div key={element} className="p-3 rounded-md border border-border/50 text-center">
                <div className="text-3xl mb-2">{getElementEmoji(element)}</div>
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
  );
};
