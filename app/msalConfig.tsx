import { PublicClientApplication, LogLevel, type Configuration } from "@azure/msal-browser";
import { captureException } from "@sentry/browser";

const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`,
        redirectUri: `${import.meta.env.VITE_PAYME_BASE_URL}/auth/callback/microsoft-entra-id`,
        postLogoutRedirectUri: import.meta.env.VITE_PAYME_BASE_URL,
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, _piiLoggingEnabled) => {
                if (level === LogLevel.Error) {
                    console.error(message);
                } else if (level === LogLevel.Warning) {
                    console.warn(message);
                } else {
                    captureException(new Error(message));
                }
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false,
        },
    }
} satisfies Configuration;

export const msalInstance = await PublicClientApplication.createPublicClientApplication(msalConfig);