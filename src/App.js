import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import CharactersList from "./pages/CharactersList.js";
import Character from "./pages/Character.js";
import EpisodesList from './pages/EpisodesList.js';
import Episode from './pages/Episode.js';
import LocationsList from './pages/LocationsList.js';
import Location from './pages/Location.js';
import DefaultLayout from './layout/DefaultLayout.js';
import NotFound from './pages/NotFound.js';
import {Login} from './pages/Login.js';
import { AuthProvider } from './context/AuthProvider.js';
import { PrivateRoute } from './components/PrivateRoute.js';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/characters">
            <Route index element={<PrivateRoute><CharactersList /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><Character /></PrivateRoute>} />
          </Route>
          <Route path="/episodes">
            <Route index element={<PrivateRoute><EpisodesList /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><Episode /></PrivateRoute>} />
          </Route>
          <Route path="/locations">
            <Route index element={<PrivateRoute><LocationsList /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><Location /></PrivateRoute>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
