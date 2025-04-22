
import { useEffect, useRef } from "react";
import { useStore } from "@/store/useStore";

const ConstellationView = () => {
  const { currentJourney } = useStore();
  const constellationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!constellationRef.current || !currentJourney) return;
    
    const container = constellationRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear previous nodes
    container.innerHTML = '';
    
    // Create nodes for chapters
    currentJourney.chapters.forEach((chapter, index) => {
      // Calculate positions in a circular pattern
      const angle = (2 * Math.PI * index) / currentJourney.chapters.length;
      const radius = Math.min(containerWidth, containerHeight) * 0.35;
      const x = containerWidth / 2 + radius * Math.cos(angle);
      const y = containerHeight / 2 + radius * Math.sin(angle);
      
      // Create node
      const node = document.createElement('div');
      node.className = `constellation-node ${chapter.completed ? 'bg-celestial-400' : 'bg-mystical-400'}`;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.title = chapter.title;
      
      // Add label
      const label = document.createElement('div');
      label.className = 'absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs';
      label.textContent = chapter.title;
      node.appendChild(label);
      
      container.appendChild(node);
    });
    
    // Create center node (self)
    const centerNode = document.createElement('div');
    centerNode.className = 'constellation-node bg-ember-400 w-6 h-6';
    centerNode.style.left = `${containerWidth / 2}px`;
    centerNode.style.top = `${containerHeight / 2}px`;
    container.appendChild(centerNode);
    
    // Create symbols nodes
    currentJourney.symbols.forEach((symbol, index) => {
      // Place symbols at outer edges
      const angle = (2 * Math.PI * index) / currentJourney.symbols.length + Math.PI / 4;
      const radius = Math.min(containerWidth, containerHeight) * 0.45;
      const x = containerWidth / 2 + radius * Math.cos(angle);
      const y = containerHeight / 2 + radius * Math.sin(angle);
      
      // Create node
      const node = document.createElement('div');
      node.className = 'constellation-node bg-ember-300';
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      
      // Add label
      const label = document.createElement('div');
      label.className = 'absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-ember-300';
      label.textContent = symbol;
      node.appendChild(label);
      
      container.appendChild(node);
    });
    
    // Connect nodes with lines
    const nodes = container.querySelectorAll('.constellation-node');
    nodes.forEach((startNode, i) => {
      // Connect to center node
      if (i !== nodes.length - 1) { // Skip center node itself
        const startRect = startNode.getBoundingClientRect();
        const centerRect = centerNode.getBoundingClientRect();
        
        const startX = startRect.left - container.getBoundingClientRect().left + startRect.width / 2;
        const startY = startRect.top - container.getBoundingClientRect().top + startRect.height / 2;
        const endX = containerWidth / 2;
        const endY = containerHeight / 2;
        
        const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
        
        const line = document.createElement('div');
        line.className = 'constellation-line';
        line.style.width = `${length}px`;
        line.style.left = `${startX}px`;
        line.style.top = `${startY}px`;
        line.style.transform = `rotate(${angle}deg)`;
        
        container.insertBefore(line, container.firstChild);
      }
    });
    
  }, [currentJourney]);
  
  if (!currentJourney) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>No journey loaded. Begin your mythic path...</p>
      </div>
    );
  }
  
  return (
    <div className="cosmic-card h-full flex flex-col">
      <h2 className="text-2xl font-serif mb-4">Your Mythic Constellation</h2>
      <p className="text-muted-foreground mb-6">
        This cosmic map represents your journey, connecting the chapters of your personal mythos with the archetypal symbols that guide you.
      </p>
      
      <div 
        ref={constellationRef} 
        className="relative flex-grow bg-starfield bg-repeat rounded-lg overflow-hidden"
      >
        {/* Constellation will be rendered here via JavaScript */}
      </div>
    </div>
  );
};

export default ConstellationView;
