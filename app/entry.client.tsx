import { useState } from "react";
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ClientStyleContext, createEmotionCache, theme } from "./theme";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </ClientCacheProvider>,
  document
);
