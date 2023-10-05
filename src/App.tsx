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
const Home = lazy(() => import('components/pages/home'));
const Contact = lazy(() => import('components/pages/contact'));
const Navigation = lazy(() => import('components/navigation'));
const Register = lazy(() => import('components/pages/register'));
const PageLoader = lazy(() => import('components/loaders/page-loader'));
const PageNotFound = lazy(() => import('components/pages/page-not-found'));
const ResourceLoader = lazy(() => import('components/loaders/resource-loader'));

function App() {
  const [showApp, setShowApp] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [imagesLoadingProgress, setImagesLoadingProgress] = useState(0);

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
    async function preloadImages(imageUrls: { [key: string]: string }) {
      try {
        const totalImages = Object.values(imageUrls).length;
        let loadedCount = 0;
        const promises = Object.values(imageUrls).map(async (imageUrl) => {
          const img = new Image();
          img.src = imageUrl;
          await img.decode();
          loadedCount++;
          const progress = (loadedCount / totalImages) * 100;
          setImagesLoadingProgress(progress);
          if (progress === 100) {
            setTimeout(() => {
              setShowApp(true);
            }, 1000);
          }
        });
        await Promise.all(promises);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error preloading images:', error);
      } finally {
        setImagesLoaded(true);
      }
    }
    if (animationCompleted) {
      preloadImages(images);
    }
  }, [animationCompleted]);

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

  if (!fontsLoaded || !imagesLoaded || !showApp) {
    return <ResourceLoader value={imagesLoadingProgress} />;
  } else
    return (
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navigation />
            <Suspense fallback={<PageLoader />}>
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
