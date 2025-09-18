"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
	searchTerms: string;
	setSearchTerms: (searchTerm: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
	children: ReactNode;
}

export function SubredditProvider({ children }: NavigationProviderProps) {
	const [searchTerms, setSearchTerms] = useState('');

	return (
		<NavigationContext.Provider value={{ searchTerms, setSearchTerms }}>
			{children}
		</NavigationContext.Provider>
	);
}

export function useNavigation() {
	const context = useContext(NavigationContext);
	if (context === undefined) {
		throw new Error('useSubreddit must be used within a SubredditProvider');
	}
	return context;
}