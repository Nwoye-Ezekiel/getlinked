import React from 'react';
import { CircularProgress } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = React.lazy(() => import('components/layout'));
const FAQs = React.lazy(() => import('components/pages/app/faqs'));
const Home = React.lazy(() => import('components/pages/app/home'));
const NotFound = React.lazy(() => import('components/pages/not-found'));
const Contact = React.lazy(() => import('components/pages/app/contact'));
const Timeline = React.lazy(() => import('components/pages/app/timeline'));
const Overview = React.lazy(() => import('components/pages/app/overview'));
const Register = React.lazy(() => import('components/pages/auth/register'));

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <React.Suspense
          fallback={
            <div className="flex flex-col items-center justify-center h-screen bg-background">
              <CircularProgress />
            </div>
          }
        >
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/faqs/*" element={<FAQs />} />
                <Route path="/contact/*" element={<Contact />} />
                <Route path="/register/*" element={<Register />} />
                <Route path="/timeline/*" element={<Timeline />} />
                <Route path="/overview/*" element={<Overview />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
