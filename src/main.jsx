import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import EntriesPopupView from './components/forms/containers/entries/EntriesPopupView';
import Loading from './components/shared/Loading';
import { GlobalOptionsProvider } from './hook/useGlobalOptions';
import { PopupFormProvider } from './hook/usePopupForm';
import { ThemeProvider } from './hook/useTheme';
import { VoucherEntriesViewProvider } from './hook/useVoucherEntriesView';
import "./i18n";
import './index.css';
import routes from './routes/routes';

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
              <VoucherEntriesViewProvider>
                <ToastContainer
                  position={"top-center"}
                  autoClose={3000}
                  hideProgressBar={false}
                  closeOnClick={true}
                  pauseOnHover={true}
                  draggable={true}
                  progress={undefined}
                  theme={"light"}
                />
                <RouterProvider router={router} />
                <EntriesPopupView />
              </VoucherEntriesViewProvider>
            </PopupFormProvider>
          </GlobalOptionsProvider>
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode >,
)
