import React from 'react'

// Imports 
import { useRoutes } from 'hookrouter';

// Components
import { NotFound, Auth, Home } from './components'
import { getItemLS } from './hooks/LocalStorage';
import { navigate } from 'hookrouter';


const routes = {
  '/': () => <Auth />,
  '/auth*': () => <Auth />,
  '/home': () => <Home />
  // '/products/:id': ({ id }) => <ProductDetails id={id} />
};

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFound />;
}
export default App;