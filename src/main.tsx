import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Episodes from './pages/Episodes.tsx'
import Layout from './components/Layout.tsx'
import Characters from './pages/Characters.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/episodes', element: <Episodes /> },
  { path: '/characters', element: <Characters /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
)
