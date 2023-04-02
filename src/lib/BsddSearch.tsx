import { useEffect, useState } from 'react';
import { Form, Accordion, Row, Col, Card } from 'react-bootstrap';
import Search from './Search';
import Classifications from './Classifications';
import PropertySets from './PropertySets';
import RecursiveMode from './RecursiveMode';
import SelectDomains from './SelectDomains';
import Apply from './Apply';
import { ClassificationContractV4, DomainContractV3 } from './BsddApi';
import { EventType, PublicClientApplication } from '@azure/msal-browser';

// MSAL imports
import { MsalProvider, useMsal } from '@azure/msal-react';
import { b2cPolicies, loginRequest } from '../authConfig';
import Authentication from './Authentication';
// import { msalInstance } from '.';

interface Option {
  label: string;
  value: string;
}

interface Config {
  defaultDomains: Option[];
}

interface BsddConfig {
  baseUrl: string;
  defaultDomains: Option[];
  defaultSearch: Option;
}

interface Props {
  callback: (value: IfcEntity) => void;
  config: BsddConfig;
  msalInstance: PublicClientApplication;
}

function BsddSearch({ callback, config, msalInstance }: Props) {
  const [activeClassificationUri, setActiveClassificationUri] = useState<string>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [activeDomains, setActiveDomains] = useState<Option[]>(getDefaultDomains());
  const [domains, setDomains] = useState<{ [id: string]: DomainContractV3 }>({});
  const [classifications, setClassifications] = useState<ClassificationContractV4[]>([]);
  const [propertySets, setPropertySets] = useState<{ [id: string]: IfcPropertySet }>({});
  const [accessToken, setAccessToken] = useState<string>('');
  //   /**
  //    * useMsal is hook that returns the PublicClientApplication instance,
  //    * an array of all accounts currently signed in and an inProgress value
  //    * that tells you what msal is currently doing. For more, visit:
  //    * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
  //    */

  //   const activeAccount = instance.getActiveAccount();
  //   console.log(activeAccount)
  //   useEffect(() => {
  //     console.log('zdf')
  //       const callbackId = instance.addEventCallback((event: { eventType: any; payload: { account: any; idTokenClaims: { [x: string]: any; oid: string | undefined; sub: string | undefined; }; }; error: { errorMessage: string | string[]; }; }) => {
  //           if (
  //               (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
  //               event.payload.account
  //           ) {
  //             console.log('LOGIN_SUCCESS');
  //               /**
  //                * For the purpose of setting an active account for UI update, we want to consider only the auth
  //                * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy
  //                * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
  //                * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
  //                */
  //               if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
  //                   // retrieve the account from initial sing-in to the app
  //                   const originalSignInAccount = instance
  //                       .getAllAccounts()
  //                       .find(
  //                           (account) =>
  //                               account.idTokenClaims.oid === event.payload.idTokenClaims.oid &&
  //                               account.idTokenClaims.sub === event.payload.idTokenClaims.sub &&
  //                               account.idTokenClaims['tfp'] === b2cPolicies.names.signUpSignIn
  //                       );

  //                   let signUpSignInFlowRequest = {
  //                       authority: b2cPolicies.authorities.signUpSignIn.authority,
  //                       account: originalSignInAccount,
  //                   };

  //                   // silently login again with the signUpSignIn policy
  //                   instance.ssoSilent(signUpSignInFlowRequest);
  //               }

  //               /**
  //                * Below we are checking if the user is returning from the reset password flow.
  //                * If so, we will ask the user to reauthenticate with their new password.
  //                * If you do not want this behavior and prefer your users to stay signed in instead,
  //                * you can replace the code below with the same pattern used for handling the return from
  //                * profile edit flow
  //                */
  //               if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.forgotPassword) {
  //                   let signUpSignInFlowRequest = {
  //                       authority: b2cPolicies.authorities.signUpSignIn.authority,
  //                   };
  //                   instance.loginRedirect(signUpSignInFlowRequest);
  //               }
  //           }

  //           if (event.eventType === EventType.LOGIN_FAILURE) {
  //               // Check for forgot password error
  //               // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
  //               if (event.error && event.error.errorMessage.includes('AADB2C90118')) {
  //                   const resetPasswordRequest = {
  //                       authority: b2cPolicies.authorities.forgotPassword.authority,
  //                       scopes: [],
  //                   };
  //                   instance.loginRedirect(resetPasswordRequest);
  //               }
  //           }
  //       });

  //   const handleLoginPopup = () => {
  //     instance
  //         .loginPopup({
  //             ...loginRequest,
  //             redirectUri: '/redirect.html',
  //         })
  //         .catch((error) => console.log(error));
  // };
  // handleLoginPopup();

  //       return () => {
  //           if (callbackId) {
  //               instance.removeEventCallback(callbackId);
  //           }
  //       };
  //       // eslint-disable-next-line
  //   }, [instance]);
  // msalInstance.loginRedirect(loginRequest);

  function getDefaultDomains(): Option[] {
    if (config && config.defaultDomains && config.defaultDomains.length) {
      return config.defaultDomains;
    }
    return [];
  }

  return (
    <MsalProvider instance={msalInstance}>
      <Card>
        <Form id="bSDD_form">
          <Card.Body>
            {/* <Card.Title as="h4">bSDD search</Card.Title> */}
            <input type="hidden" name="ifcType" id="ifcType" value="" />
            <input type="hidden" name="name" id="name" value="" />
            <input type="hidden" name="material" id="material" value="" />
            <Row className="mb-3">
              <Col xs={7}>
                <Search
                  activeDomains={activeDomains}
                  setActiveClassificationUri={setActiveClassificationUri}
                  accessToken={accessToken}
                />
              </Col>
              <Col xs={4}>
                <SelectDomains
                  activeDomains={activeDomains}
                  setActiveDomains={setActiveDomains}
                  setDomains={setDomains}
                  accessToken={accessToken}
                />
              </Col>
              <Col>
                <RecursiveMode recursiveMode={recursiveMode} setRecursiveMode={setRecursiveMode} />
                <Authentication setAccessToken={setAccessToken} />
              </Col>
            </Row>

            <div className="mb-3 row">
              <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Classifications</Accordion.Header>
                  <Accordion.Body>
                    <Classifications
                      activeClassificationUri={activeClassificationUri}
                      recursiveMode={recursiveMode}
                      classifications={classifications}
                      setClassifications={setClassifications}
                      domains={domains}
                      accessToken={accessToken}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Propertysets</Accordion.Header>
                  <Accordion.Body>
                    <PropertySets
                      classifications={classifications}
                      propertySets={propertySets}
                      setPropertySets={setPropertySets}
                      recursiveMode={recursiveMode}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <Form.Group className="mb-3 row">
              <Apply
                callback={callback}
                domains={domains}
                classifications={classifications}
                propertySets={propertySets}
              />
            </Form.Group>
          </Card.Body>
        </Form>
      </Card>
    </MsalProvider>
  );
}

export default BsddSearch;
