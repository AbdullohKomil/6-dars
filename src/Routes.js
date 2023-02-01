import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Location } from './pages/Location/Location';
import { Episode } from './pages/Episode/Episode';
import { Character } from './pages/Character/Character';
import { SingleCharacter } from './pages/SingleCharacter/SingleCharacter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Character />,
      },
      {
        path: 'Location',
        element: <Location />,
      },
      {
        path: 'Episode',
        element: <Episode />,
      },
      {
        path: '/Singlecharacter/:id',
        element: <SingleCharacter />,
      },
    ],
  },
]);
