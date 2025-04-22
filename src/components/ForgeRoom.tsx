
import { useState } from "react";
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const ForgeRoom = () => {
  const { user, currentJourney, completeChapter } = useStore();
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  if (!currentJourney) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>No journey loaded. Begin your mythic path...</p>
      </div>
    );
  }

  const completedChapters = currentJourney.chapters.filter(ch => ch.completed).length;
  const progress = (completedChapters / currentJourney.chapters.length) * 100;

  // Find the selected chapter object
  const chapterDetail = selectedChapter 
    ? currentJourney.chapters.find(ch => ch.id === selectedChapter) 
    : null;

  return (
    <div className="grid md:grid-cols-3 gap-6 h-full">
      <div className="md:col-span-2 space-y-6">
        <div className="cosmic-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif">{currentJourney.title}</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{completedChapters}/{currentJourney.chapters.length} Completed</span>
              <Progress value={progress} className="w-20 h-2" />
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">{currentJourney.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {currentJourney.symbols.map(symbol => (
              <Badge key={symbol} variant="outline" className="bg-muted/30">
                {symbol}
              </Badge>
            ))}
            {currentJourney.elements.map(element => (
              <Badge key={element} variant="outline" className="bg-mystical-900/30 text-mystical-200">
                {element}
              </Badge>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Your Chapters</h3>
            <div className="grid gap-4">
              {currentJourney.chapters.map((chapter) => (
                <div 
                  key={chapter.id}
                  className={`p-4 rounded-md border cursor-pointer transition-all ${
                    selectedChapter === chapter.id 
                      ? "border-mystical-400 bg-mystical-900/30" 
                      : chapter.completed 
                        ? "border-mystical-700 bg-mystical-900/10" 
                        : "border-border hover:border-mystical-400/50"
                  }`}
                  onClick={() => setSelectedChapter(chapter.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{chapter.title}</h4>
                      <p className="text-sm text-muted-foreground truncate max-w-md">{chapter.description}</p>
                    </div>
                    {chapter.completed && (
                      <CheckCircle className="h-5 w-5 text-mystical-400 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        {chapterDetail ? (
          <Card className="border-mystical-800/50 bg-card/60 backdrop-blur-sm h-full">
            <CardHeader>
              <CardTitle>{chapterDetail.title}</CardTitle>
              <CardDescription>{chapterDetail.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-mystical-300 mb-1">Your Quest</h4>
                <p>{chapterDetail.quest}</p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md">
                <h4 className="text-sm font-medium text-mystical-300 mb-1">Mythic Insight</h4>
                <p className="italic">{chapterDetail.insight}</p>
              </div>
            </CardContent>
            <CardFooter>
              {!chapterDetail.completed ? (
                <Button 
                  onClick={() => completeChapter(chapterDetail.id)}
                  className="w-full"
                >
                  Mark as Complete <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <div className="w-full text-center text-mystical-300 flex items-center justify-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Chapter completed
                </div>
              )}
            </CardFooter>
          </Card>
        ) : (
          <div className="cosmic-card h-full flex flex-col items-center justify-center text-center">
            <div className="sacred-symbol mb-4">
              <span className="text-4xl">⚜</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Select a Chapter</h3>
            <p className="text-muted-foreground">
              Choose a chapter from your journey to view details and complete quests.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgeRoom;
