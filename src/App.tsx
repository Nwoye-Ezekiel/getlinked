import images from 'assets/images/index.json';
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
    async function preloadImages(imageUrls: { [key: string]: string }) {
      try {
        const promises = Object.values(imageUrls).map(async (imageUrl) => {
          const img = new Image();
          img.src = imageUrl;
          await img.decode();
        });
        await Promise.all(promises);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error preloading images:', error);
      } finally {
        setImagesLoaded(true);
      }
    }
    preloadImages(images);
  }, []);

  if (!animationCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <Player src={animations['linked']} autoplay={true} loop={false} speed={0.8} />
      </div>
    );
  }

  if (!fontsLoaded || !imagesLoaded) {
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
