import Lenis from '@studio-freight/lenis';
import images from 'assets/images/index.json';
import FontFaceObserver from 'fontfaceobserver';
import { HelmetProvider } from 'react-helmet-async';
import animations from 'assets/animations/index.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { lazy, Suspense, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();
const Layout = lazy(() => import('components/layout'));
const Loader = lazy(() => import('components/loader'));
const Home = lazy(() => import('components/pages/home'));
const Contact = lazy(() => import('components/pages/contact'));
const Navigation = lazy(() => import('components/navigation'));
const Register = lazy(() => import('components/pages/register'));
const PageNotFound = lazy(() => import('components/pages/page-not-found'));

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const animationTimeout = 3500;
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, animationTimeout);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    async function preloadFonts() {
      try {
        const fontNames = ['mosk', 'inter', 'unica-one', 'montserrat', 'clash-display'];
        const fontPromises = fontNames.map((fontName) => new FontFaceObserver(fontName).load());
        await Promise.all(fontPromises);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error preloading fonts:', error);
      } finally {
        setFontsLoaded(true);
      }
    }
    preloadFonts();
  }, []);

  useEffect(() => {
    async function preloadHeroImage(heroImageUrl: string) {
      try {
        const img = new Image();
        img.src = heroImageUrl;
        img.decode();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error preloading hero image:', error);
      } finally {
        setHeroImageLoaded(true);
      }
    }
    preloadHeroImage(images['boy_on_vr_googles']);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time / 2);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  if (!animationCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <Player src={animations['linked']} autoplay={true} loop={false} speed={0.8} />
      </div>
    );
  }

  if (!fontsLoaded || !heroImageLoaded) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <Suspense fallback={<Loader headerAdjust />}>
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
