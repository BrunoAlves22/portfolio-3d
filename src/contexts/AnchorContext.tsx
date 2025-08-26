"use client";

import { ReactNode, createContext, useRef } from "react";

type AnchorContextData = {
  homeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

interface AnchorProviderProps {
  children: ReactNode;
}

export const AnchorContext = createContext({} as AnchorContextData);

function AnchorProvider({ children }: AnchorProviderProps) {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <AnchorContext.Provider
      value={{ aboutRef, contactRef, homeRef, projectsRef }}
    >
      {children}
    </AnchorContext.Provider>
  );
}

export default AnchorProvider;
