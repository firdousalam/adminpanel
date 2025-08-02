// context/AppContext.tsx
"use client"; // Only for App Router

import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  userByContext: string;
  setUserByContext: (user: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [userByContext, setUserByContext] = useState("Guest");

  return (
    <AppContext.Provider value={{ userByContext, setUserByContext }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};