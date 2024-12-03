import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/Products';
import Layout from './pages/Products/Layout';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
  },
]);
function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
