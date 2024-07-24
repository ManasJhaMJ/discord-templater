import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ServerTemplate from './components/ServerTemplate/ServerTemplate.jsx'
import EmojisSticker from './components/EmojisSticker/EmojisSticker.jsx'
import Botsetup from './components/BotSetup/Botsetup.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/server-templates',
        element: <ServerTemplate />,
      },
      {
        path: '/emojis-sticker',
        element: <EmojisSticker />,
      },
      {
        path: '/bot-setup',
        element: <Botsetup />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)