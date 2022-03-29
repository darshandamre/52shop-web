import * as JSURL from "jsurl";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { filtersReducer, initialfilters } from "../reducer/filterReducer";

const key = "filters";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const { state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = JSURL.parse(searchParams.get(key));
  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    state ? { ...initialfilters, ...state } : paramValue ?? initialfilters
  );
  console.log(filters);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, JSURL.stringify(filters));
    setSearchParams(newSearchParams, { replace: true });
  }, [filters, searchParams, setSearchParams]);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => useContext(FiltersContext);

export { FiltersProvider, useFilters };
