'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useBankData, BankClient } from '../hooks/use-bank-data';

type BankContextType = {
  clientData: BankClient | null;
  loading: boolean;
  error: Error | null;
};

const BankContext = createContext<BankContextType | undefined>(undefined);

export function BankContextProvider({ 
  children, 
  clientId = 10 
}: { 
  children: ReactNode; 
  clientId?: number 
}) {
  const bankData = useBankData(clientId);
  
  return (
    <BankContext.Provider value={bankData}>
      {children}
    </BankContext.Provider>
  );
}

export function useBankContext() {
  const context = useContext(BankContext);
  if (context === undefined) {
    throw new Error('useBankContext must be used within a BankContextProvider');
  }
  return context;
}