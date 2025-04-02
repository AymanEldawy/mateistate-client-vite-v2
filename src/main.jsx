import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import "./i18n";
import routes from './routes/routes';
import { ThemeProvider } from './hook/useTheme';
import { GlobalOptionsProvider } from './hook/useGlobalOptions';
import { PopupFormProvider } from './hook/usePopupForm';
import { lazy } from 'react';
import Loading from './components/shared/Loading';
import { VoucherEntriesViewProvider } from './hook/useVoucherEntriesView';
const DynamicPopupForm = lazy(() => import('./components/forms/wrapper/DynamicPopupForm'));


const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading logo />}>
          <GlobalOptionsProvider>
            <PopupFormProvider>
              {/* <Suspense fallback={}> */}
                <DynamicPopupForm />
              {/* </Suspense> */}
              <RouterProvider router={router} />
            </PopupFormProvider>
          </GlobalOptionsProvider>
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode >,
)
