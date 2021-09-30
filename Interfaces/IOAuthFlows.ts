import { IOAuthFlow } from "../mod.ts";


/**
 * Open API OAuth Flows object
 * 
 * https://spec.openapis.org/oas/v3.1.0#oauth-flows-object
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IOAuthFlows {
	/**
	 * Configuration for the OAuth Implicit flow
	 */
	implicit?: IOAuthFlow;


	/**
	 * Configuration for the OAuth Resource Owner Password flow
	 */
	password?: IOAuthFlow;


	/**
	 * Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0.
	 */
	clientCredentials?: IOAuthFlow;


	/**
	 * Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0.
	 */
	authorizationCode?: IOAuthFlow;
}