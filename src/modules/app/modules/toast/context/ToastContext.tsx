"use client";

import React, { createContext } from "react";
import { Toaster } from "sonner";

export const ToastContext = createContext({});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastContext.Provider value={{}}>
      <Toaster position="top-right" />
      {children}
    </ToastContext.Provider>
  );
}
