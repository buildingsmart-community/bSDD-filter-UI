import React, { useEffect, useState } from 'react';
import { loginRequest } from '../authConfig';
import { useMsal } from '@azure/msal-react';
import { Tooltip, Switch } from '@mantine/core';

interface Props {
  setAccessToken: (value: string) => void;
}

function Authentication({ setAccessToken }: Props) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { instance, inProgress, accounts } = useMsal();

  useEffect(() => {
    if (accounts[0]) {
      instance.acquireTokenSilent({ ...loginRequest, account: accounts[0] }).then((result) => {
        if (result.accessToken !== '') {
          setAccessToken(result.accessToken);
          setAuthenticated(true);
        }
      });
    }
  }, [accounts, instance, setAuthenticated, setAccessToken]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthenticated(e.target.checked);
    if (authenticated) {
      instance.logoutRedirect({ postLogoutRedirectUri: '/' });
    } else {
      instance.loginRedirect(loginRequest);
    }
  };

  return (
    <Tooltip label="log in on bSDD" position="bottom">
      <Switch checked={authenticated} onChange={(e) => handleOnChange(e)} />
    </Tooltip>
  );
}
export default Authentication;
