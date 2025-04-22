
import { useState } from "react";
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { quizQuestions, determineArchetype, generateMythJourney } from "@/lib/myths";
import { Archetype } from "@/store/useStore";
import { ArrowRight } from "lucide-react";

const OnboardingWizard = () => {
  const { setUser, setOnboardingComplete, setJourney } = useStore();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [worldview, setWorldview] = useState("");
  const [goals, setGoals] = useState("");
  const [struggles, setStruggles] = useState("");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, Archetype>>({});

  const handleQuizAnswer = (questionId: string, answer: Archetype) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);

    if (step === 5) {
      const archetype = determineArchetype(quizAnswers);
      
      const userProfile = {
        name,
        worldview,
        goals: goals.split(",").map(g => g.trim()),
        struggles: struggles.split(",").map(s => s.trim()),
        archetype
      };
      
      setUser(userProfile);
      
      const journey = generateMythJourney(
        name,
        archetype,
        userProfile.goals,
        userProfile.struggles
      );
      
      setJourney(journey);
      setOnboardingComplete(true);
    }
  };

  return (
    <div className="bg-cosmic-gradient min-h-screen flex items-center justify-center p-4">
      <div className="cosmic-card max-w-2xl w-full">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-center mb-6">Begin Your Mythic Journey</h2>
            <p className="text-center text-muted-foreground mb-6">
              Welcome to Aeon Forge, where ancient wisdom meets your modern path.
              Let's craft a personal mythos that resonates with your soul's calling.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">What name shall we call you by?</Label>
                <Input
                  id="name"
                  className="cosmic-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!name}
                className="cosmic-button"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-center mb-6">Your Worldview</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="worldview">How do you see the world and your place in it?</Label>
                <Textarea
                  id="worldview"
                  className="cosmic-input min-h-[120px]"
                  placeholder="Share your perspective..."
                  value={worldview}
                  onChange={(e) => setWorldview(e.target.value)}
                />
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!worldview}
                className="cosmic-button"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-center mb-6">Your Aspirations</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goals">What are your deepest goals or aspirations?</Label>
                <Textarea
                  id="goals"
                  className="cosmic-input min-h-[120px]"
                  placeholder="Separate multiple goals with commas..."
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!goals}
                className="cosmic-button"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-center mb-6">Your Challenges</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="struggles">What challenges or struggles are you facing?</Label>
                <Textarea
                  id="struggles"
                  className="cosmic-input min-h-[120px]"
                  placeholder="Separate multiple struggles with commas..."
                  value={struggles}
                  onChange={(e) => setStruggles(e.target.value)}
                />
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!struggles}
                className="cosmic-button"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-center mb-6">Discover Your Archetype</h2>
            <p className="text-center text-muted-foreground mb-6">
              Answer these questions to reveal the mythic archetype that resonates with your soul.
            </p>
            
            <div className="space-y-8">
              {quizQuestions.map((q) => (
                <div key={q.id} className="space-y-4">
                  <h3 className="text-lg font-medium">{q.question}</h3>
                  <div className="grid gap-3">
                    {q.options.map((option) => (
                      <div
                        key={option.value}
                        className={`p-3 rounded-md border cursor-pointer transition-all ${
                          quizAnswers[q.id] === option.value
                            ? "border-mystical-400 bg-mystical-900/30"
                            : "border-border hover:border-mystical-400/50"
                        }`}
                        onClick={() => handleQuizAnswer(q.id, option.value as Archetype)}
                      >
                        {option.text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                className="cosmic-button"
              >
                Complete <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingWizard;
