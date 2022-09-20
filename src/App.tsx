import React, { Suspense } from "react";
import { CookiesProvider } from "react-cookie";
import AppContextProvider from "./context/AppContext";
import Pages from "./pages";
import "./App.css";

function App() {
  return (
    <CookiesProvider>
      <Suspense>
        <AppContextProvider>
          <Pages />
        </AppContextProvider>
      </Suspense>
    </CookiesProvider>
  );
}

export default App;