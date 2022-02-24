import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

function App() {
  const location = useLocation();
  return (
    <MainDiv>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />}></Route>
          <Route path="/work" element={<OurWork />}></Route>
          <Route path="/work/:id" element={<MovieDetail />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  overflow: hidden;
`;

export default App;
