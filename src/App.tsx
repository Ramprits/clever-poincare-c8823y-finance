import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme";
import Navbar from "./pages/navbar";

export function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Welcome vite react</div>} />
          <Route path="/predictions" element={<div>Welcome vite predictions</div>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
