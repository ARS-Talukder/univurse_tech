import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'react-hot-toast';
import AppLoader from './components/Shared/AppLoader.jsx';
import { Analytics } from "@vercel/analytics/react";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppLoader>
        <App />
      </AppLoader>
      <Analytics />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </QueryClientProvider>
  </StrictMode>,
)
