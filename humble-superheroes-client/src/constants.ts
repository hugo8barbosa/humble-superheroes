// This constant defines the base URL for the server
// It first tries to read the URL from the environment variable VITE_APP_SERVER_URL
// If the environment variable is not set, it defaults to an empty string ("")
export const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL || "";
