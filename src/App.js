import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import CharactersList from "./pages/CharactersList.js";
import Character from "./pages/Character.js";
import EpisodesList from './pages/EpisodesList.js';
import Episode from './pages/Episode.js';
import LocationsList from './pages/LocationsList.js';
import Location from './pages/Location.js';
import DefaultLayout from './layout/DefaultLayuot.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" >
            <Route index element={<CharactersList />} />
            <Route path=":id" element={<Character />} />
          </Route>
          <Route path="/episodes">
            <Route index element={<EpisodesList />} />
            <Route path=":id" element={<Episode />} />
          </Route>
          <Route path="/locations">
            <Route index element={<LocationsList />} />
            <Route path=":id" element={<Location />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
