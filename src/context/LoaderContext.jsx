import { Children, createContext, useContext, useState } from "react";
import Loader from "../component/Loader";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);
  return (
    <LoaderContext.Provider value={(loading, showLoader, hideLoader)}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
}
function useLoader() {
  const context = useContext(LoaderContext);
  return context;
}

export { LoaderProvider, useLoader };
