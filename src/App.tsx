import { StrictMode } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import theme from "./theme";
import FrontCover from "./FrontCover";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export default function App() {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Routes>
            <Route path="/" element={<FrontCover />} />
            <Route path="/page-one" element={<PageOne />} />
            <Route path="/page-two" element={<PageTwo />} />
            <Route path="/birthdaycard" element={<FrontCover />} /> {/* Add this if needed */}
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </StrictMode>
  );
}
