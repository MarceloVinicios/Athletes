import React, { useState } from "react";

export const PublicationContext = React.createContext();

export const PublicationStorage = ({ children }) => {
  const [reload, setReload] = useState(0);
  const [reloadComments, setReloadComments] = useState(0);

  function reloadPublications() {
    setReload(reload + 1);
  }

  function reloadCommentsList() {
    setReloadComments(() => reloadComments + 1);
  }

  return (
    <PublicationContext.Provider
      value={{
        reloadPublications,
        reloadCommentsList,
        reload,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};
