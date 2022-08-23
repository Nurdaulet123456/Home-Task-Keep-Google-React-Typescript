import React, { createContext, useState, useDeferredValue } from "react";
import { Children } from "../types/type";
import { INotes, ILabel } from "../types/interfaces";
export const DataContext = createContext<any>(null);

const DataProvider: React.FC<Children> = ({ children }: any) => {
  const [notes, setNotes] = useState<INotes[]>([]);
  const [archiveNotes, setAcrchiveNotes] = useState<INotes[]>([]);
  const [deleteNotes, setDeleteNotes] = useState<INotes[]>([]);
  const [search, setSearch] = useState({
    search: "",
  });
  const [label, setLabel] = useState<ILabel[]>([]);
  const [itemLabel, setItemLabel] = useState("");

  const searchValue = useDeferredValue(search.search);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setAcrchiveNotes,
        deleteNotes,
        setDeleteNotes,
        search,
        setSearch,
        searchValue,
        label,
        setLabel,
        itemLabel,
        setItemLabel,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
