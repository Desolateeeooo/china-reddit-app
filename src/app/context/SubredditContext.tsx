"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SubredditContextType {
  selectedSubreddit: string;
  setSelectedSubreddit: (subreddit: string) => void;
}

const SubredditContext = createContext<SubredditContextType | undefined>(undefined);

interface SubredditProviderProps {
  children: ReactNode;
}

export function SubredditProvider({ children }: SubredditProviderProps) {
  const [selectedSubreddit, setSelectedSubreddit] = useState('china');

  return (
    <SubredditContext.Provider value={{ selectedSubreddit, setSelectedSubreddit }}>
      {children}
    </SubredditContext.Provider>
  );
}

export function useSubreddit() {
  const context = useContext(SubredditContext);
  if (context === undefined) {
    throw new Error('useSubreddit must be used within a SubredditProvider');
  }
  return context;
}