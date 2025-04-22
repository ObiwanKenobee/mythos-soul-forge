
import { useState } from "react";
import { useStore } from "@/store/useStore";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, User, Clock } from "lucide-react";

// Simulate community posts
const communityPosts = [
  {
    id: "post1",
    author: "Athena78",
    archetype: "Sage",
    title: "Finding Wisdom in Uncertainty",
    content: "Yesterday I completed the 'Crossing the Threshold' ritual from my journey. I sat in meditation for 30 minutes before writing a letter to my future self. The insight that emerged: uncertainty isn't something to be feared but a space where new wisdom can enter. Has anyone else experienced similar revelations?",
    timestamp: "2 hours ago",
    comments: 3,
  },
  {
    id: "post2",
    author: "Prometheus_Unbound",
    archetype: "Outlaw",
    title: "Breaking Patterns & Finding Freedom",
    content: "The 'sacred patterns' exercise completely shifted my perspective on my recurring struggles. By mapping them as a constellation rather than a timeline, I could see the hidden connections. I realized I wasn't failing repeatedly—I was spiraling closer to the core insight with each attempt. Revolutionary!",
    timestamp: "Yesterday",
    comments: 7,
  },
  {
    id: "post3",
    author: "Odyssey_Mind",
    archetype: "Explorer",
    title: "The Map Is Not The Territory",
    content: "My mythic journey has taken me through some unexpected landscapes of the soul. What I thought was a quest for achievement has revealed itself as a search for meaning. The symbols that keep appearing in my path—the compass, the crossroads, the open door—are speaking a language I'm just beginning to understand.",
    timestamp: "3 days ago",
    comments: 12,
  },
];

const CommunionSpace = () => {
  const { user } = useStore();
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  
  const handleCreatePost = () => {
    // In a real app, this would save the post to a database
    alert("In a full implementation, your post would be shared with the community!");
    setNewPost({ title: "", content: "" });
  };
  
  return (
    <div className="grid md:grid-cols-3 gap-6 h-full">
      <div className="md:col-span-2 space-y-6">
        <div className="cosmic-card">
          <h2 className="text-2xl font-serif mb-4">Communion Space</h2>
          <p className="text-muted-foreground mb-6">
            Connect with fellow mythwalkers, share insights from your journey, and participate in collective wisdom.
          </p>
          
          <div className="space-y-6">
            {communityPosts.map(post => (
              <Card key={post.id} className="bg-card/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                        <Badge variant="outline" className="ml-2 bg-mystical-900/30 text-xs">
                          {post.archetype}
                        </Badge>
                        <span className="flex items-center ml-4 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.timestamp}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {post.comments}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{post.content}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Reply
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="cosmic-card h-full flex flex-col">
          <h3 className="text-xl font-medium mb-4">Share Your Insights</h3>
          <div className="space-y-4 flex-grow">
            <div>
              <Input
                placeholder="Title your reflection"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="cosmic-input"
              />
            </div>
            <div className="flex-grow">
              <Textarea
                placeholder="Share an insight, question, or experience from your mythic journey..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="cosmic-input min-h-[200px]"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              onClick={handleCreatePost}
              disabled={!newPost.title || !newPost.content}
              className="cosmic-button"
            >
              <Send className="mr-2 h-4 w-4" />
              Share with Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunionSpace;
