import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import Error from './pages/Error';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/directors", element: <Directors /> },
  { path: "/actors", element: <Actors /> },
  { path: "/movie/:id", element: <Movie /> },
  { path: "*", element: <Error /> }
];

export default routes;


