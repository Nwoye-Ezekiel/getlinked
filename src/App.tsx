import Navigation from 'components/navigation';
import FontFaceObserver from 'fontfaceobserver';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();
const Home = React.lazy(() => import('components/pages/home'));
const Contact = React.lazy(() => import('components/pages/contact'));
const Register = React.lazy(() => import('components/pages/register'));
const PageNotFound = React.lazy(() => import('components/pages/page-not-found'));

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function preloadFonts() {
      try {
        await Promise.all([
          new FontFaceObserver('mosk').load(),
          new FontFaceObserver('clash-display').load(),
          new FontFaceObserver('inter').load(),
          new FontFaceObserver('montserrat').load(),
          new FontFaceObserver('unica-one').load(),
        ]);
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error preloading fonts:', error);
      } finally {
        setFontsLoaded(true);
      }
    }
    preloadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <CircularProgress />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <React.Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-screen -mt-[68px] lg:-mt-[125px] bg-background">
                <CircularProgress className="text-primary" />
              </div>
            }
          >
            <Routes>
              <Route
                element={
                  <div id="layout">
                    <Outlet />
                  </div>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
