"use client";

import { createContext, useState } from "react";

interface SidebarContextProps {
  showSearchContent: boolean;
  showSearchModal: boolean;
  showCartModal: boolean;
  showCartContent: boolean;
  setShowSearchModal: (value: boolean) => void;
  setShowSearchContent: (value: boolean) => void;
  setShowCartModal: (value: boolean) => void;
  setShowCartContent: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>(null!);

const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showSearchContent, setShowSearchContent] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCartContent, setShowCartContent] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        showSearchContent,
        showSearchModal,
        showCartContent,
        showCartModal,
        setShowSearchContent,
        setShowSearchModal,
        setShowCartContent,
        setShowCartModal,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
