import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from '../layout/DefaultLayout';
import { PrivateRoute } from '../components/PrivateRoute';
import { Home } from './home';
import { Login } from './login';
import { NotFound } from './notfound';
import { Character } from './character/detail';
import { CharactersList } from './character/list';
import { Episode } from './episode/detail';
import { EpisodesList } from './episode/list';
import { Location } from './location/detail';
import { LocationsList } from './location/list';

export function Pages() {
  return (
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
  );
}
