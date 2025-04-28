import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import RecipeDetails from './components/RecipeDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'recipeDetails/:id',
        element: <RecipeDetails />
      }
    ]
  }
], {
  basename: '/React-Recipe-App'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);