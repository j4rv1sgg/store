import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './app/pages/Products';
import Layout from './app/pages/Products/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/products',
    element: <Products />,
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
