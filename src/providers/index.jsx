import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";

import { queryClient } from "@/lib/react-query";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";

const ErrorFallback = () => {
  return (
    <div
      className="text-dark-green w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Oops, something went wrong</h2>
      <Button
        variant="outline"
        size="md"
        className="mt-4"
        onClick={() => window.location.reload()}
      >
        Refresh
      </Button>
    </div>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Loader className="w-6 h-6" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <Router>{children}</Router>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
