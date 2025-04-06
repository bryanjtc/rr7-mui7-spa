import {
  QueryCache,
  QueryClient,
} from "@tanstack/react-query";
import {
  captureException,
} from "@sentry/browser";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (err) => {
        if (
          (
            err as {
              response?: {
                status: number;
              };
            }
          ).response?.status === 401
        ) {
          window.location.replace("/");
        } else {
          captureException(err);
        }
      },
    }),
    defaultOptions: {
      queries: {
        retry: (failureCount, err) => {
          if (
            (
              err as {
                response?: {
                  status: number;
                };
              }
            ).response?.status === 401
          ) {
            return false;
          }
  
          const defaultRetry = new QueryClient().getDefaultOptions().queries
            ?.retry;
  
          return Number.isSafeInteger(defaultRetry)
            ? failureCount < (Number(defaultRetry) ?? 0)
            : false;
        },
      },
      mutations: {
        onError: (err) => {
          if (
            (
              err as {
                response?: {
                  status: number;
                };
              }
            ).response?.status === 401
          ) {
            window.location.replace("/");
          } else {
            captureException(err);
          }
        },
      },
    },
  });