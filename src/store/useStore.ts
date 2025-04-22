
import { create } from 'zustand';

export type Archetype = 
  | 'Hero'
  | 'Explorer'
  | 'Sage'
  | 'Creator'
  | 'Ruler'
  | 'Caregiver'
  | 'Innocent'
  | 'Magician'
  | 'Lover'
  | 'Jester'
  | 'Outlaw'
  | 'Orphan';

export interface UserProfile {
  name: string;
  archetype: Archetype | null;
  goals: string[];
  struggles: string[];
  worldview: string;
}

export interface MythJourney {
  id: string;
  title: string;
  description: string;
  chapters: MythChapter[];
  symbols: string[];
  elements: string[];
}

export interface MythChapter {
  id: string;
  title: string;
  description: string;
  quest: string;
  insight: string;
  completed: boolean;
}

interface State {
  user: UserProfile;
  currentJourney: MythJourney | null;
  onboardingComplete: boolean;
  forgeActive: boolean;
  activeView: 'forge' | 'archive' | 'constellation' | 'communion';
  setUser: (user: Partial<UserProfile>) => void;
  setJourney: (journey: MythJourney) => void;
  setOnboardingComplete: (complete: boolean) => void;
  setForgeActive: (active: boolean) => void;
  setActiveView: (view: 'forge' | 'archive' | 'constellation' | 'communion') => void;
  completeChapter: (chapterId: string) => void;
}

export const useStore = create<State>((set) => ({
  user: {
    name: '',
    archetype: null,
    goals: [],
    struggles: [],
    worldview: '',
  },
  currentJourney: null,
  onboardingComplete: false,
  forgeActive: false,
  activeView: 'forge',
  
  setUser: (userData) => set((state) => ({
    user: { ...state.user, ...userData },
  })),
  
  setJourney: (journey) => set(() => ({
    currentJourney: journey,
  })),
  
  setOnboardingComplete: (complete) => set(() => ({
    onboardingComplete: complete,
  })),
  
  setForgeActive: (active) => set(() => ({
    forgeActive: active,
  })),
  
  setActiveView: (view) => set(() => ({
    activeView: view,
  })),
  
  completeChapter: (chapterId) => set((state) => ({
    currentJourney: state.currentJourney ? {
      ...state.currentJourney,
      chapters: state.currentJourney.chapters.map(chapter => 
        chapter.id === chapterId ? { ...chapter, completed: true } : chapter
      ),
    } : null,
  })),
}));
