import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLoader from './components/Shared/AppLoader.jsx';
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from './context/ThemeContext.jsx';
import ThemedToaster from './components/Shared/ThemedToaster.jsx';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppLoader>
          <App />
        </AppLoader>
        <Analytics />
        <ThemedToaster />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
