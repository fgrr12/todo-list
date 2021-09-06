import { useCallback } from "react";
import { useApolloClient, useQuery } from "@apollo/client";
import { useAuth } from "8base-react-sdk";
import { ButtonSignOut, ButtonSignIn } from "./styled";

import { CURRENT_USER_QUERY } from "../../functionalComponents/shared/graphql";

export const AuthButton = () => {

  const { authClient, isAuthorized } = useAuth();
  const apolloClient = useApolloClient();
  const { loading } = useQuery(CURRENT_USER_QUERY);

  const onLogoutClick = useCallback(async () => {
    await apolloClient.clearStore();
    authClient.logout();
  }, [apolloClient, authClient]);

  const onLoginClick = useCallback(() => {
    authClient.authorize();
  }, [authClient]);

  if (loading) {
    return null;
  }

  if (isAuthorized) {
    return <ButtonSignOut onClick={onLogoutClick}>Sign Out</ButtonSignOut>;
  }

  return <ButtonSignIn onClick={onLoginClick}>Sign In</ButtonSignIn>;
};
