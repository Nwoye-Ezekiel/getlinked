import FontFaceObserver from 'fontfaceobserver';
import { HelmetProvider } from 'react-helmet-async';
import animations from 'assets/animations/index.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { lazy, Suspense, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();
const Loader = lazy(() => import('components/loader'));
const Layout = lazy(() => import('components/layout'));
const Home = lazy(() => import('components/pages/home'));
const Contact = lazy(() => import('components/pages/contact'));
const Navigation = lazy(() => import('components/navigation'));
const Register = lazy(() => import('components/pages/register'));
const PageNotFound = lazy(() => import('components/pages/page-not-found'));

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomePage(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!fontsLoaded || !showHomePage) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <Player src={animations['linked']} autoplay={true} loop={false} speed={0.8} />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
