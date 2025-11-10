import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Single Page Apps for GitHub Pages
// https://github.com/rafgraph/spa-github-pages
// This script checks if we're on a 404 page and redirects to index.html
// with the path as a query parameter, then React Router will handle it
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, '',
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Evolvia">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
