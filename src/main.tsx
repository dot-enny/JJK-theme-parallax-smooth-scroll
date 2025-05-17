import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Characters from './pages/Characters.tsx'
import { EpisodeDetailProvider } from './context/EpisodeDetailContext.tsx'
import { AnimationProvider } from './context/AnimationContext.tsx'
import { Seasons } from './pages/Seasons.tsx'
import Episodes from './pages/Episodes.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/seasons', element: <Seasons /> },
  { path: '/characters', element: <Characters /> },
  { path: '/episodes/:seasonId', element: <Episodes /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimationProvider>
      <EpisodeDetailProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </EpisodeDetailProvider>
    </AnimationProvider>
  </React.StrictMode>,
)
