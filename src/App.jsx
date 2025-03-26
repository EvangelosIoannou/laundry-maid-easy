import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import HomeView from "./views/HomeView";

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <RouterView>
          <Routes>
            <Route exact path="/" element={<HomeView />} />
          </Routes>
        </RouterView>
      </AppContainer>
    </Router>
  );
}
const AppContainer = styled.div``;
const RouterView = styled.main`
  flex: 1;
  height: 100vh;
  /* overflow: hidden; */
  overflow-y: scroll;
`;

export default App;
