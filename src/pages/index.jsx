import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from '~/layout/DefaultLayout';
import { PrivateRoute } from '~/components/PrivateRoute';
import { Home } from './home';
import { Login } from './login';
import { NotFound } from './notfound';
import { Character } from './characters/detail';
import { PageCharactersList } from './characters/list';
import { Episode } from './episodes/detail';
import { PageEpisodesList } from './episodes/list';
import { Location } from './locations/detail';
import { PageLocationsList } from './locations/list';

export function Pages() {
  return (
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/characters">
            <Route index element={<PrivateRoute><PageCharactersList /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><Character /></PrivateRoute>} />
          </Route>
          <Route path="/episodes">
            <Route index element={<PrivateRoute><PageEpisodesList /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><Episode /></PrivateRoute>} />
          </Route>
          <Route path="/locations">
            <Route index element={<PrivateRoute><PageLocationsList /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><Location /></PrivateRoute>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}
