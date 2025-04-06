import type { ReactNode } from "react";
import CacheBuster from "react-cache-buster";
import { Loading } from "~/components/Loading";
import { version } from "../package.json";
import { QueryClientProvider } from "@tanstack/react-query";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./msalConfig";
import { queryClient } from "~/utils/query-client";


export const Providers = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={process.env.NODE_ENV === "production"}
      isVerboseMode={false}
      loadingComponent={<Loading />}
      onCacheClear={async (refreshCacheAndReload: () => Promise<void>) => {
        localStorage.clear();
        await refreshCacheAndReload();
      }}
    >
      <MsalProvider instance={msalInstance}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
      </MsalProvider>
    </CacheBuster>
  );
};
