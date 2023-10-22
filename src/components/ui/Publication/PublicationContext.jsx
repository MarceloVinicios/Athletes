import React, { createContext, useContext, useState } from 'react';

const PublicationContext = createContext();

export function PublicationProvider({ children }) {
  const [publications, setPublications] = useState([]);

  const addPublication = (publication) => {
    setPublications((prevPublications) => [...prevPublications, publication]);
  };

  const removePublication = (publicationId) => {
    setPublications((prevPublications) =>
      prevPublications.filter((publication) => publication.id !== publicationId)
    );
  };

  return (
    <PublicationContext.Provider
      value={{ publications, addPublication, removePublication }}
    >
      {children}
    </PublicationContext.Provider>
  );
}

export function usePublicationContext() {
  return useContext(PublicationContext);
}
