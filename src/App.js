import React, { useCallback } from "react";
import { AppProvider } from "8base-react-sdk";
import { BrowserRouter } from "react-router-dom";
import { WORKSPACE_ENDPOINT } from "./functionalComponents/shared/constants";
import { authClient } from "./functionalComponents/shared/auth";
import Routes from "./routes/routes";
import "./App.css";

const App = (props) => {
  const onRequestSuccess = useCallback(({ operation }) => {
    const message = operation.getContext();
  }, []);

  const onRequestError = useCallback(({ graphQLErrors }) => {
    const hasGraphQLErrors = Array.isArray(graphQLErrors) && graphQLErrors.length > 0;

    if (hasGraphQLErrors) {
      graphQLErrors.forEach((error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <AppProvider
        uri={WORKSPACE_ENDPOINT}
        authClient={authClient}
        onRequestError={onRequestError}
        onRequestSuccess={onRequestSuccess}
      >
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
