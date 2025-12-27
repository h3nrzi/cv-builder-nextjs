'use client';
import React, { createContext, useContext, useState } from 'react';

type typeContext = {
  LayoutDialog: boolean;
  setLayoutDialog: (LayoutDialog: boolean) => void;
  selectLayoutState: { id: number; name: string };
  setSelectLayoutStat: (selectLayoutState: { id: number; name: string }) => void;
};

const LayoutSelectContext = createContext<typeContext | undefined>(undefined);

function ProviderLayoutCv(props: { children: React.ReactNode }) {
  const [LayoutDialog, setLayoutDialog] = useState(false);
  const [selectLayoutState, setSelectLayoutStat] = useState({ id: 1, name: 'standard' });

  const allState = {
    LayoutDialog,
    setLayoutDialog,
    selectLayoutState,
    setSelectLayoutStat,
  };

  return (
    <LayoutSelectContext.Provider value={allState}>{props.children}</LayoutSelectContext.Provider>
  );
}

function useSelectLayoutCv() {
  const context = useContext(LayoutSelectContext);
  if (!context) {
    throw new Error('useSelectLayoutCv must be used within a ProviderLayoutCv');
  }
  return context;
}

export { ProviderLayoutCv, LayoutSelectContext, useSelectLayoutCv };
