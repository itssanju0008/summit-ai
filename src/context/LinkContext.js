"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LinkContext = createContext();

export function LinkProvider({ children }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  const value = {
    pathname,
    setHash,
    hash,
    hashValue: hash.replace("#", ""), // Remove # for easier comparison
  };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
}

export function useLinkContext() {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("useLinkContext must be used within a LinkProvider");
  }
  return context;
}
