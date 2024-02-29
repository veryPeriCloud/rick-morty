import './App.css';
// import { lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import { DefaultLayout } from './layout/DefaultLayout';
import { AuthProvider } from './context/AuthProvider';
// import { PrivateRoute } from './components/PrivateRoute';
import { Pages } from './pages';

// const Home = lazy(() => import('./pages/Home'));
// const CharactersList = lazy(() => import("./pages/CharactersList"));
// const Character = lazy(() => import("./pages/Character"));
// const EpisodesList = lazy(() => import("./pages/EpisodesList"));
// const Episode = lazy(() => import("./pages/Episode"));
// const LocationsList = lazy(() => import("./pages/LocationsList"));
// const Location = lazy(() => import("./pages/Location"));
// const NotFound = lazy(() => import("./pages/NotFound"));
// const Login = lazy(() => import("./pages/Login"));


function App() {
  return (
    <AuthProvider>
      <Pages />
      {/* <Routes>
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
      </Routes> */}
    </AuthProvider>
  );
}

export default App;
